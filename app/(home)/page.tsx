import { cn } from "@/lib/utils"
import React, { ReactNode } from "react"

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import Image from "next/image"

import { Footer } from "@/components/shared/footer"
import { Plus } from "lucide-react"
import { MarqueeDemo } from "@/components/shared/home/resources-marquee"
import { FeaturedGuides } from "@/components/shared/home/guides-card"
import WordReveal from "@/components/ui/word-reveal"
import { ActionButton, HeroParagraph, SectionTitle } from "@/components/shared/home/hero"

export default function HomePage() {
	return (
		<>
			<div className="m-4">
				<div className="mt-4 md:mt-10" />
				<Section className="relative flex h-[calc(100vh-10rem)] items-center justify-center">
					<Plus className="absolute -top-3 -right-3 size-6 text-muted-foreground stroke-1" />
					<div className="container py-10 lg:py-16">
						<div className="max-w-5xl text-center mx-auto">
							<WordReveal
								text="Enhance Your Productivity"
								className="mb-6 text-4xl text-fd-foreground font-semibold md:text-7xl"
							/>
							<HeroParagraph />
							<ActionButton />
						</div>
					</div>
					<div className="absolute w-full h-full overflow-hidden">
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
					<Plus className="absolute -top-3 -left-3 size-6 text-muted-foreground stroke-1" />
					<SectionTitle>Explore Top Resources</SectionTitle>
				</Section>
				<Section className="md:py-20">
					<Plus className="absolute -top-3 -right-3 size-6 text-muted-foreground stroke-1" />
					<MarqueeDemo />
				</Section>
				<Section>
					<Plus className="absolute -top-3 -left-3 size-6 text-muted-foreground stroke-1" />
					<SectionTitle>Learn the Basics</SectionTitle>
				</Section>
				<Section className="p-0 md:p-0 border-r-0">
					<Plus className="absolute -top-3 -right-3 size-6 text-muted-foreground stroke-1" />
					<div className="absolute w-full h-full overflow-hidden">
						<Image
							src="/gradient.png"
							alt="grad"
							width={1256}
							height={671}
							className="opacity-50 absolute -bottom-[42rem] left-1/2 saturate-0 transform -translate-x-1/2 rotate-90 pointer-events-none"
						/>
					</div>
					<FeaturedGuides />
				</Section>
			</div>
			<Footer />
		</>
	)
}

const Section = ({ children, className }: { children: ReactNode; className?: string }) => (
	<div
		className={cn(
			"relative max-w-6xl mx-auto border border-b-0 bg-background/80 p-6 md:p-10",
			className
		)}
	>
		{children}
	</div>
)
