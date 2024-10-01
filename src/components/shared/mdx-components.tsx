import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock"
import { Callout } from "fumadocs-ui/components/callout"
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
import { LoginForm } from "@/components/shared/login-form"

export const components = {
	Button,
	Callout,
	BorderExample,
	DataTable,
	DataTableExample,
	EmailGenerator,
	GuideImage,
	LoginForm,
	MDXLink,
	MDXSeparator,
	SummaryTable,
	OrderedList,
	TableCellSpanning,
	TableExample,
	UnorderedList,
	pre: (props: React.HTMLProps<HTMLPreElement>) => (
		<CodeBlock
			keepBackground
			{...props}
		>
			<Pre>{props.children}</Pre>
		</CodeBlock>
	),
}
