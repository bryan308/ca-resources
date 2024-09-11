import React from "react"
import ImageRender from "./image-render"

interface ITableProps {
	example_id?: number
}

const SummaryTable = ({ children }: { children: React.ReactNode }) => {
	return <div className="table w-full mt-6">{children}</div>
}
SummaryTable.DisplayName = "SummaryTable"

const DataTable = ({ children }: { children: React.ReactNode }) => {
	return <div className="data-table w-full mt-6">{children}</div>
}
DataTable.DisplayName = "DataTable"

const TableExample: React.FC<ITableProps> = ({ example_id }) => {
	const getStyle = () => {
		const styles = ["table1", "table2", "table3", "table4", "table5"]
		return styles[example_id! - 1] || ""
	}

	return (
		<table className={`my-6 ${getStyle()}`}>
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

export { DataTable, GuideImage, TableExample, SummaryTable, TableCellSpanning }
