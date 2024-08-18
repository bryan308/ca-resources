import Cards from '@/components/shared/ui/cards';
import PageHeader from '@/components/shared/ui/page-header';
import { inspirations } from '@/data/sources/insporations';
import React from 'react';

function InspiPage() {
	return (
		<>
			<section>
				<PageHeader>Inspirations</PageHeader>
				<p className='text-xl text-200'>
					Explore a variety of inspiration sources to ignite your creativity and enhance your design
					work.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
					<Cards data={inspirations} />
				</div>
			</section>
		</>
	);
}

export default InspiPage;
