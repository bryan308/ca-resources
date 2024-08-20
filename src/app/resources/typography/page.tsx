import Cards from '@/components/shared/ui/cards';
import PageHeader from '@/components/shared/ui/page-header';
import { typography } from '@/data/sources/typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Typography',
	description:
		'Explore top resources and tools to enhance your text styles and make your web projects better.',
};

export default function Typography() {
	return (
		<>
			<section>
				<PageHeader>Typography</PageHeader>
				<p className='text-xl'>
					Explore top resources and tools to enhance your text styles and make your web projects
					better.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
					<Cards data={typography} />
				</div>
			</section>
		</>
	);
}
