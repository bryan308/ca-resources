import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import { FC, ReactNode } from "react"

const Section: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
	<section
		className={cn(
			"relative max-w-6xl mx-auto border border-b-0 bg-fd-card p-4 md:p-10",
			"before:absolute before:right-full before:-top-px before:h-px before:w-14 before:bg-gradient-to-r before:from-border/25 before:to-border before:z-5",
			"after:absolute after:left-full after:-top-px after:h-px after:w-14 after:bg-gradient-to-l after:from-border/25 after:to-border after:z-5",
			className
		)}
	>
		<Plus className="absolute -top-[0.77rem] -right-[0.77rem] size-6 text-muted-foreground/70 stroke-1 z-10" />
		<Plus className="absolute -top-[0.77rem] -left-[0.77rem] size-6 text-muted-foreground/70 stroke-1 z-10" />
		{children}
	</section>
)
Section.displayName = "Section"

export default Section
