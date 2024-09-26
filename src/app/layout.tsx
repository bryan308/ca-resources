import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

import Header from "@/components/shared/header"
import Aside from "@/components/shared/aside"
import ScrollToTopButton from "@/components/shared/scroll-to-top"
import NextTopLoader from "nextjs-toploader"

import type { Metadata } from "next"
import Providers from "@/components/shared/theme-provider"
import { siteMetadata as meta } from "@/data/site-config"
import localFont from "next/font/local"
import { cn } from "@/lib/utils"

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
		default: meta.title,
		template: `%s – ${meta.title}`,
	},
	description: meta.description,
	keywords: [
		"Resources",
		"HTML element Guides",
		"Helpful websites",
		"Colors",
		"Icons",
		"inspirations",
		"Mockup Tools",
		"Stock Photos",
		"Typography",
		"Web Development",
	],
	openGraph: {
		type: "website",
		siteName: "CA Resources - Your Productivity Hub for Web Development and Education",
		url: meta.url,
		title: meta.title,
		description: meta.description,
		images: [
			{
				url: `${meta.url}${meta.banner}`,
				alt: meta.title,
			},
		],
	},
	twitter: {
		site: meta.url,
		card: "summary_large_image",
		title: meta.title,
		creator: meta.socials.x.username,
		description: meta.description,
		images: [
			{
				url: `${meta.url}${meta.banner}`,
				alt: meta.title,
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={cn(sans.variable, sans.className, mono.variable)}>
				<NextTopLoader
					color="hsl(var(--foreground))"
					showSpinner={false}
				/>
				<Providers>
					<Header />
					<div className="h-16 md:hidden" />
					<main
						className="flex max-w-[76.25rem] flex-col xl:mx-auto xl:mt-0 xl:grid xl:grid-cols-[16.25rem_1fr] min-h-[calc(100dvh-3.5rem)] xl:min-h-[calc(100dvh-4.2rem)]"
						role="main"
					>
						<Aside />
						<div className="relative border border-t-0 border-l-0 border-border min-h-[calc(100dvh-3.5rem)] xl:min-h-[calc(100dvh-4.2rem)]">
							{children}
							<ScrollToTopButton />
						</div>
					</main>
					<Analytics />
				</Providers>
			</body>
		</html>
	)
}
