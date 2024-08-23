import { MDXFrontMatter } from '@/lib/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

interface IPagination {
	previous: MDXFrontMatter | null;
	next: MDXFrontMatter | null;
}

function Pagination({ next, previous }: IPagination) {
	return (
		<section>
			<nav
				aria-label='pagination'
				role='navigation'
				className={`flex items-center ${
					!previous ? 'justify-end' : !next ? 'justify-start' : 'justify-between'
				}`}
			>
				{previous && (
					<Link
						aria-label={`Go to previous guide: ${previous.title}`}
						className='p-2 rounded-md flex items-center space-x-2 transition group'
						href={`/guides/${previous.slug}`}
					>
						<ChevronLeftIcon className='group size-6 mb-px text-200 group-hover:text-100 transition-colors' />
						<div className='group'>
							<span className='text-sm text-200 group-hover:text-100 transition-colors'>
								Previous
							</span>
							<p className='text-base text-100 font-semibold'>{previous.title}</p>
						</div>
					</Link>
				)}
				{next && (
					<Link
						aria-label={`Go to next guide: ${next.title}`}
						className='group p-2 rounded-md flex items-center space-x-2 transition'
						href={`/guides/${next.slug}`}
					>
						<div>
							<span className='text-sm text-200 group-hover:text-100 transition-colors'>Next</span>
							<p className='text-base text-100 font-semibold'>{next.title}</p>
						</div>
						<ChevronRightIcon className='size-6 mb-px text-200 group-hover:text-100 transition-colors' />
					</Link>
				)}
			</nav>
		</section>
	);
}

export default Pagination;
