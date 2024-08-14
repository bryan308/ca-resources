import Link from 'next/link';
import Toolbar from '../ui/icons/toolbar';
import { Input } from '../ui/input';
import { ModeToggle } from '../ui/theme-switcher';

function Header() {
	return (
		<header className='bg-white dark:bg-neutral-950 z-100 fixed top-0 mx-auto w-full max-w-[1220px] md:sticky primary-border border-b xl:border-l xl:border-r z-50'>
			<div className='flex w-full max-w-[1219px] pl-[22px]'>
				<div className='primary-border flex grow items-center gap-4 border-r-0 xl:border-r py-4 pl-px xl:w-[237px] xl:grow-0'>
					<Link
						className='flex items-center gap-4 w-full no-underline'
						href='/'
					>
						<Toolbar />
						<p className='font-base font-semibold'>CA Resources</p>
					</Link>
				</div>
				<div className='flex items-center justify-between p-4 xl:grow'>
					<div className='hidden xl:block'>
						<Input placeholder='Search' />
					</div>
					<ModeToggle />
					{/* <div className='hidden xl:block'>SWITCHER</div> */}
				</div>
			</div>
		</header>
	);
}

export default Header;
