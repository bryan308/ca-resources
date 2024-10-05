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
import defaultMdxComponents from "fumadocs-ui/mdx"
import { ImageZoom } from "fumadocs-ui/components/image-zoom"
import { Step, Steps } from "fumadocs-ui/components/steps"
import { LoginForm } from "@/components/shared/login-form"
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { EmailGenerator } from "./gen-email"
import { Button } from "../ui/button"
import { Wrapper } from "./wrapper"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Checkbox } from "../ui/checkbox"

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
	Input,
	Checkbox,
	Label,
	Tab,
	Tabs,
	Wrapper,
	Steps,
	Step,
	LoginForm,
	Image: (props: any) => <ImageZoom {...(props as any)} />,
	...defaultMdxComponents,
}
