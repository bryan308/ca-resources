import { EmailGenerator } from "./gen-email"
import { ImageZoom } from "fumadocs-ui/components/image-zoom"
import { Step, Steps } from "fumadocs-ui/components/steps"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"
import { File, Folder, Files } from "fumadocs-ui/components/files"
import defaultMdxComponents from "fumadocs-ui/mdx"
import { LoginForm } from "@/components/shared/login-form"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Slider } from "../ui/slider"
import CustomCard from "./resources/custom-card"
import ImageSection from "./image-section"
import { Wrapper } from "./wrapper"
import {
	BorderExample,
	DataTable,
	DataTableExample,
	OrderedList,
	SummaryTable,
	TableCellSpanning,
	TableExample,
	UnorderedList,
} from "./mdx-elements"

export const components = {
	BorderExample,
	Button,
	Checkbox,
	CustomCard,
	DataTable,
	DataTableExample,
	EmailGenerator,
	File,
	Files,
	Folder,
	Image: (props: React.ComponentProps<typeof ImageZoom>) => <ImageZoom {...props} />,
	ImageSection,
	Input,
	Label,
	LoginForm,
	OrderedList,
	RadioGroup,
	RadioGroupItem,
	Slider,
	Step,
	Steps,
	SummaryTable,
	Tab,
	Tabs,
	TableCellSpanning,
	TableExample,
	Textarea,
	UnorderedList,
	Wrapper,
	...defaultMdxComponents,
}
