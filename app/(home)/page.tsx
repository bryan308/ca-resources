import { cn } from "@/lib/utils"
import React, { ReactNode } from "react"

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import { Footer } from "@/components/shared/footer"
import { Plus } from "lucide-react"
import WordReveal from "@/components/ui/word-reveal"
import {
	ActionButton,
	FeaturedGuides,
	GitHubButton,
	HeroParagraph,
	ResourcesMarquee,
	SectionTitle,
} from "@/components/shared/home"

export default function HomePage() {
	return (
		<>
			<div className="m-4">
				<div className="mt-4 md:mt-10" />
				<Section className="relative flex h-[calc(100vh-10rem)] items-center justify-center p-0">
					<PlusIcon position="-top-3 -right-3" />
					<div className="container py-10 lg:py-16 z-20">
						<div className="max-w-5xl text-center mx-auto">
							<GitHubButton />
							<WordReveal
								text="Enhance Your Productivity"
								className="mb-6 text-5xl text-fd-foreground font-semibold md:text-7xl"
							/>
							<HeroParagraph />
							<ActionButton />
						</div>
					</div>
					<div className="absolute w-full h-full overflow-hidden z-10">
						<AnimatedGridPattern
							numSquares={50}
							maxOpacity={0.1}
							duration={2}
							repeatdelay={1}
							className={cn(
								"[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
								"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
							)}
						/>
					</div>
				</Section>
				<Section className="p-10">
					<PlusIcon position="-top-3 -left-3" />
					<SectionTitle>Explore Top Resources</SectionTitle>
				</Section>
				<Section className="md:py-20">
					<PlusIcon position="-top-3 -right-3" />
					<ResourcesMarquee />
				</Section>
				<Section>
					<PlusIcon position="-top-3 -left-3" />
					<SectionTitle>Learn the Basics</SectionTitle>
				</Section>
				<Section className="p-0 md:p-0 border-r-0">
					<PlusIcon position="-top-3 -right-3" />
					<PlusIcon position="-bottom-3 -left-3" />
					<FeaturedGuides />
				</Section>
			</div>
			<Footer />
		</>
	)
}

const PlusIcon = ({ position }: { position: string }) => (
	<Plus className={`absolute ${position} size-6 text-muted-foreground stroke-1`} />
)

const Section = ({ children, className }: { children: ReactNode; className?: string }) => (
	<div
		className={cn(
			"relative max-w-6xl mx-auto border border-b-0 bg-background/80 p-4 md:p-10",
			className
		)}
	>
		{children}
	</div>
)
