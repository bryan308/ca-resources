import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Lexend } from 'next/font/google';
const geistsans = GeistSans;
const geistmono = GeistMono;

const lexend = Lexend({
	subsets: ['latin'],
	display: 'swap',
	variable: '--lexend',
	adjustFontFallback: false,
});

export { geistsans, geistmono, lexend };
