import { DocsLayout } from "fumadocs-ui/layout"
import type { ReactNode } from "react"
import { baseOptions } from "../layout.config"
import { guides } from "@/app/source"

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			tree={guides.pageTree}
			// tree={{
			// 	files: {
			// 		path: ""
			// 	}
			// }}
			{...baseOptions}
		>
			{children}
		</DocsLayout>
	)
}
