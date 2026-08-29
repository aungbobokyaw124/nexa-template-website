import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'neXa — Build. Automate. Grow.',
  description: 'One intelligent platform for building digital products, automating workflows, launching websites, and growing your business.',
  openGraph: {
    title: 'neXa — Build. Automate. Grow.',
    description: 'AI + Web + Automation + Cloud ecosystem.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
