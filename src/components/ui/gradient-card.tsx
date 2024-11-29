"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const GradientCard = ({
  children,
  className,
  containerClassName,
}: GradientCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-slate-800",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn("relative z-10 bg-background/90 p-8", className)}>
        {children}
      </div>
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34,197,94,.15), transparent 40%)`,
          opacity,
        }}
      />
    </div>
  );
}; 