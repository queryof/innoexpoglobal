'use client';

import React, { useMemo, useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import * as THREE from 'three/webgpu';
import { Mesh } from 'three';

import {
  abs,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
  add
} from 'three/tsl';

const TEXTUREMAP = { src: 'https://i.postimg.cc/XYwvXN8D/img-4.png' };
const DEPTHMAP = { src: 'https://i.postimg.cc/2SHKQh2q/raw-4.webp' };

const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);

  const meshRef = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) {
      setVisible(true);
    }
  }, [rawMap, depthMap]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);
    const uOpacity = uniform(0);

    // Enhanced pointer displacement strength for high mouse reactivity
    const strength = 0.045;

    const tDepthMap = texture(depthMap);

    const tMap = texture(
      rawMap,
      uv().add(tDepthMap.r.mul(uPointer).mul(strength))
    );

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(120.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));

    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);

    const depth = tDepthMap;

    // Glowing cyan/blue laser scanline
    const flow = oneMinus(smoothstep(0, 0.025, abs(depth.sub(uProgress))));
    const mask = dot.mul(flow).mul(vec3(0, 4, 12));

    // Dynamic scanline overlay
    const uvY = uv().y;
    const scanPos = float(uProgress);
    const scanLine = smoothstep(0, 0.035, abs(uvY.sub(scanPos)));
    const laserGlow = vec3(0.2, 0.7, 1.0).mul(oneMinus(scanLine)).mul(0.6);

    const blended = blendScreen(tMap, add(mask, laserGlow));

    // Key out the black background around the 3D model for 100% transparency
    const luma = tMap.r.add(tMap.g).add(tMap.b).mul(0.333);
    const alphaMask = smoothstep(0.015, 0.12, luma).mul(uOpacity);

    const material = new (THREE as any).MeshBasicNodeMaterial({
      colorNode: blended,
      opacityNode: alphaMask,
      transparent: true,
      depthWrite: false,
    });

    return {
      material,
      uniforms: {
        uPointer,
        uProgress,
        uOpacity,
      },
    };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock, pointer }) => {
    const time = clock.getElapsedTime();
    // Continuous smooth scan line animation
    uniforms.uProgress.value = (Math.sin(time * 0.7) * 0.5 + 0.5);

    // Smooth opacity fade-in
    uniforms.uOpacity.value = THREE.MathUtils.lerp(
      uniforms.uOpacity.value,
      visible ? 1 : 0,
      0.08
    );

    // Highly reactive mouse pointer uniform
    uniforms.uPointer.value.x = THREE.MathUtils.lerp(uniforms.uPointer.value.x, pointer.x, 0.1);
    uniforms.uPointer.value.y = THREE.MathUtils.lerp(uniforms.uPointer.value.y, pointer.y, 0.1);

    // Interactive 3D Mesh tilt & hover physics
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        pointer.x * 0.45,
        0.08
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        -pointer.y * 0.35,
        0.08
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        Math.sin(time * 1.5) * 0.08 + pointer.y * 0.15,
        0.08
      );
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        pointer.x * 0.15,
        0.08
      );
    }
  });

  // Significantly enlarged scale factor for prominent hero display
  const scaleFactor = 0.88;
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

export interface HeroFuturisticModelProps {
  className?: string;
}

export const HeroFuturisticModel: React.FC<HeroFuturisticModelProps> = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full h-[500px] sm:h-[580px] lg:h-[650px] flex items-center justify-center select-none overflow-visible ${className}`}
    >
      {/* Radiant Cyan & Blue Ambient Glow Backdrops (Transparent & Non-blocking) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-[420px] h-[420px] bg-blue-600/25 blur-[120px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute w-[260px] h-[260px] bg-cyan-400/20 blur-[90px] rounded-full"
      />

      <Canvas
        flat
        gl={async (props) => {
          const renderer = new (THREE as any).WebGPURenderer({
            ...(props as any),
            alpha: true,
            antialias: true,
          });
          renderer.setClearColor(0x000000, 0);
          await renderer.init();
          return renderer;
        }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroFuturisticModel;
