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
			</section>
			<section>
				<h3 className='text-2xl text-100 font-bold mb-2'>Inspiration and Tools</h3>
				<p>
					Check out these valuable websites to expand your understanding and application of color in
					web development.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
					{typography.map((typo) => (
						<div
							key={typo.name}
							className='flex items-center gap-4 py-4 px-6 rounded-lg border primary-border bg-foreground'
						>
							<div className='grid place-items-center min-w-14 size-14'>
								<Image
									src={typo.icon}
									alt={typo.name}
									width={56}
									height={56}
								/>
							</div>
							<div>
								<Link
									href={`${typo.url}?rel=ca-resources.vercel.app`}
									className='text-blue-500 hover:underline font-semibold'
									target='_blank'
									rel='noopener noreferrer'
								>
									{typo.name}
								</Link>
								<p className='text-gray-600 text-sm truncate-description'>{typo.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
