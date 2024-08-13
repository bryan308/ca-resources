export default function Colors() {
	return (
		<>
			<section>
				<h1>Colors</h1>
				<p className='text-xl text-200'>
					Learn how to work with our color system. Right click to copy raw values.
				</p>
			</section>
			<section>
				<h3 className='text-xl text-100 font-bold mb-2'>Scalse</h3>
				<p>
					There are 10 color scales in the system. P3 colors are used on supported browsers and
					displays.
				</p>
			</section>
			<section>
				<h3 className='text-xl text-100 font-bold mb-2'>Backgrounds</h3>
				<p>
					There are two background colors for pages and UI components. In most instances, you should
					use Background 1—especially when color is being placed on top of the background.
					Background 2 should be used sparingly when a subtle background differentiation is needed.
				</p>
				<div className='my-5'>
					<div className='flex h-10 items-center gap-3 border-b primary-border'>
						<div
							className='border primary-border dark:bg-neutral-950 size-4 rounded-full'
							// style='background:var(--ds-background-100)'
						></div>
						<p
							className='text_wrapper__i87JK w-[120px]'
							data-version='v1'
							// style='--text-color:var(--ds-gray-1000);--text-size:0.875rem;--text-line-height:1.25rem;--text-letter-spacing:initial;--text-weight:500'
						>
							Background 1
						</p>
						<p className='text_wrapper__i87JK'>Default element background</p>
					</div>
					<div className='flex h-10 items-center gap-3 border-none'>
						<div className='shadow-border-inset h-4 w-4 rounded-full'></div>
						<p className='text_wrapper__i87JK w-[120px]'>Background 2</p>
						<p className='text_wrapper__i87JK'>Secondary background</p>
					</div>
				</div>
			</section>
		</>
	);
}
