export type MDXFrontMatter = {
	slug: string
	title: string
	extendedDesc?: string
	description?: string
	thumbnail: string
	guideNumber: number
	guideGroup: number
	group: string
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

export interface Resources {
	title: string
	url: string
	description: string
	iconPath?: string
}

interface IContentSections {
	title?: string
	subtitle?: string
	resources: Resources[]
}

export interface ResourceCategory {
	thumbnail?: string
	title: string
	subtitle: string
	contentSections: IContentSections[]
}

