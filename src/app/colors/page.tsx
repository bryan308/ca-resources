// import { colorScheme } from '@/lib/colors';
// import { geistmono } from '@/lib/font';
import Cards from '@/components/shared/ui/cards';
import PageHeader from '@/components/shared/ui/page-header';
import { colors } from '@/data/sources/colors';

export default function Colors() {
	return (
		<>
			<section>
				<PageHeader>Colors</PageHeader>
				<p className='text-xl text-200'>
					Explore our recommended color scales and discover additional resources to enhance your
					color knowledge.
				</p>
			</section>
			<section>
				<h3 className='text-2xl text-100 font-bold mb-2'>Inspiration and Tools</h3>
				<p>
					Check out these valuable websites to expand your understanding and application of color in
					web development.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
					<Cards data={colors} />
				</div>
			</section>
		</>
	);
}

{
	/* <section>
				<h3 className='text-2xl text-100 font-bold mb-2'>Scales</h3>
				<p>
					Here are the recommended color scales for CA Resources, sourced from the{' '}
					<Link
						href='https://vercel.com/geist/colors'
						target='_blank'
					>
						Geist Design System.
					</Link>
				</p>
				<div className='mt-10'>
					{colorScheme.map((c, i: number) => {
						return (
							<div
								key={i}
								className='flex items-center gap-4 w-full'
							>
								<p className='text-100 w-24 text-sm font-semibold'>{c.colorName}</p>
								<ul className='flex w-full gap-1 md:gap-2 mb-4'>
									{Array.from({ length: 10 }).map((_, index) => (
										<li
											key={index}
											className='w-full max-w-[68px]'
										>
											<span className='mb-2 w-full grow'>
												<button
													title='copy'
													style={{ backgroundColor: `var(--cp-${c.var}-${index + 1}00)` }}
													className={`border primary-border pointer-events-none flex aspect-square w-full grow cursor-pointer items-center justify-center rounded-lg md:pointer-events-auto md:h-10`}
													type='button'
												></button>
											</span>
											<p className='text-xs text-100 font-medium'></p>
											<p className={`${geistmono.className} text-xs`}></p>
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>
			</section> */
}
