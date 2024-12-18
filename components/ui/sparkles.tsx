"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  className,
  background,
  minSize = 0.4,
  maxSize = 1,
  particleCount = 50,
}: {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleCount?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const gradientRef = useRef<CanvasGradient | null>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    size: number;
    velocity: { x: number; y: number };
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    contextRef.current = context;
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#8B5CF6");
    gradient.addColorStop(0.5, "#EC4899");
    gradient.addColorStop(1, "#6366F1");
    gradientRef.current = gradient;

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          velocity: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
          },
        });
      }
      particlesRef.current = newParticles;
    };

    resizeCanvas();
    generateParticles();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [maxSize, minSize, particleCount]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      const context = contextRef.current;
      const canvas = canvasRef.current;
      if (!context || !canvas) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.map((particle) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        if (gradientRef.current) {
          context.fillStyle = gradientRef.current;
        }
        context.fill();

        return {
          ...particle,
          x: (particle.x + particle.velocity.x + canvas.width) % canvas.width,
          y: (particle.y + particle.velocity.y + canvas.height) % canvas.height,
        };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 h-full w-full", className)}
      style={{
        background: background || "transparent",
      }}
    />
  );
}; 