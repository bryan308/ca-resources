import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "CA Resources",
		short_name: "CA Resources",
		description:
			"Boost your productivity with valuable web development resources and educational guides.",
		start_url: "/",
		display: "standalone",
		background_color: "#0a0a0a",
		theme_color: "#EDEEED",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "256/256",
				type: "image/x-icon",
			},
		],
	}
}
