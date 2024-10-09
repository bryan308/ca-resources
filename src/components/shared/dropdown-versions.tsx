import * as React from "react"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function DropdownMenuVersions() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button>
					v1.2.6
					<ChevronDown className="ml-2 size-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Versions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link href="https://ca-resources.vercel.app">v1.5.0</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href="https://v1-ca-resources.vercel.app">v1.2.6</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
