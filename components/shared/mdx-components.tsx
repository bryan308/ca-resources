import {
	BorderExample,
	DataTable,
	DataTableExample,
	SummaryTable,
	OrderedList,
	TableCellSpanning,
	TableExample,
	UnorderedList,
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
import { Textarea } from "@/components/ui/textarea"
import ImageSection from "./image-section"
import CustomCard from "./resources/custom-card"

export const components = {
	CustomCard,
	BorderExample,
	DataTable,
	DataTableExample,
	EmailGenerator,
	OrderedList,
	UnorderedList,
	TableCellSpanning,
	TableExample,
	LoginForm,
	SummaryTable,
	Button,
	Checkbox,
	File,
	Folder,
	Files,
	ImageSection,
	Input,
	Label,
	RadioGroup,
	RadioGroupItem,
	Slider,
	Steps,
	Step,
	Textarea,
	Tab,
	Tabs,
	Wrapper,
	Image: (props: React.ComponentProps<typeof ImageZoom>) => <ImageZoom {...props} />,
	...defaultMdxComponents,
}
