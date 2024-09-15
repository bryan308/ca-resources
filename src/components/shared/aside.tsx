import { ScrollArea } from "@radix-ui/react-scroll-area"

import AsideLinks from "./aside-links"
import GuidestPaths from "./guides-paths"
import { overview, resources } from "@/data/links"


function Aside() {
	return (
		<aside className="hidden xl:flex flex-col w-[16.25rem] border border-t-0 border-border">
			<ScrollArea
				style={{ position: "sticky", height: "calc(100dvh - 4.25rem)" }}
				className="top-[4.25rem] pl-4 pr-6 overflow-auto"
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
						<GuidestPaths />
					</div>
				</div>
			</ScrollArea>
		</aside>
	)
}

export default Aside
