import { ImageZoom } from "fumadocs-ui/components/image-zoom"
import { Step, Steps } from "fumadocs-ui/components/steps"
import { LoginForm } from "@/components/shared/login-form"
import defaultMdxComponents from "fumadocs-ui/mdx"
import { Button } from "../ui/button"
import { EmailGenerator } from "./gen-email"
import {
	BorderExample,
	DataTable,
	DataTableExample,
	GuideImage,
	MDXLink,
	SummaryTable,
	OrderedList,
	TableCellSpanning,
	TableExample,
	UnorderedList,
	MDXSeparator,
} from "./mdx-elements"
import { Wrapper } from "./wrapper"
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'

export const components = {
	Button,
	BorderExample,
	DataTable,
	DataTableExample,
	EmailGenerator,
	GuideImage,
	MDXLink,
	SummaryTable,
	OrderedList,
	TableCellSpanning,
	TableExample,
	UnorderedList,
	MDXSeparator,
	Tab,
	Tabs,
	Wrapper,
	Steps,
	Step,
	LoginForm,
	Image: (props: any) => <ImageZoom {...(props as any)} />,
	...defaultMdxComponents,
}
