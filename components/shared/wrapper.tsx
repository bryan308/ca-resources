import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
	variant?: "default" | "gradient"
}

export function Wrapper({ variant = "default", ...props }: WrapperProps): React.ReactElement {
	return (
		<div
			{...props}
			className={cn(
				"rounded-xl p-2 lg:p-4 prose-no-margin",
				variant === "gradient"
					? "bg-gradient-to-br from-fuchsia-500 to-cyan-500"
					: "bg-card border",
				props.className
			)}
		>
			{props.children}
		</div>
	)
}
