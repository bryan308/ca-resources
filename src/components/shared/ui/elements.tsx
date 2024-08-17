import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { cva } from 'class-variance-authority';
import { lexend } from '@/lib/font';

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

export { Section, MDXLink };
