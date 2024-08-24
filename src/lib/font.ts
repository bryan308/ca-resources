import { GeistSans } from 'geist/font/sans';
import { Lexend, Share_Tech_Mono } from 'next/font/google';
const geistsans = GeistSans;

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

export { geistsans, lexend, shareTechMono };
