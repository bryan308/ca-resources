import Cards from '@/components/shared/ui/cards';
import PageHeader from '@/components/shared/ui/page-header';
import { stockPhotos } from '@/data/sources/stock-photos';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Stock Photos',
	description: 'High-Quality Stock Photos for enriching your projects and presentations.',
};

function StockPhotosPage() {
	return (
		<>
			<section>
				<PageHeader>Stock Photos</PageHeader>
				<p>High-Quality Stock Photos for enriching your projects and presentations.</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
					<Cards data={stockPhotos} />
				</div>
			</section>
		</>
	);
}

export default StockPhotosPage;
