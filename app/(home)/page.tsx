import { cn } from "@/lib/utils"
import React, { ReactNode } from "react"

import { Footer } from "@/components/shared/footer"
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MarqueeDemo } from "@/components/shared/home/resources-marquee"
import { Plus } from "lucide-react"

export default function HomePage() {
	return (
		<>
			<div className="mx-4 md:mdx-0">
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
									size={"lg"}
									asChild
								>
									<Link href="/resources">Getting started</Link>
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
					<h2 className="text-center text-2xl font-semibold sm:text-3xl">
						Explore Featured Resources
					</h2>
				</Section>
				<Section className="md:py-20">
					<Plus className="absolute -top-3 -right-3 size-6 text-muted-foreground stroke-1" />
					<MarqueeDemo />
				</Section>
				{/* <Section>
					// Featured Guides Here
				</Section> */}
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
