"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { FC } from "react"
import { motion } from "motion/react"

const ActionButton: FC = () => {
	return (
		<div className="relative z-10 mt-8 gap-3 flex justify-center">
			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.9 }}
				animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
				transition={{ delay: 0.75, type: "spring", damping: 12, stiffness: 100 }}
				exit={{ opacity: 0, y: 20 }}
			>
				<Button
					size="lg"
					asChild
				>
					<Link
						href="/resources/chrome-extensions"
						aria-label="Explore resources"
					>
						Explore
					</Link>
				</Button>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.9 }}
				animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
				transition={{ delay: 1, type: "spring", damping: 12, stiffness: 100 }}
				exit={{ opacity: 0, y: 20 }}
			>
				<Button
					variant="outline"
					size="lg"
					asChild
				>
					<Link
						href="/guides"
						aria-label="Learn guides"
					>
						Learn
					</Link>
				</Button>
			</motion.div>
		</div>
	)
}
ActionButton.displayName = "ActionButton"

export default ActionButton
