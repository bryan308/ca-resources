import Cards from '@/components/shared/ui/cards';
import PageHeader from '@/components/shared/ui/page-header';
import { mockups } from '@/data/sources/mockup';

function MockupsPage() {
	return (
		<>
			<section>
				<PageHeader>Mockup Tools</PageHeader>
				<p className='text-xl text-200'>
					Explore powerful mockup tools to bring your design ideas to life with realistic visuals
					and prototypes.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
					<Cards data={mockups} />
				</div>
			</section>
		</>
	);
}

export default MockupsPage;
