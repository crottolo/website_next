"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({
  className,
}: {
  className?: string;
}) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveBeams = (e: MouseEvent) => {
      if (!beamsRef.current) return;

      const { clientX, clientY } = e;
      const x = clientX - beamsRef.current.offsetLeft;
      const y = clientY - beamsRef.current.offsetTop;

      const keyframes = {
        transform: `translate(${x}px, ${y}px)`,
      };

      beamsRef.current.animate(keyframes, {
        duration: 2000,
        fill: "forwards",
        easing: "ease",
      });
    };

    window.addEventListener("mousemove", moveBeams);
    return () => {
      window.removeEventListener("mousemove", moveBeams);
    };
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        ref={beamsRef}
        className="absolute -inset-[10px] opacity-50"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #6366F1 0deg, #8B5CF6 72.0000010728836deg, #EC4899 144.0000021457672deg, #8B5CF6 216.00000321865082deg, #6366F1 288.0000042915344deg, #EC4899 360deg)",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}; 