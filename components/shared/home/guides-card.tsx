"use client"

import React, { FC } from "react"
import {
	FunctionSquare,
	ImageIcon,
	Layers3,
	List,
	MousePointerClick,
	Plus,
	Table,
} from "lucide-react"
import { motion } from "motion/react"

const guidesHighlights = [
	{
		title: "Creating Images",
		icon: <ImageIcon />,
		description: "Images can improve the design and the appearance of a web page.",
	},
	{
		title: "Lists",
		icon: <List />,
		description: "Lists are used to group items in a list of items.",
	},
	{
		title: "Table",
		icon: <Table />,
		description: "HTML tables allow web developers to arrange data into rows and columns.",
	},
	{
		title: "Functions",
		icon: <FunctionSquare />,
		description: "Understand how to create and use functions in JavaScript.",
	},
	{
		title: "Event Handler",
		icon: <MousePointerClick />,
		description: "Learn how event handlers trigger JavaScript actions on user interactions.",
	},
	{
		title: "Document Object Model",
		icon: <Layers3 />,
		description: "Understand how to manipulate the Document Object Model (DOM) in JavaScript.",
	},
]

// Logic for displaying the plus icons accross the featured guides grid
const PlusIcons: FC<{ index: number }> = ({ index }) => {
	const positions = [
		"lg:-top-[0.77rem] lg:-right-[0.77rem]",
		"lg:-bottom-[0.77rem] lg:-right-[0.77rem]",
		"lg:-bottom-[0.77rem] lg:-left-[0.77rem]",
		"md:-top-[0.77rem] md:-right-[0.77rem]",
		"md:-bottom-[0.77rem] md:-left-[0.77rem]",
		"md:-bottom-[0.77rem] md:-right-[0.77rem]",
		"-bottom-[0.77rem] -left-[0.77rem]",
		"-bottom-[0.77rem] -right-[0.77rem]",
	]

	return (
		<>
			{positions.map((pos, i) => (
				<Plus
					key={i}
					className={`${
						(i < 3 && index === 0) || (i >= 3 && i < 6 && index <= 3) || (i >= 6 && index <= 5)
							? "block"
							: "hidden"
					} ${
						i < 3 ? "lg:block" : i < 6 ? "md:block lg:hidden" : "md:hidden"
					} text-muted-foreground/80 absolute size-6 stroke-1 z-10 ${pos}`}
				/>
			))}
		</>
	)
}

const FeaturedGuides: FC = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10">
			{guidesHighlights.map((g, index) => (
				<motion.div
					key={g.title}
					className="relative px-6 py-12 border-r border-b"
					aria-label={`Guide: ${g.title}`}
				>
					<PlusIcons index={index} />
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{
							delay: 0.05 * index,
							duration: 0.5,
							type: "spring",
							damping: 15,
							stiffness: 100,
						}}
					>
						<div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
							{g.icon}
							<h2 className="text-sm font-medium">{g.title}</h2>
						</div>
						<span className="font-medium">{g.description}</span>
					</motion.div>
				</motion.div>
			))}
		</div>
	)
}
FeaturedGuides.displayName = "FeaturedGuides"

export default FeaturedGuides
