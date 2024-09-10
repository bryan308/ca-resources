import { useMemo } from 'react';
import { getAllMdx } from '@/lib/mdx';
import AsideLinks from './render-aside-links';
import ComponentPaths from './component-paths';
import { overview, resources } from '@/data/links';

function Aside() {
	const mdxFiles = useMemo(() => getAllMdx().map((post) => post['frontMatter']), []);

	return (
		<aside className='hidden xl:flex flex-col w-[16.25rem] border border-t-0 border-border'>
			<div className='sticky top-[4.25rem] pt-8 pl-4 pr-6'>
				<div className='mb-4'>
					<p className='text-foreground text-sm font-medium pl-2'>Overview</p>
					<ul className='links'>
						<AsideLinks data={overview} />
					</ul>
				</div>
				<div className='mb-4'>
					<p className='text-foreground text-sm font-medium pl-2'>Resources</p>
					<ul className='links'>
						<AsideLinks data={resources} />
					</ul>
				</div>
				<div className='mb-4'>
					<p className='text-foreground text-sm font-medium pl-2'>Guides</p>
					<ul className='links'>
						<ComponentPaths paths={mdxFiles} />
					</ul>
				</div>
			</div>
		</aside>
	);
}

export default Aside;
