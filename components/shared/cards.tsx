import { Resource } from "@/lib/types"
import Link from "next/link"
import React from "react"
import ImageRender from "./image-render"

interface ICardsProps {
	data: Resource[]
}

const shuffleArray = (array: Resource[]) => {
	return array.sort(() => Math.random() - 0.5)
}

const Cards: React.FC<ICardsProps> = ({ data }) => {
	const shuffledData = shuffleArray([...data])

	return (
		<>
			{shuffledData.map((d) => (
				<div
					key={d.title}
					className="bg-background-foreground flex items-center gap-4 py-4 px-6 rounded-md border border-border hover:ring-4 ring-ring/20"
					title={d.title}
				>
					<div className="grid place-items-center min-w-14 size-14">
						<ImageRender
							src={d.iconPath || "/logo.png"}
							alt={d.title}
							width={56}
							height={56}
							className={d.iconPath ? "" : "grayscale"}
						/>
					</div>
					<div>
						<Link
							href={`${d.url}?ref=ca-resources.vercel.app`}
							className="link"
							target="_blank"
							rel="noopener noreferrer"
						>
							{d.title}
						</Link>
						<span className="text-muted-foreground text-sm truncate-text">{d.description}</span>
					</div>
				</div>
			))}
		</>
	)
}

export default Cards
