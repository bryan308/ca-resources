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

export type Path = {
	text: string
	path: string
}

export type GuidePath = {
	title: string
	slug: string
}

export type SheetLinksProps = {
	header: string
	title?: string
	guidePaths?: GuidePath[]
	paths?: Path[]
	isGuide?: boolean
}
