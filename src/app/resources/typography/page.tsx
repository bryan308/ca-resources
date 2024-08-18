import Cards from '@/components/shared/ui/cards';
import PageHeader from '@/components/shared/ui/page-header';
import { typography } from '@/data/sources/typography';
import Image from 'next/image';
import Link from 'next/link';

export default function Typography() {
	return (
		<>
			<section>
				<PageHeader>Typography</PageHeader>
				<p className='text-xl'>
					Learn how to work with our color system. Right click to copy raw values.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
					<Cards data={typography} />
				</div>
			</section>
		</>
	);
}
