import { generateOGImage } from "fumadocs-ui/og"
import { guidesMetadataImage } from "@/lib/metadata"

export const GET = guidesMetadataImage.createAPI((page) => {
	return generateOGImage({
		title: page.data.title,
		description: page.data.description,
		site: "CA Resources | Guides",
	})
})

export function generateStaticParams() {
	return guidesMetadataImage.generateParams()
}
