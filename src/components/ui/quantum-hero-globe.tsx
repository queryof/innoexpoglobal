"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export const QuantumHeroGlobe: React.FC<{ className?: string }> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // 1. Scene & Transparent Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 2. Main 3D Interactive Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- Texture Generator for Glowing Point Particles ---
    const createSparkleTexture = (color: string) => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d")!;
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.2, color);
      grad.addColorStop(0.55, "rgba(37, 99, 235, 0.4)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const cyanTexture = createSparkleTexture("#38bdf8");
    const blueTexture = createSparkleTexture("#60a5fa");

    // 3. Central Icosahedron Wireframe Tech Core
    const coreGeom = new THREE.IcosahedronGeometry(4.2, 2);
    const wireGeom = new THREE.WireframeGeometry(coreGeom);
    const wireMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const coreWireframe = new THREE.LineSegments(wireGeom, wireMaterial);
    mainGroup.add(coreWireframe);

    // 4. Central Polyhedron Glowing Nodes (Vertices)
    const vertPos = coreGeom.attributes.position.array;
    const nodeGeom = new THREE.BufferGeometry();
    nodeGeom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(vertPos), 3));
    const nodeMaterial = new THREE.PointsMaterial({
      size: 0.35,
      map: cyanTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const coreNodes = new THREE.Points(nodeGeom, nodeMaterial);
    mainGroup.add(coreNodes);

    // 5. Inner Pulsing Energy Orb
    const innerGeom = new THREE.SphereGeometry(2.4, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x1d4ed8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerOrb = new THREE.Mesh(innerGeom, innerMat);
    mainGroup.add(innerOrb);

    // 6. Multi-Axis 3D Orbital Gyro Rings with Satellites
    const createOrbitalRing = (radius: number, tube: number, color: number, rotX: number, rotY: number) => {
      const ringGeom = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = rotX;
      ringMesh.rotation.y = rotY;

      // Add Glowing Satellite Node on Ring
      const satGeom = new THREE.SphereGeometry(0.24, 16, 16);
      const satMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
      });
      const satellite = new THREE.Mesh(satGeom, satMat);
      satellite.position.set(radius, 0, 0);
      ringMesh.add(satellite);

      return ringMesh;
    };

    const ring1 = createOrbitalRing(6.0, 0.03, 0x38bdf8, Math.PI / 3, Math.PI / 6);
    const ring2 = createOrbitalRing(6.8, 0.03, 0x60a5fa, -Math.PI / 4, Math.PI / 4);
    const ring3 = createOrbitalRing(7.6, 0.025, 0x93c5fd, Math.PI / 2.2, -Math.PI / 5);
    mainGroup.add(ring1);
    mainGroup.add(ring2);
    mainGroup.add(ring3);

    // 7. Ambient Particle Swarm (Quantum Constellation)
    const particleCount = 650;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);
    const particleRadii = new Float32Array(particleCount);
    const particleAngles = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const r = 5.0 + Math.random() * 6.5;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 8;

      particlePositions[i * 3] = Math.cos(angle) * r;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = Math.sin(angle) * r;

      particleRadii[i] = r;
      particleAngles[i] = angle;
      particleSpeeds[i] = 0.2 + Math.random() * 0.4;
    }

    const swarmGeom = new THREE.BufferGeometry();
    swarmGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const swarmMat = new THREE.PointsMaterial({
      size: 0.28,
      map: blueTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleSwarm = new THREE.Points(swarmGeom, swarmMat);
    mainGroup.add(particleSwarm);

    // 8. Interactive Mouse Pointer Physics
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = mouseX * 0.8;
      targetRotationX = -mouseY * 0.6;

      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;
        mainGroup.rotation.y += deltaX * 0.008;
        mainGroup.rotation.x += deltaY * 0.008;
      }
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener("pointermove", onPointerMove);
    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // 9. Resize Observer
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || 500;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // 10. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth auto-rotation + mouse parallax lerp
      if (!isDragging) {
        mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05 + 0.004;
        mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;
      }

      // Orbital Gyro Ring independent counter-rotations
      ring1.rotation.z += 0.008;
      ring2.rotation.z -= 0.006;
      ring3.rotation.z += 0.005;

      // Inner pulsating core breath
      const pulseScale = 1.0 + Math.sin(elapsedTime * 2.5) * 0.06;
      innerOrb.scale.set(pulseScale, pulseScale, pulseScale);
      coreWireframe.rotation.y -= 0.003;
      coreNodes.rotation.y -= 0.003;

      // Dynamic Particle Swarm Vortex Motion
      const posArray = swarmGeom.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        particleAngles[i] += particleSpeeds[i] * delta * 0.6;
        const r = particleRadii[i] + Math.sin(elapsedTime + i) * 0.3;
        posArray[i * 3] = Math.cos(particleAngles[i]) * r;
        posArray[i * 3 + 2] = Math.sin(particleAngles[i]) * r;
        posArray[i * 3 + 1] += Math.sin(elapsedTime * 2 + i * 0.5) * 0.015;
      }
      swarmGeom.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeom.dispose();
      wireGeom.dispose();
      innerGeom.dispose();
      swarmGeom.dispose();
      wireMaterial.dispose();
      nodeMaterial.dispose();
      innerMat.dispose();
      swarmMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[450px] sm:h-[550px] lg:h-[620px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}
    >
      {/* Ambient Blue Core Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-[360px] h-[360px] bg-blue-600/20 blur-[110px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-[220px] h-[220px] bg-cyan-400/20 blur-[80px] rounded-full"
      />

      {/* Floating Hologram HUD Tags */}
      <div className="absolute top-6 right-6 bg-zinc-950/80 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-xl shadow-xl flex items-center gap-2 pointer-events-none animate-pulse">
        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
        <span className="text-[10px] font-mono text-zinc-300">QUANTUM_NODE // 2026</span>
      </div>

      <div className="absolute bottom-8 left-6 bg-zinc-950/80 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-xl shadow-xl flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
        <span className="text-[10px] font-mono text-zinc-300">INTERACTIVE 3D ORBIT</span>
      </div>
    </div>
  );
};

export default QuantumHeroGlobe;
