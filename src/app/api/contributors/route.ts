// * src/app/api/contributors/route.ts
import { Octokit } from "@octokit/core"

export async function GET() {
	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN,
	})

	try {
		const { data } = await octokit.request("GET /repos/{owner}/{repo}/contributors", {
			owner: "bryan308",
			repo: "ca-resources",
			headers: {
				"X-GitHub-Api-Version": "2022-11-28",
			},
		})

		return new Response(JSON.stringify(data), {
			headers: { "Content-Type": "application/json" },
		})
	} catch (error) {
		console.error("Error fetching contributors:", error)
		return new Response("Error fetching contributors", { status: 500 })
	}
}
