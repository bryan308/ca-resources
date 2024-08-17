import PageHeader from '@/components/shared/ui/page-header';
import React from 'react';

function AboutPage() {
	return (
		<>
			<section>
				<PageHeader className='mb-0'>About CA Resources</PageHeader>
				{/* <p className='text-xl'>
					This page will provide insight into the mission behind CA Resources, the vision for its
					future, and the story of Cedric Angulo, the creator.
				</p> */}
			</section>
			<section>
				<h3 className='text-100 font-semibold text-xl'>Mission Statement:</h3>
				<p>
					Here you’ll learn about the goals and purpose of CA Resources, and how it aims to assist
					web developers in finding the best tools and resources available.
				</p>
			</section>
			{/* <section>
				<h3 className='text-100 font-semibold text-xl'>The Creator:</h3>
				<p>
					An introduction to Cedric Angulo, including background information, experience, and
					inspiration for creating CA Resources.
				</p>
				Future Plans: Get a glimpse into what’s next for CA Resources and how the site plans to grow
				and evolve.
			</section> */}
		</>
	);
}

export default AboutPage;
