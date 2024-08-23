import './globals.css';
import type { Metadata } from 'next';
import { geistsans, shareTechMono } from '@/lib/font';
import Providers from '@/components/shared/ui/theme-provider';
import Header from '@/components/shared/ui/header';
import Aside from '@/components/shared/ui/aside';

export const metadata: Metadata = {
	title: 'CA Resources',
	description:
		'This website is designed to enhance productivity in web development by providing a comprehensive collection of curated resources. From essential tools and guides to inspirational materials, CA Resources aims to streamline your workflow and support your growth as a developer.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body
				className={`${shareTechMono.variable} ${geistsans.className} bg-[#FAFAFA] dark:bg-black text-[#171717] dark:text-[#EDEDED]`}
			>
				<Providers>
					<Header />
					<div className='h-16 md:hidden' />
					<main className='flex max-w-[76.25rem] flex-col xl:mx-auto xl:mt-0 xl:grid xl:grid-cols-[16.25rem_1fr] min-h-[90dvh]' role='main'>
						<Aside />
						<div className='border border-t-0 border-l-0 primary-border h-full'>{children}</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
