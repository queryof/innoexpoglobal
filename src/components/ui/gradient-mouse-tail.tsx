"use client";

import React, { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  time: number;
}

export const GradientMouseTail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const history: TrailPoint[] = [];
    const maxAge = 400; // ms
    let mouse = { x: -100, y: -100 };

    const onPointerMove = (e: PointerEvent | MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      history.push({ x: mouse.x, y: mouse.y, time: performance.now() });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let animationFrameId: number;

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      const now = performance.now();

      ctx.clearRect(0, 0, width, height);

      // Filter out old points
      while (history.length > 0 && now - history[0].time > maxAge) {
        history.shift();
      }

      if (history.length < 3) return;

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      // Draw smooth quadratic curve trail with tapering width
      for (let i = 1; i < history.length - 1; i++) {
        const p0 = history[i - 1];
        const p1 = history[i];
        const p2 = history[i + 1];

        // Midpoint quadratic interpolation for butter-smooth lines
        const midX1 = (p0.x + p1.x) / 2;
        const midY1 = (p0.y + p1.y) / 2;
        const midX2 = (p1.x + p2.x) / 2;
        const midY2 = (p1.y + p2.y) / 2;

        const ageProgress = (now - p1.time) / maxAge; // 0 (new) to 1 (old)
        const alpha = Math.max(0, 1 - ageProgress);
        const thickness = Math.max(1, (1 - ageProgress) * 7);

        // Radiant Gradient from Cyan to Electric Blue
        const grad = ctx.createLinearGradient(midX1, midY1, midX2, midY2);
        grad.addColorStop(0, `rgba(56, 189, 248, ${alpha * 0.9})`); // Bright Cyan
        grad.addColorStop(1, `rgba(59, 130, 246, ${alpha * 0.7})`); // Sapphire

        ctx.beginPath();
        ctx.moveTo(midX1, midY1);
        ctx.quadraticCurveTo(p1.x, p1.y, midX2, midY2);

        ctx.strokeStyle = grad;
        ctx.lineWidth = thickness;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = (1 - ageProgress) * 14;
        ctx.stroke();
      }

      // Small glowing core dot at mouse head
      if (history.length > 0) {
        const head = history[history.length - 1];
        ctx.beginPath();
        ctx.arc(head.x, head.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 10;
        ctx.fill();
      }

      ctx.restore();
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      style={{ willChange: "transform" }}
    />
  );
};

export default GradientMouseTail;
