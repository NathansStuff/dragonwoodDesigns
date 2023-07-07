import './globals.css';
import type { Metadata } from 'next';
import { Inter, Libre_Baskerville } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const libreBaskerville = Libre_Baskerville({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dragonwood Designs',
  description: 'Customised laser wood products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href={'/favicon.png'}
        />
      </head>
      <body className={`${inter.className} ${libreBaskerville.className}`}>
        {children}
      </body>
    </html>
  );
}
