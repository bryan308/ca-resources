import type { MetadataRoute } from "next"

const basePath = "https://ca-resources.vercel.app"
const date = new Date().toISOString()

const routes = [
	{ path: "/", priority: 0.1, images: ["/banner.png"] },
	{ path: "/resources/colors", priority: 0.4, images: ["/colors.jpg"] },
	{ path: "/resources/icons", priority: 0.4, images: ["/icons.jpg"] },
	{ path: "/resources/inspirations", priority: 0.4, images: ["/inspirations.jpg"] },
	{ path: "/resources/mockup-tools", priority: 0.4, images: ["/mockup-tools.jpg"] },
	{ path: "/resources/stock-photos", priority: 0.4, images: ["/stock-photos.jpg"] },
	{ path: "/resources/typography", priority: 0.4, images: ["/typography.jpg"] },
	{ path: "/resources/webdev", priority: 0.4, images: ["/webdev.jpg"] },
	{ path: "/guides/audio-and-video", priority: 0.6, images: ["/audio-and-video.jpg"] },
	{ path: "/guides/form", priority: 0.6, images: ["/form.jpg"] },
	{ path: "/guides/hyperlinks", priority: 0.6, images: ["/hyperlinks.jpg"] },
	{ path: "/guides/images", priority: 0.6, images: ["/images.jpg"] },
	{ path: "/guides/lists", priority: 0.6, images: ["/lists.jpg"] },
	{ path: "/guides/table", priority: 0.6, images: ["/table.jpg"] },
]

export default function sitemap(): MetadataRoute.Sitemap {
	return routes.map(({ path, priority, images }) => ({
		url: `${basePath}${path}`,
		lastModified: date,
		changeFrequency: "weekly",
		priority,
		images: images.length ? images : undefined,
	}))
}
