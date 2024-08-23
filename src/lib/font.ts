import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Lexend, Share_Tech_Mono, Space_Mono } from 'next/font/google';
const geistsans = GeistSans;
const geistmono = GeistMono;

const lexend = Lexend({
	subsets: ['latin'],
	display: 'swap',
	variable: '--lexend',
	adjustFontFallback: false,
});

const shareTechMono = Share_Tech_Mono({
	subsets: ['latin'],
	weight: '400',
	variable: '--shareTechMono',
});

export { geistsans, geistmono, lexend, shareTechMono };
