"use client"

import React, { FC } from "react"
import { Button } from "@/components/ui/button"
import Link from "fumadocs-core/link"
import { motion } from "motion/react"

const GitHubButton: FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20, filter: "blur(10px)", scale: 0.8 }}
			animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
			transition={{ delay: 0.5, type: "spring", damping: 12, stiffness: 100 }}
			exit={{ opacity: 0, y: -20 }}
		>
			<Button
				className="mb-6 rounded-full gap-1 text-base"
				variant="outline"
				asChild
			>
				<Link
					href="https://github.com/bryan308/ca-resources"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex gap-1"
					aria-label="Star on GitHub"
				>
					<svg
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5 fill-foreground"
					>
						<title>GitHub</title>
						<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
					</svg>
					Star on GitHub
					<svg
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="text-yellow-400 w-5 h-5"
					>
						<path
							d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
							fill="currentColor"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</Link>
			</Button>
		</motion.div>
	)
}
GitHubButton.displayName = "GitHubButton"

export default GitHubButton
