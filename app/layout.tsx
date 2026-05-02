import type {Metadata} from 'next';
import {Playfair_Display, Inter} from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'La Toiletterie | Toilettage canin et félin à Nozay (91620)',
  description: 'Le bien-être de votre compagnon entre de bonnes mains. Prenez rendez-vous pour un toilettage sans stress à Nozay.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#FAF7F2] text-[#2C1E16] font-sans antialiased" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-[#2C1E16] focus:z-50 focus:font-medium">
          Passer au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
