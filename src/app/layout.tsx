import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SideBar from '@/app/_components/SideBar';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';
import NotSignedPage from './_components/NotSignedPage';
import { cn } from '@/lib/utils';

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
    <ClerkProvider>
      <html lang="en" className="h-full w-full">
        <body className={cn([inter.className, 'h-full w-full p-5'])}>
          <SignedIn>
            <div className="flex h-full w-full">
              <SideBar />
              {children}
            </div>
          </SignedIn>
          <SignedOut>
            <NotSignedPage />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
