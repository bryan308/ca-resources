import { Box } from "lucide-react"

import { ReactNode } from "react"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface ICustomCard {
  title: string
  icon?: ReactNode | string
  description: string
  href?: string
  className?: string
}

export default function CustomCard({
  title,
  href,
  icon,
  description,
  className,
}: ICustomCard) {
  return (
    <Link
      className={cn(
        "not-prose bg-card text-card-foreground hover:bg-accent/80 block rounded-lg border p-4 text-sm shadow-xs transition-colors hover:shadow",
        className,
      )}
      href={`${href}?ref=ca-resources.vercel.app`}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      prefetch={false}
      aria-label={title}
    >
      <div className="mb-2 flex items-center">
        <div
          className="not-prose bg-muted text-muted-foreground mr-2 w-fit rounded-sm border p-1.5 [&_svg]:size-4"
          role="img"
        >
          {typeof icon === "string" ? (
            <Image
              src={icon}
              alt={title}
              width={16}
              height={16}
              className="size-4 min-w-4"
            />
          ) : icon ? (
            icon
          ) : (
            <Box className="size-4 min-w-4" />
          )}
        </div>
        <h4 className="text-base font-medium">{title}</h4>
      </div>
      <p className="text-muted-foreground line-clamp-2">{description}</p>
    </Link>
  )
}
