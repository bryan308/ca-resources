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
import { Tab, Tabs } from "fumadocs-ui/components/tabs"
import { File, Folder, Files } from "fumadocs-ui/components/files"
import { EmailGenerator } from "./gen-email"
import { Button } from "../ui/button"
import { Wrapper } from "./wrapper"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Checkbox } from "../ui/checkbox"
import { Slider } from "../ui/slider"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { ResourcesCards } from "./resources/cards"
import { Textarea } from "@/components/ui/textarea"

export const components = {
	Button,
	Textarea,
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
	RadioGroup,
	RadioGroupItem,
	Label,
	ResourcesCards,
	Slider,
	File,
	Folder,
	Files,
	Tab,
	Tabs,
	Wrapper,
	Steps,
	Step,
	LoginForm,
	Image: (props: any) => <ImageZoom {...(props as any)} />,
	...defaultMdxComponents,
}
