"use client"

import React, { FC } from "react"
import { motion } from "motion/react"

const HeroParagraph: FC = () => {
	return (
		<motion.p
			initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.9 }}
			animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
			transition={{ delay: 0.5, type: "spring", damping: 12, stiffness: 100 }}
			exit={{ opacity: 0, y: 20 }}
			className="my-6 max-w-[50ch] mx-auto h-fit p-2 text-fd-muted-foreground md:text-xl"
		>
			CA Resources is your essential platform for enhancing productivity in web development and
			education, offering <span className="font-semibold text-foreground">resources</span> and{" "}
			<span className="font-semibold text-foreground">guides</span> designed for flexibility and
			speed.
		</motion.p>
	)
}
HeroParagraph.displayName = "HeroParagraph"

export default HeroParagraph
