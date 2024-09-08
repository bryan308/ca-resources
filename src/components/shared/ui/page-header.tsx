import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
	className?: string;
	children: React.ReactNode;
	as?: React.ElementType;
}

function PageHeader({ className, children, as: Tag = 'h1' }: PageHeaderProps) {
	return (
		<Tag className={cn('text-primary text-4xl font-bold mb-2 tracking-tighter', className)}>
			{children}
		</Tag>
	);
}

PageHeader.displayName = 'PageHeader';

export default PageHeader;
