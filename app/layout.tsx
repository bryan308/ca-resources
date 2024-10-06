import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import type { ReactNode } from "react"

import localFont from "next/font/local"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
// import { baseOptions } from "./layout.config"

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
			<body className={cn(sans.variable, sans.className, mono.variable)}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	)
}
