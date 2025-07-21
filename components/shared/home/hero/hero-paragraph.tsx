"use client"

import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export default function HeroParagraph() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.9 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      transition={{ delay: 0.5, type: "spring", damping: 12, stiffness: 100 }}
      exit={{ opacity: 0, y: 20 }}
      className={cn(
        "text-muted-foreground mx-auto my-6 h-fit max-w-[45ch] text-left text-sm",
        "sm:text-center md:text-lg",
      )}
    >
      Your essential platform for enhancing productivity in web development and
      education, offering flexible resources and guides designed for speed.
    </motion.p>
  )
}
HeroParagraph.displayName = "HeroParagraph"
