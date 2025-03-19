import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Orelega_One } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const poppins = Poppins({
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

const orelega = Orelega_One({
  weight: '400',
  variable: '--font-orelega-one',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MRICondyleNET',
  description: 'MRICondyleNET Project AI Yarsi University',
  icons: {
    icon: '/logo-MRICondyleNet.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${orelega.variable}  antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
