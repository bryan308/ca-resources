import { useMemo } from "react"
import { getAllMdx } from "@/lib/mdx"
import AsideLinks from "./aside-links"
import ComponentPaths from "./component-paths"
import { overview, resources } from "@/data/links"
import { ScrollArea } from "@radix-ui/react-scroll-area"

function Aside() {
	const mdxFiles = useMemo(() => getAllMdx().map((post) => post["frontMatter"]), [])

	return (
		<aside className="hidden xl:flex flex-col w-[16.25rem] border border-t-0 border-border">
			<ScrollArea
				style={{ position: "sticky", height: "calc(100dvh - 4.25rem)" }}
				className="top-[4.25rem] pt-8 pl-4 pr-6 overflow-auto"
			>
				<div className="mb-4">
					<p className="text-foreground text-sm font-medium pl-2">Overview</p>
					<div className="links">
						<AsideLinks data={overview} />
					</div>
				</div>
				<div className="mb-4">
					<p className="text-foreground text-sm font-medium pl-2">Resources</p>
					<div className="links">
						<AsideLinks data={resources} />
					</div>
				</div>
				<div className="mb-4">
					<p className="text-foreground text-sm font-medium pl-2">Guides</p>
					<div className="links">
						<ComponentPaths paths={mdxFiles} />
					</div>
				</div>
			</ScrollArea>
		</aside>
	)
}

export default Aside
