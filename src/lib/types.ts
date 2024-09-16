export interface Resource {
	title: string
	url: string
	description: string
	iconPath: string
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
