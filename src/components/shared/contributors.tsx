import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Contributor {
	id: number
	login: string
	html_url: string
	avatar_url: string
}

async function fetchContributors(): Promise<Contributor[]> {
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

export default async function Contributors() {
	const contributors = await fetchContributors()

	return (
		<div className="flex flex-wrap gap-2">
			{contributors.map((contributor: Contributor) => (
				<div key={contributor.id}>
					{contributor.login !== "bryan308" && (
						<Avatar>
							<Link
								href={contributor.html_url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AvatarImage
									src={contributor.avatar_url}
									alt={contributor.login}
								/>
								<AvatarFallback className="text-xs">{contributor.login}</AvatarFallback>
							</Link>
						</Avatar>
					)}
				</div>
			))}
		</div>
	)
}
