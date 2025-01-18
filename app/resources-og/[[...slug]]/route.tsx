import { generateOGImage } from "fumadocs-ui/og"
import { resourcesMetadataImage } from "@/lib/metadata"

export const GET = resourcesMetadataImage.createAPI((page) => {
	return generateOGImage({
		title: page.data.title,
		description: page.data.description,
		site: "CA Resources | Resources",
	})
})

export function generateStaticParams() {
	return resourcesMetadataImage.generateParams()
}
