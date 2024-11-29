"use client"

import { motion } from "framer-motion"
import { SheetContent } from "./sheet"
import { forwardRef } from "react"

const AnimatedSheetContent = forwardRef<
  React.ElementRef<typeof SheetContent>,
  React.ComponentPropsWithoutRef<typeof SheetContent>
>(({ children, ...props }, ref) => (
  <SheetContent {...props} ref={ref}>
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
      className="flex flex-col h-full"
    >
      {children}
    </motion.div>
  </SheetContent>
))

AnimatedSheetContent.displayName = "AnimatedSheetContent"

const MenuItemAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      damping: 15,
      stiffness: 300,
    },
  }),
}

const MenuItem = motion.create(motion.div)

export { AnimatedSheetContent, MenuItemAnimation, MenuItem } 