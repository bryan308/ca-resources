import { cn } from "@/lib/utils"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Contributor {
	id: number
	login: string
	html_url: string
	avatar_url: string
}

const fetchContributors = async (): Promise<Contributor[]> => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/contributors`, {
		headers: {
			Accept: "application/vnd.github+json",
		},
	})

	if (!response.ok) {
		throw new Error("Failed to fetch contributors")
	}

	return response.json()
}

export default async function Contributors({ className }: { className: string }) {
	let contributors: Contributor[] = []

	try {
		contributors = await fetchContributors()
	} catch (error) {
		console.error("Error fetching contributors:", error)
	}

	return (
		<div className={cn(className, "flex flex-wrap gap-2")}>
			{contributors.length === 0 ? (
				<Alert
					variant="destructive"
					className="max-w-80 text-red-600 border-2"
				>
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>No contributors found.</AlertDescription>
				</Alert>
			) : (
				contributors.map(
					(c: Contributor) =>
						c.login !== "bryan308" &&
						c.login !== "dependabot[bot]" && (
							<Avatar key={c.id}>
								<Link
									href={c.html_url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<AvatarImage
										src={c.avatar_url}
										alt={c.login}
									/>
									<AvatarFallback className="text-xs">{c.login}</AvatarFallback>
								</Link>
							</Avatar>
						)
				)
			)}
		</div>
	)
}
