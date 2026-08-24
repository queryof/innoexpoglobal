"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export const FractalGlassHero: React.FC<{ className?: string }> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 550;

    // 1. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // 2. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.5);

    // 3. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.enableZoom = false;
    const angleLimit = Math.PI / 6;
    controls.minPolarAngle = Math.PI / 2 - angleLimit;
    controls.maxPolarAngle = Math.PI / 2 + angleLimit;

    // 4. Lighting & Ambient Core
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 2.5);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x2563eb, 2.0);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    // 5. Materials
    const textureLoader = new THREE.TextureLoader();
    const surfaceImperfection = textureLoader.load(
      "https://miroleon.github.io/daily-assets/surf_imp_02.jpg"
    );
    surfaceImperfection.wrapT = THREE.RepeatWrapping;
    surfaceImperfection.wrapS = THREE.RepeatWrapping;

    const chromeMat = new THREE.MeshPhysicalMaterial({
      color: 0x90a4ae,
      roughness: 0.18,
      metalness: 0.95,
      roughnessMap: surfaceImperfection,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
    });

    // 6. HDR Environment
    new RGBELoader()
      .setPath("https://miroleon.github.io/daily-assets/")
      .load("GRADIENT_01_01_comp.hdr", (hdrEquirect) => {
        hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = hdrEquirect;
        chromeMat.envMap = hdrEquirect;
        chromeMat.envMapIntensity = 2.0;
        chromeMat.needsUpdate = true;
      });

    // 7. Load 3D FBX Model (with procedural fallback mesh while loading)
    let modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // Temporary fallback chrome geometry until FBX loads
    const fallbackGeom = new THREE.TorusKnotGeometry(1.4, 0.45, 128, 32);
    const fallbackMesh = new THREE.Mesh(fallbackGeom, chromeMat);
    modelGroup.add(fallbackMesh);

    const fbxLoader = new FBXLoader();
    fbxLoader.load(
      "https://miroleon.github.io/daily-assets/two_hands_01.fbx",
      (object) => {
        object.traverse((child: any) => {
          if (child.isMesh) {
            child.material = chromeMat;
          }
        });
        object.position.set(0, -0.4, 0);
        object.scale.setScalar(0.048);
        
        // Remove fallback and add loaded FBX model
        modelGroup.remove(fallbackMesh);
        fallbackGeom.dispose();
        modelGroup.add(object);
      },
      undefined,
      (err) => {
        console.warn("FBX load error, using high-tech chrome geometry:", err);
      }
    );

    // 8. Post-Processing Pipeline
    const composer = new EffectComposer(renderer);

    const renderScene = new RenderPass(scene, camera);
    composer.addPass(renderScene);

    const afterimagePass = new AfterimagePass();
    (afterimagePass.uniforms as any)["damp"].value = 0.86;
    composer.addPass(afterimagePass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      1.35,
      0.35,
      0.82
    );
    composer.addPass(bloomPass);

    // Fractal Glass Displacement Shader
    const displacementShader = {
      uniforms: {
        tDiffuse: { value: null },
        displacement: { value: null },
        scale: { value: 0.035 },
        tileFactor: { value: 2.2 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform sampler2D displacement;
        uniform float scale;
        uniform float tileFactor;
        varying vec2 vUv;
        void main() {
          vec2 tiledUv = mod(vUv * tileFactor, 1.0);
          vec2 disp = texture2D(displacement, tiledUv).rg * scale;
          vec2 distUv = vUv + disp;
          vec4 color = texture2D(tDiffuse, distUv);
          gl_FragColor = color;
        }
      `,
    };

    const displacementTexture = textureLoader.load(
      "https://raw.githubusercontent.com/miroleon/displacement_texture_freebie/main/assets/1K/jpeg/normal/ml-dpt-21-1K_normal.jpeg",
      (tex) => {
        tex.minFilter = THREE.NearestFilter;
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
      }
    );

    const displacementPass = new ShaderPass(displacementShader);
    (displacementPass.uniforms as any)["displacement"].value = displacementTexture;
    (displacementPass.uniforms as any)["scale"].value = 0.028;
    (displacementPass.uniforms as any)["tileFactor"].value = 2.0;
    composer.addPass(displacementPass);

    // 9. Smooth User Interaction & Camera Auto-Sway
    let isUserInteracting = false;
    let transitionProgress = 0;
    const transitionIncrement = 1 / (60 * 2.5);
    const transitionStartCamPos = new THREE.Vector3();
    const transitionStartCamQuat = new THREE.Quaternion();

    function easeInOutCubic(x: number) {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }

    controls.addEventListener("start", () => {
      isUserInteracting = true;
    });
    controls.addEventListener("end", () => {
      isUserInteracting = false;
      transitionStartCamPos.copy(camera.position);
      transitionStartCamQuat.copy(camera.quaternion);
      transitionProgress = 0;
    });

    let theta = 0;
    const updateCameraOrbit = () => {
      theta += 0.006;
      const targetPos = new THREE.Vector3(
        Math.sin(theta) * 3.2,
        Math.sin(theta * 0.8) * 0.8,
        Math.cos(theta) * 7.5
      );
      const targetQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(0, -theta * 0.4, 0)
      );

      if (isUserInteracting) {
        transitionProgress = 0;
        transitionStartCamPos.copy(camera.position);
        transitionStartCamQuat.copy(camera.quaternion);
      } else {
        if (transitionProgress < 1) {
          transitionProgress += transitionIncrement;
          const eased = easeInOutCubic(transitionProgress);
          camera.position.lerpVectors(transitionStartCamPos, targetPos, eased);
          camera.quaternion.slerpQuaternions(transitionStartCamQuat, targetQuat, eased);
        } else {
          camera.position.copy(targetPos);
          camera.quaternion.copy(targetQuat);
        }
      }
      camera.lookAt(0, 0, 0);
    };

    // 10. Resize
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || 500;
      height = container.clientHeight || 550;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // 11. Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      modelGroup.rotation.y += 0.003;
      updateCameraOrbit();
      composer.render();
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      composer.dispose();
      chromeMat.dispose();
      surfaceImperfection.dispose();
      displacementTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[480px] sm:h-[560px] lg:h-[640px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}
    >
      {/* Radiant Cyan & Blue Backdrop Aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-[240px] h-[240px] bg-cyan-400/20 blur-[80px] rounded-full"
      />

      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Floating HUD Tags */}
      <div className="absolute top-6 right-6 bg-zinc-950/80 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-xl shadow-xl flex items-center gap-2 pointer-events-none animate-pulse">
        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
        <span className="text-[10.5px] font-mono text-zinc-300">FRACTAL_GLASS // 3D</span>
      </div>

      <div className="absolute bottom-8 left-6 bg-zinc-950/80 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-xl shadow-xl flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
        <span className="text-[10px] font-mono text-zinc-400">Drag to rotate · Auto Orbit</span>
      </div>
    </div>
  );
};

export default FractalGlassHero;
