"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState, useMemo } from "react"
import { motion } from "motion/react"

const HeroImage = () => {
	const { theme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const imageSrc = useMemo(() => {
		return theme === "dark" ? "/dark-clear.png" : "/light-clear.png"
	}, [theme])

	if (!mounted) {
		return null
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
			animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
			transition={{ delay: 1, type: "spring", damping: 12, stiffness: 100 }}
			exit={{ opacity: 0, y: 20 }}
		>
			<Image
				src={imageSrc}
				alt="Hero Image"
				width={1920}
				height={1080}
				className="w-full select-none"
			/>
		</motion.div>
	)
}

export default HeroImage
