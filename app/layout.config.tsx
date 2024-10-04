import React from "react"
import { type HomeLayoutProps } from "fumadocs-ui/home-layout"
import { Book, Box } from "lucide-react"

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
	githubUrl: "https://github.com/bryan308/ca-resources",
	nav: {
		title: (
			<>
				<Box />
				CA Resources
			</>
		),
	},
	links: [
		{
			icon: <Box />,
			text: "Resources",
			url: "/resources",
			active: "nested-url",
		},
		{
			icon: <Book />,
			text: "Guides",
			url: "/guides",
			active: "nested-url",
		},
	],
}
