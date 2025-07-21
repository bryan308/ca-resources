import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export default function Section({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        "bg-card mx-auto max-w-6xl overflow-hidden border-x border-t border-dashed p-4 md:p-10",
        className,
      )}
    >
      {children}
    </section>
  )
}
Section.displayName = "Section"
