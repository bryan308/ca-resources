export type MDXFrontMatter = {
	slug: string
	title: string
	extendedDesc?: string
	description?: string
	image: string
	guideNumber: number
	guideGroup: number
	group: string
}

export interface Resource {
	name: string
	url: string
	description: string
	icon: string
}
