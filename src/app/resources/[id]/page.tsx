import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Cards from '@/components/shared/ui/cards';
import PageHeader from '@/components/shared/ui/page-header';

import { resourcesData, ResourceType } from '@/data/sources/resources';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const { id } = params;
	if (!Object.keys(resourcesData).includes(id)) {
		return { title: 'Not Found', description: 'Resource not found.' };
	}

	const resourceData = resourcesData[id as ResourceType];
	return {
		title: `${resourceData.header}`,
		description: resourceData.subheader,
	};
}

export function generateStaticParams() {
	const resourceKeys = Object.keys(resourcesData) as ResourceType[];

	return resourceKeys.map((id) => ({ id }));
}

export default function ResourcePage({ params }: { params: { id: string } }) {
	const { id } = params;

	if (!Object.keys(resourcesData).includes(id)) {
		return notFound();
	}

	const resourceData = resourcesData[id as ResourceType];

	return (
		<>
			<section>
				<PageHeader>{resourceData.header}</PageHeader>
				<p className='text-xl text-200'>{resourceData.subheader}</p>
			</section>
			{resourceData.sections.map((section, index) => (
				<section key={index}>
					{section.header && (
						<>
							<h2 className='text-2xl text-100 font-bold mb-2'>{section.header}</h2>
							<p>{section.subheader}</p>
						</>
					)}
					<div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${section.header && 'mt-10'}`}>
						<Cards data={section.links} />
					</div>
				</section>
			))}
		</>
	);
}
