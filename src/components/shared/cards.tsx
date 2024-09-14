import { Resources } from "@/lib/types"
import Link from "next/link"
import React from "react"
import ImageRender from "./image-render"

interface CardsProps {
	data: Resources[]
}

const Cards: React.FC<CardsProps> = ({ data }) => {
	return (
		<>
			{data.map((d) => (
				<div
					key={d.title}
					className="bg-background-foreground flex items-center gap-4 py-4 px-6 rounded-md border border-border hover:ring-4 ring-ring/20"
					title={d.title}
				>
					<div className="grid place-items-center min-w-14 size-14">
						<Link
							href={`${d.url}?rel=ca-resources.vercel.app`}
							className="link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ImageRender
								src={d.iconPath || "/logo.png"}
								alt={d.title}
								width={56}
								height={56}
								className={d.iconPath ? "" : "grayscale"}
							/>
						</Link>
					</div>
					<div>
						<Link
							href={`${d.url}?rel=ca-resources.vercel.app`}
							className="link"
							target="_blank"
							rel="noopener noreferrer"
						>
							{d.title}
						</Link>
						<span className="text-muted-foreground text-sm truncate-description">
							{d.description}
						</span>
					</div>
				</div>
			))}
		</>
	)
}

export default Cards
