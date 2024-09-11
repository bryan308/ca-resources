import PageHeader from '@/components/shared/page-header';
import Link from 'next/link';

export default function Introduction() {
	return (
		<>
			<section>
				<PageHeader>Introduction</PageHeader>
				<h4 className="text-muted-foreground">Welcome to CA Resources!</h4>
				<p>
					This website is designed to boost productivity not only in web development but also in
					various educational fields. CA Resources offers a comprehensive collection of curated
					resources, ranging from essential tools and guides to inspirational materials. Our goal is
					to streamline your workflow and support your growth as a developer and learner.
				</p>
			</section>
			<section>
				<h2 className='text-2xl text-foreground font-bold mb-2'>Inspired by</h2>
				<p>
					The conceptualization of CA Resources is influenced by the{' '}
					<Link
						href='https://vercel.com/geist/introduction'
						target='_blank'
						className='link'
					>
						Vercel Geist Design System
					</Link>
					.
				</p>
			</section>
			<section>
				<p className="mt-0">
					<strong className='text-foreground'>CA Resources</strong> was created and managed by{' '}
					<Link
						href='https://cdrcangulo.vercel.app/'
						target='_blank'
						className='link'
					>
						Cedric Angulo
					</Link>
					.
				</p>
			</section>
			{/* <section>
				<h2 className='text-2xl text-foreground font-bold mb-2'>Contribute</h2>
				<p>
					CA Resources is an open-source project. You can view the code, contribute, or suggest
					improvements by visiting the{' '}
					<Link
						href='https://github.com/bryan308/ca-resources'
						target='_blank'
						className='link'
					>
						Github Repository
					</Link>
					.
				</p>
			</section> */}
		</>
	);
}
