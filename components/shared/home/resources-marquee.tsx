import { Marquee } from "@/components/ui/marquee"
import Link from "next/link"
import Image from "next/image"

const reviews = [
	{
		title: "Coolors",
		description: "Generate or browse beautiful color combinations for your designs.",
		icon: "/resources/colors/coolors.png",
		href: "https://coolors.co/",
	},
	{
		title: "Font Awesome",
		description:
			"The internet‘s icon library + toolkit. Used by millions of designers, devs, & content creators. Open-source. Always free. Always awesome.",
		icon: "/resources/icons/fontawesome.svg",
		href: "https://fontawesome.com/",
	},
	{
		title: "Dribbble",
		description:
			"Find Top Designers & Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs. Your best resource to discover and connect with designers worldwide.",
		icon: "/resources/inspirations/dribbble.jpg",
		href: "https://dribbble.com/",
	},
	{
		title: "Ls",
		description: "Free and premium mockups, UI/UX tools, scene creators for busy designers.",
		icon: "/resources/mockups/lsgraphics.svg",
		href: "https://www.ls.graphics/free-mockups/",
	},
	{
		title: "Freepik",
		description:
			"Millions of free graphic resources. ✓ Photos ✓ AI images ✓ Vectors ✓ Icons ✓ Templates ✓ Videos. Find out about our real-time AI art generator.",
		icon: "/resources/mockups/freepik.svg",
		href: "https://www.freepik.com/",
	},
	{
		title: "Google Fonts",
		description: "A vast collection of open-source fonts provided by Google.",
		icon: "/resources/typography/google-fonts.svg",
		href: "https://fonts.google.com",
	},
	{
		title: "The Odin Project",
		description: "The Odin Project empowers aspiring web developers to learn together for free",
		icon: "/resources/learnwebdev/top.png",
		href: "https://theodinproject.com/",
	},
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
	icon,
	title,
	description,
	href,
}: {
	icon: string
	title: string
	description: string
	href: string
}) => {
	return (
		<Link
			className="w-64 not-prose block rounded-lg border bg-fd-card p-4 text-sm text-fd-card-foreground shadow-md transition-colors hover:bg-fd-accent/80"
			href={`${href}?ref=ca-resources.vercel.app`}
			title={title}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="flex items-center gap-2 mb-2">
				<Image
					src={icon}
					alt={title}
					width={24}
					height={24}
					className="min-w-6 size-6"
				/>
				<h3 className="font-medium text-lg">{title}</h3>
			</div>
			<p className="text-fd-muted-foreground truncate-text">{description}</p>
		</Link>
	)
}

export function MarqueeDemo() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background/80">
			<Marquee
				pauseOnHover
				className="[--duration:20s]"
			>
				{firstRow.map((review) => (
					<ReviewCard
						key={review.title}
						{...review}
					/>
				))}
			</Marquee>
			<Marquee
				reverse
				pauseOnHover
				className="[--duration:20s]"
			>
				{secondRow.map((review) => (
					<ReviewCard
						key={review.title}
						{...review}
					/>
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
		</div>
	)
}
