import Cards from '@/components/shared/ui/cards';
import PageHeader from '@/components/shared/ui/page-header';
import { icons, logos } from '@/data/sources/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function IconsPage() {
	return (
		<>
			<section>
				<PageHeader>Icons</PageHeader>
				<p className='text-xl text-200'>
					Discover a curated selection of icon libraries and resources to elevate your design
					projects.
				</p>
			</section>
			<section>
				<h3 className='text-2xl text-100 font-bold mb-2'>General</h3>
				<p>
					These are icons that you can find just about anywhere. They‘re used widely and frequently
					for various purposes.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
					<Cards data={icons} />
				</div>
			</section>
			<section>
				<h3 className='text-2xl text-100 font-bold mb-2'>Logos</h3>
				<p>Logos representing various brands, companies, and technologies are featured.</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
					<Cards data={logos} />
				</div>
			</section>
		</>
	);
}

export default IconsPage;
