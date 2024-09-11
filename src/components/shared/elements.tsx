import React from "react"
import ImageRender from "./image-render"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Separator } from "../ui/separator"

interface ITableProps {
	example_id?: number
}

const DataTableExample = () => {
	return (
		<Table className="mx-auto md:mx-0 w-full md:w-2/4 mt-6">
			<TableHeader>
				<TableRow className="border-border">
					<TableHead className="text-xl font-semibold tracking-tight">Student Name</TableHead>
					<TableHead className="text-xl font-semibold tracking-tight">Student Number</TableHead>
					<TableHead className="text-right text-xl font-semibold tracking-tight">Age</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow className="border-border">
					<TableCell>Juan Dela Cruz</TableCell>
					<TableCell>2021-21067</TableCell>
					<TableCell className="text-right">18</TableCell>
				</TableRow>
				<TableRow className="border-border">
					<TableCell>Pedro Cruise</TableCell>
					<TableCell>2021-21114</TableCell>
					<TableCell className="text-right">19</TableCell>
				</TableRow>
				<TableRow className="border-border">
					<TableCell>Simon Ibarra</TableCell>
					<TableCell>2021-21584</TableCell>
					<TableCell className="text-right">18</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
DataTableExample.DisplayName = "DataTableExample"

const MDXLink = ({
	children,
	href,
	target,
}: {
	children: React.ReactNode
	href: string
	target: string
}) => {
	return (
		<Link
			className="link"
			href={href}
			target={target}
		>
			{children}
		</Link>
	)
}
MDXLink.DisplayName = "MDXLink"

const SummaryTable = ({ children }: { children: React.ReactNode }) => {
	return <div className="table w-full mt-4">{children}</div>
}
SummaryTable.DisplayName = "SummaryTable"

const DataTable = ({ children }: { children: React.ReactNode }) => {
	return <div className="data-table w-full mt-4">{children}</div>
}
DataTable.DisplayName = "DataTable"

interface IListProps {
	listStyle?: "type" | "position"
	type?: "lower-alpha" | "decimal" | "disc" | "circle" | "square"
	startt?: number // Ensure this is a number for the `start` attribute
	position?: "inside" | "outside" // Constrain to valid listStylePosition values
	image?: string
}

const OrderedList: React.FC<IListProps> = ({ listStyle, type, startt, position, image }) => {
	const h1 = { fontFamily: "Times New Roman, serif", margin: "1.34rem 0", fontSize: "2.25rem" }
	const h3 = { fontFamily: "Times New Roman, serif", margin: "1.34rem 0", fontSize: "1.5rem" }
	const ol = {
		listStyleType: type,
		listStylePosition: position,
		margin: "1rem 0",
		paddingLeft: "2.5rem",
	}
	const li = {
		fontFamily: "Times New Roman, serif",
		color: "hsl(var(--foreground))",
		marginBottom: 0,
	}

	return (
		<div className="border border-border p-4 mt-4 rounded-lg bg-background-foreground">
			{listStyle === "type" ? (
				<>
					<h1 style={h1}>Phases of WDLC</h1>
					<ol
						style={ol}
						start={startt}
					>
						<li style={li}>Planning</li>
						<li style={li}>Analysis</li>
						<li style={li}>Design</li>
						<li style={li}>Development</li>
						<li style={li}>Testing</li>
						<li style={li}>Implementation</li>
						<li style={li}>Maintenance</li>
					</ol>
				</>
			) : listStyle === "position" ? (
				<>
					<h3 style={h3}>To create a web page:</h3>
					<ol style={ol}>
						<li style={li}>
							Open a Text Editor (Notepad) or Source Code Editor (Sublime Text) program.
						</li>
						<li style={li}>Save the file as .html (File - save as - select HTML)</li>
						<li style={li}>Write your HTML code.</li>
						<li style={li}>
							Double-click on the saved file, and it will be opened in your default browser.
						</li>
					</ol>
				</>
			) : (
				<>
					<h1 style={h1}>Most Popular Web Browsers</h1>
					<ul style={{ listStyleImage: `URL(${image})`, margin: "1rem 0", paddingLeft: "2.5rem" }}>
						<li style={li}>Mozilla Firefox</li>
						<li style={li}>Google Chrome</li>
						<li style={li}>Opera Browser</li>
						<li style={li}>Microsoft Edge</li>
						<li style={li}>Safari Browser</li>
					</ul>
				</>
			)}
		</div>
	)
}

OrderedList.displayName = "OrderedList"

const UnorderedList: React.FC<IListProps> = ({ type }) => {
	const h1 = { fontFamily: "Times New Roman, serif", margin: "1.34rem 0", fontSize: "2.25rem" }
	const ul = { listStyleType: type, margin: "1rem 0", paddingLeft: "2.5rem" }
	const li = {
		fontFamily: "Times New Roman, serif",
		color: "hsl(var(--foreground))",
		marginBottom: 0,
	}

	return (
		<>
			<div className="border border-border p-4 mt-4 rounded-lg bg-background-foreground">
				<h1 style={h1}>Most Popular Web Browsers</h1>
				<ul style={ul}>
					<li style={li}>Mozilla Firefox</li>
					<li style={li}>Google Chrome</li>
					<li style={li}>Opera Browser</li>
					<li style={li}>Microsoft Edge</li>
					<li style={li}>Safari Browser</li>
				</ul>
			</div>
		</>
	)
}
UnorderedList.displayName = "UnorderedList"

const TableExample: React.FC<ITableProps> = ({ example_id }) => {
	const getStyle = () => {
		const styles = ["table1", "table2", "table3", "table4", "table5"]
		return styles[example_id! - 1] || ""
	}

	return (
		<table className={`mt-4 ${getStyle()}`}>
			<thead>
				<tr>
					<th>Student Name</th>
					<th>Student Number</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Juan Dela Cruz</td>
					<td>2021-21067</td>
					<td>18</td>
				</tr>
				<tr>
					<td>Pedro Cruise</td>
					<td>2021-21114</td>
					<td>19</td>
				</tr>
				<tr>
					<td>Simon Ibarra</td>
					<td>2021-21584</td>
					<td>18</td>
				</tr>
			</tbody>
		</table>
	)
}
TableExample.displayName = "TableExample"

interface GuideImageProps {
	src: string
	alt: string
	width: number
	maxWidth: number
	height: number
	className?: string
}

const GuideImage: React.FC<Partial<GuideImageProps>> = ({
	src = "",
	alt = "Image",
	width = 100,
	maxWidth = 100,
	height = 100,
	className = "",
}) => (
	<ImageRender
		src={src}
		alt={alt}
		width={width}
		height={height}
		className={`my-4 mx-auto w-full md:max-w-[${maxWidth}%] ${className}`}
	/>
)

GuideImage.displayName = "GuideImage"

const TableCellSpanning: React.FC = () => (
	<table className="table6">
		<thead>
			<tr>
				<th colSpan={3}>Assignments</th>
				<th colSpan={2}>Laboratory</th>
				<th rowSpan={2}>Ability to Stay Awake</th>
			</tr>
			<tr>
				<th>1</th>
				<th>2</th>
				<th>3</th>
				<th>1</th>
				<th>2</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>10%</td>
				<td>10%</td>
				<td>10%</td>
				<td>30%</td>
				<td>36%</td>
				<td>4%</td>
			</tr>
		</tbody>
	</table>
)
TableCellSpanning.displayName = "TableCellSpanning"

const MDXSeparator: React.FC = () => <Separator className="my-6 lg:my-12" />

export {
	DataTable,
	DataTableExample,
	GuideImage,
	MDXLink,
	MDXSeparator,
	SummaryTable,
	OrderedList,
	TableCellSpanning,
	TableExample,
	UnorderedList,
}
