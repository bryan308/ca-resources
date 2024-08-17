import PageHeader from '@/components/shared/ui/page-header';

export default function Home() {
	return (
		<>
			<section>
				<PageHeader>Introduction</PageHeader>
				<p className='text-xl text-100 mb-8'>Welcome to CA Resources!</p>
				<p className='max-w-[75ch]'>
					This site is your web development hub, catering to both novice and expert developers. It
					offers a carefully selected collection of tools, guides, and resources designed to enhance
					your development experience
				</p>
			</section>
		</>
	);
}
