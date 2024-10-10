import { cn } from "@/lib/utils"
import React, { ReactNode } from "react"

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import Link from "next/link"
import Image from "next/image"

import { Footer } from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { MarqueeDemo } from "@/components/shared/home/resources-marquee"
import { FeaturedGuides } from "@/components/shared/home/guides-card"

export default function HomePage() {
	return (
		<>
			<div className="m-4 mb-0 md:m-0">
				<div className="mt-4 md:mt-10" />
				<Section className="relative flex h-[500px] items-center justify-center">
					<Plus className="absolute -top-3 -right-3 size-6 text-muted-foreground stroke-1" />
					<div className="container py-10 lg:py-16">
						<div className="max-w-2xl text-center mx-auto">
							<h1 className="mb-6 text-4xl font-semibold md:text-5xl">Enhance Your Productivity</h1>
							<div className="mt-5 max-w-3xl">
								<p className="mx-auto mb-6 h-fit p-2 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
									CA Resources is your essential platform for enhancing productivity in web
									development and education, offering{" "}
									<span className="font-semibold text-foreground">tools</span> and{" "}
									<span className="font-semibold text-foreground">guides</span> designed for
									flexibility and speed.
								</p>
							</div>
							<div className="relative z-10 mt-8 gap-3 flex justify-center">
								<Button
									size="lg"
									asChild
								>
									<Link href="/resources">Explore</Link>
								</Button>
								<Button
									variant="secondary"
									size="lg"
									asChild
								>
									<Link href="/guides">Learn</Link>
								</Button>
							</div>
						</div>
					</div>
					<div className="absolute w-full h-full overflow-hidden">
						<AnimatedGridPattern
							numSquares={50}
							maxOpacity={0.1}
							duration={2}
							repeatDelay={1}
							className={cn(
								"[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
								"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
							)}
						/>
					</div>
				</Section>
				<Section className="p-10">
					<Plus className="absolute -top-3 -left-3 size-6 text-muted-foreground stroke-1" />
					<h2 className="text-center text-2xl font-semibold sm:text-3xl">Explore Top Resources</h2>
				</Section>
				<Section className="md:py-20">
					<Plus className="absolute -top-3 -right-3 size-6 text-muted-foreground stroke-1" />
					<MarqueeDemo />
				</Section>
				<Section>
					<Plus className="absolute -top-3 -left-3 size-6 text-muted-foreground stroke-1" />
					<h2 className="text-center text-2xl font-semibold sm:text-3xl">Learn the Basics</h2>
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

const Section = ({ children, className }: { children: ReactNode; className?: string }) => {
	return (
		<div
			className={cn(
				"relative max-w-6xl mx-auto border border-b-0 bg-background/80 p-6 md:p-10",
				className
			)}
		>
			{children}
		</div>
	)
}
