import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import type { ReactNode } from "react"

import localFont from "next/font/local"
import { cn } from "@/lib/utils"
import { Metadata } from "next"

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
	openGraph: {
		title: "CA Resources",
		description:
			"Boost your productivity with valuable web development resources and educational guides.",
		url: "https://ca-resources.vercel.app",
		siteName: "CA Resources",
		images: [
			{
				url: "/banner.png",
				width: 1920,
				height: 1080,
				alt: "CA Resources",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "CA Resources",
		description:
			"Boost your productivity with valuable web development resources and educational guides.",
		images: ["/banner.png"],
	},
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
					{children}
				</RootProvider>
			</body>
		</html>
	)
}

// ʕ•ᴥ•ʔ