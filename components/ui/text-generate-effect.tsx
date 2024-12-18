"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComplete(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const characters = words.split("").map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 10 }}
      animate={complete ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.2,
        delay: complete ? i * 0.1 : 0,
        ease: "easeInOut",
      }}
      className={cn("inline-block", char === " " ? "w-[0.3em]" : "")}
      aria-hidden={char === " "}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

  return (
    <div className={cn("font-bold", className)}>
      <div className="leading-snug tracking-wide">{characters}</div>
    </div>
  );
}; 