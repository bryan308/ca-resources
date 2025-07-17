import { DocsLayout } from "fumadocs-ui/layouts/docs"
import type { ReactNode } from "react"
import { baseOptions } from "@/app/layout.config"
import { guidesSource } from "@/lib/source"

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout
			tree={guidesSource.pageTree}
			sidebar={{ prefetch: false }}
			{...baseOptions}
		>
			{children}
		</DocsLayout>
	)
}
