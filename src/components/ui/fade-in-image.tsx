"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface FadeInImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function FadeInImage({ src, alt, width, height, className }: FadeInImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={cn("relative overflow-hidden rounded-2xl", className)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
      />
    </motion.div>
  )
} 