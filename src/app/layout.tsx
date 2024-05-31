import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SideBar from '@/components/SideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stak',
  description: 'An app for learning words',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={inter.className + ' ' + 'h-full w-full'}>
        <div className="flex h-full w-full">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
