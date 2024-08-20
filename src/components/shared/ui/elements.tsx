import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { cva } from 'class-variance-authority';
import { lexend } from '@/lib/font';
import ImageRender from './image-render';
// import tableStyles from './table.module.scss';

export interface ICourse {
	fundamentals: ICourseMeta;
	intermidiate: ICourseMeta;
}

export interface ICourseParam {
	course: ICourseMeta;
}

interface ICourseMeta {
	title: string;
	description: string;
	thumbnail: string;
	link: string;
	tags: TTags;
}

type TTags = {
	text: string;
}[];

export interface IChildren {
	children: React.ReactNode;
}

export interface ILink extends IChildren {
	href: string;
}

const cardVariants = cva('relative bg-[#141414] border-l border-l-8 p-4 my-4 rounded-md', {
	variants: {
		variant: {
			notes: 'border-yellow-500',
			tips: 'border-blue-500',
			warning: 'border-orange-500',
		},
	},
	defaultVariants: {
		variant: 'notes',
	},
});

const CardHeader = ({ children }: { children?: React.ReactNode }) => {
	return (
		<h4 className={cn(lexend.className, 'text-xl font-semibold leading-normal ml-8 mb-4')}>
			{children}
		</h4>
	);
};
CardHeader.displayName = 'CardHeader';

const MDXLink = ({ href, children }: ILink) => (
	<Link
		href={href}
		className='leading-none text-blue-500 text-base underline decoration-blue-500 underline-offset-4 decoration-2 visited:text-violet-500 transition-all hover:text-indigo-400 hover:decoration-[1.5px] focus:text-indigo-400 focus:decoration-[1.5px] active:text-red-500'
		target='_blank'
	>
		{children}
	</Link>
);
MDXLink.displayName = 'MDXLink';

const Section = ({ children }: IChildren) => <section className='mt-4 mb-12'>{children}</section>;
Section.displayName = 'Section';

interface ITableProps {
	example_id?: number;
}

const Table = ({ example_id }: ITableProps) => {
	function getStyle() {
		switch (example_id) {
			case 1:
				return 'table1';
			case 2:
				return 'table2';
			case 3:
				return 'table3';
			case 4:
				return 'table4';
			case 5:
				return 'table5';
			default:
				break;
		}
	}

	return (
		<table className={`my-6 text-200 bg-foreground ${getStyle()}`}>
			<thead className='text-100'>
				<tr>
					<th>Student Name</th>
					<th>Student Number</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody className='text-200'>
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
	);
};
Table.displaName = 'Table';

const GuideImage = ({
	src,
	alt,
	width,
	maxWidth,
	height,
	className,
}: {
	src: string;
	alt: string;
	width: number;
	maxWidth: number;
	height: number;
	className?: string;
}) => {
	return (
		<ImageRender
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={`my-4 mx-auto w-full md:max-w-[${maxWidth}%] ${className}`}
		/>
	);
};
GuideImage.displayName = 'GuideImage';

const TableCellSpanning = () => (
	<table className='font-serif border dark:border-[#2e2e2e] border-separate my-6'>
		<thead>
			<tr>
				<th
					className='border dark:border-[#2e2e2e] md:px-2'
					colSpan={3}
				>
					Assignments
				</th>
				<th
					className='border dark:border-[#2e2e2e] md:px-2'
					colSpan={2}
				>
					Laboratory
				</th>
				<th
					className='border dark:border-[#2e2e2e] md:px-2'
					rowSpan={2}
				>
					Ability to Stay Awake
				</th>
			</tr>
			<tr>
				<th className='border dark:border-[#2e2e2e]'>1</th>
				<th className='border dark:border-[#2e2e2e]'>2</th>
				<th className='border dark:border-[#2e2e2e]'>3</th>
				<th className='border dark:border-[#2e2e2e]'>1</th>
				<th className='border dark:border-[#2e2e2e]'>2</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td className='border dark:border-[#2e2e2e] text-center'>10%</td>
				<td className='border dark:border-[#2e2e2e] text-center'>10%</td>
				<td className='border dark:border-[#2e2e2e] text-center'>10%</td>
				<td className='border dark:border-[#2e2e2e] text-center'>30%</td>
				<td className='border dark:border-[#2e2e2e] text-center'>36%</td>
				<td className='border dark:border-[#2e2e2e] text-center'>4%</td>
			</tr>
		</tbody>
	</table>
);

export { GuideImage, Section, MDXLink, Table, TableCellSpanning };
