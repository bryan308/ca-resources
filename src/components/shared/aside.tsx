import { ScrollArea } from "@radix-ui/react-scroll-area"
import AsideLinks from "./aside-links"
import GuidestPaths from "./guides-paths"
import { overview, resources } from "@/data/links"

function Aside() {
	return (
		<aside
			className="hidden xl:flex flex-col w-[16.25rem] border border-t-0 border-border"
			tabIndex={-1}
		>
			<ScrollArea
				style={{ position: "sticky", height: "calc(100dvh - 4.25rem)" }}
				className="top-[4.25rem] pt-4 pl-4 pr-6 overflow-auto"
			>
				<Section title="Overview">
					<AsideLinks data={overview} />
				</Section>
				<Section title="Resources">
					<AsideLinks data={resources} />
				</Section>
				<Section title="HTML Guides">
					<GuidestPaths category="html" />
				</Section>
				<Section title="JavaScript Guides">
					<GuidestPaths category="js" />
				</Section>
			</ScrollArea>
		</aside>
	)
}

export default Aside

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<div className="mb-6">
		<h4 className="text-foreground text-base font-medium pl-2">{title}</h4>
		{children}
	</div>
)
