import { DocsLayout } from "fumadocs-ui/layout"
import type { ReactNode } from "react"
import { baseOptions } from "../layout.config"
import { resources } from "@/app/source"

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			tree={resources.pageTree}
			{...baseOptions}
		>
			{children}
		</DocsLayout>
	)
}
