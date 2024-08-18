import Link from 'next/link';
import { Input } from './input';
import { IconMenu2 } from '@tabler/icons-react';
import { ModeToggle } from './theme-switcher';
import { Sheet, SheetContent, SheetDescription, SheetTrigger } from './sheet';
import { ArrowRight } from 'lucide-react';
import { overview, resources } from '@/data/links';
import { getAllPaths } from '@/lib/get-paths';
import Box from '../icons/box';

function Header() {
	const componentPaths = getAllPaths();

	return (
		<header className='bg-white dark:bg-neutral-950 z-100 fixed top-0 mx-auto w-full max-w-[1220px] md:sticky primary-border border-b xl:border-l xl:border-r z-50'>
			<div className='flex w-full max-w-[1219px] pl-[22px]'>
				<div className='primary-border flex grow items-center gap-4 border-r-0 xl:border-r py-4 pl-px xl:w-[237px] xl:grow-0'>
					<Link
						className='flex items-center gap-2 no-underline'
						href='/'
					>
						<Box />
						<p className='text-100 font-base font-semibold'>CA Resources</p>
					</Link>
				</div>
				<div className='flex items-center justify-between p-4 xl:grow'>
					<div className='hidden xl:block'>
						<Input placeholder='Search' />
					</div>
					<ModeToggle />
					<div className='xl:hidden block'>
						<Sheet>
							<SheetTrigger>
								<IconMenu2 />
							</SheetTrigger>
							<SheetContent side='left'>
								<SheetDescription>
									<div className='my-4'>
										<h3 className='text-200 font-semibold text-md'>Overview</h3>
										{overview.map((o, i) => (
											<SheetTrigger
												key={i}
												asChild
											>
												<Link
													href={o.path}
													className='text-100 text-lg flex items-center gap-2 my-2'
												>
													<ArrowRight className='size-4' />
													{o.text}
												</Link>
											</SheetTrigger>
										))}
									</div>
									<div className='my-4'>
										<h3 className='text-200 font-semibold text-md'>Resources</h3>
										{resources
											.sort((a, b) => a.text.localeCompare(b.text))
											.map((r, i) => (
												<SheetTrigger
													key={i}
													asChild
												>
													<Link
														href={r.path}
														className='text-100 text-lg flex items-center gap-2 my-2'
													>
														<ArrowRight className='size-4' />
														{r.text}
													</Link>
												</SheetTrigger>
											))}
									</div>
									<div className='my-4'>
										<h3 className='text-200 font-semibold text-md'>Components</h3>
										{componentPaths
											.sort((a, b) => a.title.localeCompare(b.title))
											.map((p, i) => (
												<SheetTrigger
													key={i}
													asChild
												>
													<Link
														href={`/components/${p.slug}`}
														className='text-100 text-lg flex items-center gap-2 my-2'
													>
														<ArrowRight className='size-4' />
														{p.title}
													</Link>
												</SheetTrigger>
											))}
									</div>
								</SheetDescription>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
