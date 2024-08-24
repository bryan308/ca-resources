import './globals.css';
import { geistsans, shareTechMono } from '@/lib/font';

import Header from '@/components/shared/ui/header';
import Aside from '@/components/shared/ui/aside';

import type { Metadata } from 'next';
import Providers from '@/components/shared/ui/theme-provider';
import NextTopLoader from 'nextjs-toploader';
import { siteMetadata as meta, socials } from '@/data/siteConfig';

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
	openGraph: {
		type: 'website',
		url: meta.url,
		title: meta.title,
		description: meta.description,
		images: [
			{
				url: `${meta.url}${meta.banner}`,
				alt: meta.title,
			},
		],
	},
	twitter: {
		site: meta.url,
		card: 'summary_large_image',
		title: meta.title,
		creator: socials.x.username,
		description: meta.description,
		images: [
			{
				url: `${meta.url}${meta.banner}`,
				alt: meta.title,
			},
		],
	},
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
				<NextTopLoader
					color='#8E4EC6'
					showSpinner={false}
				/>
				<Providers>
					<Header />
					<div className='h-16 md:hidden' />
					<main
						className='flex max-w-[76.25rem] flex-col xl:mx-auto xl:mt-0 xl:grid xl:grid-cols-[16.25rem_1fr] min-h-[90dvh]'
						role='main'
					>
						<Aside />
						<div className='border border-t-0 border-l-0 primary-border h-full'>{children}</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
