import React from "react"
import { Book, Box } from "lucide-react"
import { HomeLayoutProps } from "fumadocs-ui/layouts/home"

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
		transparentMode: 'top',
		title: (
			<>
				<Box />
				CA Resources
			</>
		),
	},
	links: [
		// {
		// 	type: "menu",
		// 	text: "v1.6.0",
		// 	items: [
		// 		{
		// 			icon: <Check />,
		// 			text: "v1.6.0",
		// 			url: "https://ca-resources.vercel.app/",
		// 			external: false,
		// 		},
		// 		{
		// 			icon: <div className="size-4" />,
		// 			text: "v1.2.6",
		// 			url: "https://v1-ca-resources.vercel.app/",
		// 			external: false,
		// 		},
		// 	],
		// },
		{
			icon: <Box />,
			text: "Resources",
			url: "/resources/colors",
			active: "none",
		},
		{
			icon: <Book />,
			text: "Guides",
			url: "/guides",
			active: "none",
		},
	],
}
