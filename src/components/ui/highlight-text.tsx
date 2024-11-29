"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HighlightText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2
      }}
      className={cn(
        "relative inline-block bg-gradient-to-r from-green-700 to-green-500 dark:from-green-500/40 dark:to-green-500/10 bg-no-repeat  rounded-3xl px-2 py-1",
        className
      )}
    >
      {children}
    </motion.span>
  );
}; 