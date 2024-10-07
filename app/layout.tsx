import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import type { ReactNode } from "react"

import localFont from "next/font/local"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import DotPattern from "@/components/ui/dot-pattern"

const mono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	display: "swap",
	variable: "--geist-mono",
})

const sans = localFont({
	src: "./fonts/GeistVF.woff",
	display: "swap",
	variable: "--geist-sans",
})

export const metadata: Metadata = {
	title: {
		template: "%s | CA Resources",
		default: "CA Resources",
	},
	description: `Boost your productivity with valuable web development resources and educational guides.`,
}

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={cn(sans.variable, sans.className, mono.variable, "relative")}>
				<RootProvider
				// TODO include resources in search
				// search={{
				// 	options: {
				// 		defaultTag: "all",
				// 		tags: [
				// 			{
				// 				name: "Guides",
				// 				value: "guides",
				// 			},
				// 			{
				// 				name: "Resources",
				// 				value: "resources",
				// 			},
				// 		],
				// 	},
				// }}
				>
					<DotPattern
						width={20}
						height={20}
						cx={1}
						cy={1}
						cr={1}
						className={cn(
							"fixed [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] opacity-70"
						)}
					/>
					{children}
				</RootProvider>
			</body>
		</html>
	)
}
