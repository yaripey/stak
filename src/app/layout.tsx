import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';
import NotSignedPage from './_components/NotSignedPage';
import { cn } from '@/lib/utils';
import TopBar from './_components/TopBar';

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
      <html lang="en" className="w-full">
        <body className={cn([inter.className, 'h-full w-full'])}>
          <SignedIn>
            <TopBar />
            <div className="flex h-full w-full">{children}</div>
          </SignedIn>
          <SignedOut>
            <NotSignedPage />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
