import { Inter } from 'next/font/google';
import { Merriweather } from 'next/font/google';

const primaryFont = Inter({ subsets: ['latin'] });
const emphasisFont = Merriweather({ subsets: ['latin'], weight: ['400', '700'] });

export {
	primaryFont,
	emphasisFont
};