
import { cn } from "@/lib/utils"
import { Box } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, { FC, ReactNode } from "react"

interface ICustomCard {
	title: string
	icon?: ReactNode | string
	// children?: ReactNode
	description: string
	href?: string
	className?: string
}

const CustomCard: FC<ICustomCard> = ({ title, href, icon, description, className }) => {
	return (
		<Link
			className={cn(
				"not-prose block rounded-lg border bg-card p-4 text-sm text-card-foreground shadow-xs hover:shadow transition-colors hover:bg-accent/80",
				className
			)}
			href={`${href}?ref=ca-resources.vercel.app`}
			title={title}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={title}
		>
			<div className="flex items-center mb-2">
				<div
					className="not-prose mr-2 w-fit rounded-md border bg-muted p-1.5 text-muted-foreground [&_svg]:size-4"
					role="img"
				>
					{typeof icon === "string" ? (
						<Image
							src={icon}
							alt={title}
							width={16}
							height={16}
							className="min-w-4 size-4"
						/>
					) : icon ? (
						icon
					) : (
						<Box className="min-w-4 size-4" />
					)}
				</div>
				<h4 className="text-base font-medium">{title}</h4>
			</div>
			<p className="text-muted-foreground line-clamp-2">{description}</p>
		</Link>
	)
}

export default CustomCard
