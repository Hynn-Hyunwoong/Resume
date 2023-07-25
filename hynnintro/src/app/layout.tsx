import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'About Hynn',
  description: 'Hynn is a web developer Introducing myself.',
  applicationName: 'Hyunwoong Portfolio website',
  authors: { name: 'Hyunwoong Choi', url: 'https://github.com/Hynn-Hyunwoong' },
  generator: 'Next.js',
  keywords: ['Hynn', 'Hyunwoong', 'Choi', 'Portfolio', 'Web', 'Developer'],
  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
