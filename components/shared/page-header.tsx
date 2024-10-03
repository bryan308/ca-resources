import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
	className?: string;
	children: React.ReactNode;
	as?: React.ElementType;
}

function PageHeader({ className, children, as: Tag = 'h1' }: PageHeaderProps) {
	return (
		<Tag className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>
			{children}
		</Tag>
	);
}

PageHeader.displayName = 'PageHeader';

export default PageHeader;
