"use client"

import { motion } from "framer-motion"
import { FC } from "react"

interface SectionTitleProps {
	children: React.ReactNode
}

const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
	return (
		<motion.h2
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.5 }}
			transition={{ type: "spring", damping: 15, stiffness: 100 }}
			className="text-center text-2xl font-semibold sm:text-3xl"
		>
			{children}
		</motion.h2>
	)
}
SectionTitle.displayName = "SectionTitle"

export default SectionTitle
