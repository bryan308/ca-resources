"use client"

import { ThemeProvider } from "next-themes"
import { RootProvider } from "fumadocs-ui/provider"

export default function Providers({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
		>
			<RootProvider theme={{ enabled: false }}>{children}</RootProvider>
		</ThemeProvider>
	)
}
