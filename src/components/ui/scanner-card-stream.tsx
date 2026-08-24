"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

// High-quality tech & science curated cards for Inno Expo GL
export interface CardItem {
  id?: number;
  title: string;
  category: string;
  code: string;
  image: string;
}

export const defaultTechCards: CardItem[] = [
  {
    title: "Autonomous Robotics",
    category: "WRB Games · Japan Qualifiers",
    code: "ROBOTICS_V4",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Breakthrough Innovation",
    category: "Global Science Summit 2026",
    code: "INNOVATION_GL",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Neural Machine Learning",
    category: "Deep Learning & Model Training",
    code: "ML_NEURAL_CORE",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Artificial Intelligence",
    category: "Cognitive Computing & LLMs",
    code: "AI_COGNITIVE_O1",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "CSE International Olympiad",
    category: "Competitive Algorithms & Systems",
    code: "CSE_OLYMPIAD_26",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
];

// --- Helper function to generate ASCII-like code ---
const ASCII_CHARS = "01010101_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ(){}[];:<>.,=+-*#@%";
const generateCode = (width: number, height: number): string => {
  let text = "";
  for (let i = 0; i < width * height; i++) {
    text += ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];
  }
  let out = "";
  for (let i = 0; i < height; i++) {
    out += text.substring(i * width, (i + 1) * width) + "\n";
  }
  return out;
};

// --- Component Props Type Definition ---
export interface ScannerCardStreamProps {
  showControls?: boolean;
  showSpeed?: boolean;
  initialSpeed?: number;
  direction?: -1 | 1;
  cardsData?: CardItem[];
  repeat?: number;
  cardGap?: number;
  friction?: number;
  scanEffect?: "clip" | "scramble";
  scannerPercent?: number;
  className?: string;
}

export const ScannerCardStream: React.FC<ScannerCardStreamProps> = ({
  initialSpeed = 110,
  direction = -1,
  cardsData = defaultTechCards,
  repeat = 5,
  cardGap = 35,
  friction = 0.96,
  scanEffect = "scramble",
  scannerPercent = 50,
  className = "",
}) => {
  const [isScanning, setIsScanning] = useState(false);

  const cards = useMemo(() => {
    const totalCards = cardsData.length * repeat;
    return Array.from({ length: totalCards }, (_, i) => {
      const item = cardsData[i % cardsData.length];
      return {
        id: i,
        ...item,
        ascii: generateCode(Math.floor(340 / 6.5), Math.floor(210 / 12)),
      };
    });
  }, [cardsData, repeat]);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardLineRef = useRef<HTMLDivElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const scannerCanvasRef = useRef<HTMLCanvasElement>(null);
  const originalAscii = useRef(new Map<number, string>());

  const cardStreamState = useRef({
    position: 0,
    velocity: initialSpeed,
    direction: direction,
    isDragging: false,
    lastMouseX: 0,
    lastTime: performance.now(),
    cardLineWidth: (340 + cardGap) * cards.length,
    friction: friction,
    minVelocity: 30,
  });

  const scannerState = useRef({ isScanning: false });

  useEffect(() => {
    const cardLine = cardLineRef.current;
    const particleCanvas = particleCanvasRef.current;
    const scannerCanvas = scannerCanvasRef.current;
    const container = containerRef.current;

    if (!cardLine || !particleCanvas || !scannerCanvas || !container) return;

    cards.forEach((card) => originalAscii.current.set(card.id, card.ascii));
    let animationFrameId: number;

    const width = container.offsetWidth || window.innerWidth;
    const height = container.offsetHeight || 300;

    // Three.js background particles
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 1, 1000);
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ canvas: particleCanvas, alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    const particleCount = 260;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);
    const alphas = new Float32Array(particleCount);

    const texCanvas = document.createElement("canvas");
    texCanvas.width = 64;
    texCanvas.height = 64;
    const texCtx = texCanvas.getContext("2d")!;
    const half = 32;
    const gradient = texCtx.createRadialGradient(half, half, 0, half, half, half);
    gradient.addColorStop(0.02, "#ffffff");
    gradient.addColorStop(0.18, "#38bdf8");
    gradient.addColorStop(0.45, "#1d4ed8");
    gradient.addColorStop(1, "transparent");
    texCtx.fillStyle = gradient;
    texCtx.arc(half, half, half, 0, Math.PI * 2);
    texCtx.fill();

    const texture = new THREE.CanvasTexture(texCanvas);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * width * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * height;
      velocities[i] = Math.random() * 40 + 20;
      alphas[i] = (Math.random() * 8 + 2) / 10;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: { pointTexture: { value: texture } },
      vertexShader: `
        attribute float alpha;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 12.0;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D pointTexture;
        varying float vAlpha;
        void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, vAlpha) * texture2D(pointTexture, gl_PointCoord);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Scanner beam particle canvas
    const ctx = scannerCanvas.getContext("2d")!;
    scannerCanvas.width = width;
    scannerCanvas.height = height;

    let scannerParticles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      life: number;
      decay: number;
    }> = [];

    const baseMaxParticles = 350;
    let currentMaxParticles = baseMaxParticles;
    const scanTargetMaxParticles = 1000;

    const createScannerParticle = () => ({
      x: width * (scannerPercent / 100) + (Math.random() - 0.5) * 5,
      y: Math.random() * height,
      vx: Math.random() * 0.9 + 0.2,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 0.6 + 0.4,
      alpha: Math.random() * 0.4 + 0.6,
      life: 1.0,
      decay: Math.random() * 0.02 + 0.005,
    });

    for (let i = 0; i < baseMaxParticles; i++) scannerParticles.push(createScannerParticle());

    const runScrambleEffect = (element: HTMLElement, cardId: number) => {
      if (element.dataset.scrambling === "true") return;
      element.dataset.scrambling = "true";
      const originalText = originalAscii.current.get(cardId) || "";
      let scrambleCount = 0;
      const maxScrambles = 8;
      const interval = setInterval(() => {
        element.textContent = generateCode(Math.floor(340 / 6.5), Math.floor(210 / 12));
        scrambleCount++;
        if (scrambleCount >= maxScrambles) {
          clearInterval(interval);
          element.textContent = originalText;
          delete element.dataset.scrambling;
        }
      }, 30);
    };

    const updateCardEffects = () => {
      const containerRect = container.getBoundingClientRect();
      const scannerX = containerRect.left + containerRect.width * (scannerPercent / 100);
      const scannerWidth = 10;
      const scannerLeft = scannerX - scannerWidth / 2;
      const scannerRight = scannerX + scannerWidth / 2;
      let anyCardIsScanning = false;

      cardLine.querySelectorAll<HTMLElement>(".card-wrapper").forEach((wrapper, index) => {
        const rect = wrapper.getBoundingClientRect();
        const normalCard = wrapper.querySelector<HTMLElement>(".card-normal")!;
        const asciiCard = wrapper.querySelector<HTMLElement>(".card-ascii")!;
        const asciiContent = asciiCard?.querySelector<HTMLElement>("pre");

        if (rect.left < scannerRight && rect.right > scannerLeft) {
          anyCardIsScanning = true;
          if (scanEffect === "scramble" && wrapper.dataset.scanned !== "true" && asciiContent) {
            runScrambleEffect(asciiContent, index);
          }
          wrapper.dataset.scanned = "true";
          const intersectLeft = Math.max(scannerLeft - rect.left, 0);
          const intersectRight = Math.min(scannerRight - rect.left, rect.width);
          normalCard?.style.setProperty("--clip-right", `${(intersectLeft / rect.width) * 100}%`);
          asciiCard?.style.setProperty("--clip-left", `${(intersectRight / rect.width) * 100}%`);
        } else {
          delete wrapper.dataset.scanned;
          if (rect.right < scannerLeft) {
            normalCard?.style.setProperty("--clip-right", "100%");
            asciiCard?.style.setProperty("--clip-left", "100%");
          } else {
            normalCard?.style.setProperty("--clip-right", "0%");
            asciiCard?.style.setProperty("--clip-left", "0%");
          }
        }
      });

      setIsScanning(anyCardIsScanning);
      scannerState.current.isScanning = anyCardIsScanning;
    };

    const handleMouseDown = (e: MouseEvent) => {
      cardStreamState.current.isDragging = true;
      cardStreamState.current.lastMouseX = e.clientX;
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardStreamState.current.isDragging) return;
      const deltaX = e.clientX - cardStreamState.current.lastMouseX;
      cardStreamState.current.position += deltaX;
      cardStreamState.current.lastMouseX = e.clientX;
    };
    const handleMouseUp = () => {
      cardStreamState.current.isDragging = false;
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - cardStreamState.current.lastTime) / 1000;
      cardStreamState.current.lastTime = currentTime;

      if (!cardStreamState.current.isDragging) {
        cardStreamState.current.position +=
          cardStreamState.current.velocity * cardStreamState.current.direction * deltaTime;
      }

      const { position, cardLineWidth } = cardStreamState.current;
      const containerW = container.offsetWidth || window.innerWidth;
      if (position < -cardLineWidth) cardStreamState.current.position = containerW;
      else if (position > containerW) cardStreamState.current.position = -cardLineWidth;

      cardLine.style.transform = `translateX(${cardStreamState.current.position}px)`;
      updateCardEffects();

      const time = currentTime * 0.001;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i] * 0.016;
        if (positions[i * 3] > width / 2 + 80) positions[i * 3] = -width / 2 - 80;
        positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.35;
        alphas[i] = Math.max(0.1, Math.min(1, alphas[i] + (Math.random() - 0.5) * 0.05));
      }
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.alpha.needsUpdate = true;
      renderer.render(scene, camera);

      ctx.clearRect(0, 0, width, height);
      const targetCount = scannerState.current.isScanning ? scanTargetMaxParticles : baseMaxParticles;
      currentMaxParticles += (targetCount - currentMaxParticles) * 0.05;
      while (scannerParticles.length < currentMaxParticles) scannerParticles.push(createScannerParticle());
      while (scannerParticles.length > currentMaxParticles) scannerParticles.pop();

      scannerParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        if (p.life <= 0 || p.x > width) Object.assign(p, createScannerParticle());
        ctx.globalAlpha = p.alpha * p.life;
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, [cards, cardGap, friction, scanEffect, scannerPercent]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none ${className}`}
    >
      <style jsx global>{`
        @keyframes glitch {
          0%, 16%, 50%, 100% { opacity: 1; }
          15%, 99% { opacity: 0.9; }
          49% { opacity: 0.75; }
        }
        .animate-glitch {
          animation: glitch 0.12s infinite linear alternate-reverse;
        }
        @keyframes scanPulse {
          0% { opacity: 0.75; transform: scaleY(1); }
          100% { opacity: 1; transform: scaleY(1.04); }
        }
        .animate-scan-pulse {
          animation: scanPulse 1.5s infinite alternate ease-in-out;
        }
      `}</style>

      {/* Particle Canvas Behind Cards */}
      <canvas
        ref={particleCanvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Scanner Sparkles Canvas */}
      <canvas
        ref={scannerCanvasRef}
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
      />

      {/* Electric Blue Holographic Scanner Line at the boundary */}
      <div
        className={`scanner-line absolute top-1/2 h-[320px] w-0.5 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-full transition-opacity duration-300 z-20 pointer-events-none animate-scan-pulse ${
          isScanning ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: `${scannerPercent}%`,
          boxShadow: `0 0 12px #38bdf8, 0 0 25px #3b82f6, 0 0 45px #2563eb, 0 0 60px #1d4ed8`,
        }}
      />

      {/* Card Stream Row */}
      <div className="absolute w-full h-full flex items-center">
        <div
          ref={cardLineRef}
          className="flex items-center whitespace-nowrap cursor-grab active:cursor-grabbing select-none will-change-transform"
          style={{ gap: `${cardGap}px` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="card-wrapper relative w-[300px] sm:w-[340px] h-[195px] sm:h-[220px] shrink-0 rounded-2xl border border-white/15 bg-zinc-950/80 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden"
            >
              {/* Normal Visual Card (Visible in Right Gap) */}
              <div className="card-normal card absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden bg-zinc-950 z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover opacity-85 brightness-105 contrast-110 transition-all hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent p-4 sm:p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                      {card.code}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-medium block">{card.category}</span>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">{card.title}</h3>
                  </div>
                </div>
              </div>

              {/* ASCII Scrambled Matrix Card (Flows Behind Hero Text on the Left) */}
              <div className="card-ascii card absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden bg-black/95 z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)] p-4 flex flex-col justify-between border border-cyan-500/40 opacity-80">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-mono text-cyan-400">[DECODING_PAYLOAD]</span>
                  <span className="text-[9px] font-mono text-blue-400">SCAN:ACTIVE</span>
                </div>
                <pre className="ascii-content w-full h-full text-[rgba(56,189,248,0.75)] font-mono text-[9px] leading-[11px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.85)_40%,rgba(0,0,0,0.4)_100%)] animate-glitch">
                  {card.ascii}
                </pre>
                <div className="pt-1.5 text-[9px] font-mono text-cyan-300 flex items-center justify-between border-t border-cyan-900/50">
                  <span>ID: #{card.id + 100}</span>
                  <span className="uppercase text-[8.5px] text-zinc-400">{card.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScannerCardStream;
