import { cn } from "@/lib/utils"
import React from "react"

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import { Footer } from "@/components/shared/footer"
import WordReveal from "@/components/ui/word-reveal"
import {
	ActionButton,
	FeaturedGuides,
	HeroImage,
	HeroParagraph,
	ResourcesMarquee,
	Section,
	SectionTitle,
} from "@/components/shared/home"
import { GitHubStarsButton } from "@/components/animate-ui/github-stars-button"

export default function HomePage() {
	return (
		<>
			<div className="p-4 overflow-x-hidden">
				<div className="mt-4 md:mt-10" />
				{/* <Section className="relative flex h-[calc(100vh-7rem)] justify-center p-0"> */}
				<Section className="relative flex h-[calc(100vh-6rem)] md:h-[120vh] justify-center p-0">
					<div className="max-w-5xl text-center mx-auto pt-24 z-20">
						<GitHubStarsButton
							username="bryan308"
							repo="ca-resources"
							className="w-fit mb-6 mx-auto"
						/>
						<WordReveal
							text="Enhance Your Productivity"
							className="mb-6 text-5xl text-foreground font-semibold md:text-7xl"
						/>
						<HeroParagraph />
						<ActionButton />
					</div>
					<div className="absolute w-full h-full overflow-hidden z-10">
						<AnimatedGridPattern
							numSquares={50}
							maxOpacity={0.1}
							duration={2}
							repeatdelay={1}
							className={cn(
								"[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
								"-top-20 inset-x-0 -inset-y-[30%] h-[170%] skew-y-12"
							)}
						/>
					</div>
					<div className="absolute w-full lg:h-2/4 overflow-hidden z-10 -bottom-4">
						<HeroImage />
					</div>
				</Section>
				<Section className="p-10 z-20">
					<SectionTitle>Explore Top Resources</SectionTitle>
				</Section>
				<Section className="md:py-20 z-20">
					<ResourcesMarquee />
				</Section>
				<Section className="z-20">
					<SectionTitle>Learn the Basics</SectionTitle>
				</Section>
				<Section className="p-0 md:p-0 border-r-0 z-20">
					<FeaturedGuides />
				</Section>
			</div>
			<Footer />
		</>
	)
}
