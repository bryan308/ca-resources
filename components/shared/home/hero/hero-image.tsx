"use client"

import { motion } from "motion/react"

import Image from "next/image"

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 1, type: "spring", damping: 12, stiffness: 100 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-full min-w-[600px] overflow-hidden dark:[mask-image:linear-gradient(to_top,transparent,white_40px)]"
    >
      <Image
        className="-mb-60 object-cover select-none lg:-mb-40"
        src="https://gvmemz92tx.ufs.sh/f/bnhBIvQHoxyMWLd07wNmYX9e0EjGMwsKI1kTWaHcJ7vlSZgP"
        priority
        alt="Hero Image"
        width={1920}
        height={1280}
        quality={85}
        draggable={false}
        fetchPriority="high"
      />
    </motion.div>
  )
}
