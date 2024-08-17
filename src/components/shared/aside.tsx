import Link from 'next/link';

function Aside() {
	return (
		<aside className='hidden xl:flex flex-col w-[16.25rem] border border-t-0 primary-border'>
			<div className='sticky top-[4.25rem] pt-8 px-6'>
				<div className='mb-4'>
					<ul className='links'>
						<li>
							<Link
								href='/'
								scroll={false}
							>
								Introduction
							</Link>
						</li>
					</ul>
				</div>
				<div className='mb-4'>
					<p className='text-100 text-sm font-medium'>Resources</p>
					<ul className='links'>
						<li>
							<Link
								href='/colors'
								scroll={false}
							>
								Colors
							</Link>
						</li>
						<li>
							<Link
								href='/icons'
								scroll={false}
							>
								Icons
							</Link>
						</li>
						<li>
							<Link
								href='/typography'
								scroll={false}
							>
								Typography
							</Link>
						</li>
					</ul>
				</div>
				<div className='mb-4'>
					<p className='text-100 text-sm font-medium'>Components</p>
					<ul className='links'>
						<li>
							<Link
								href='/components/table'
								scroll={false}
							>
								Table
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</aside>
	);
}

export default Aside;
