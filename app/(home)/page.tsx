import { cn } from "@/lib/utils"
import React from "react"

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import { Footer } from "@/components/shared/footer"
import WordReveal from "@/components/ui/word-reveal"
import {
	ActionButton,
	FeaturedGuides,
	GitHubButton,
	HeroParagraph,
	ResourcesMarquee,
	Section,
	SectionTitle,
} from "@/components/shared/home"

export default function HomePage() {
	return (
		<>
			<div className="m-4 md:m-0">
				<div className="mt-4 md:mt-10" />
				<Section className="relative flex h-[calc(100vh-7rem)] items-center justify-center p-0">
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
					<SectionTitle>Explore Top Resources</SectionTitle>
				</Section>
				<Section className="md:py-20">
					<ResourcesMarquee />
				</Section>
				<Section>
					<SectionTitle>Learn the Basics</SectionTitle>
				</Section>
				<Section className="p-0 md:p-0 border-r-0">
					<FeaturedGuides />
				</Section>
			</div>
			<Footer />
		</>
	)
}
