import '@/styles/globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Toaster } from '@/components/ui/sonner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://vercel.com'),
  title: 'Next-Tailwind Starter Template',
  description: 'Starter Template',
  keywords: ['nextjs', 'tailwindcss', 'template', 'starter', 'kit'],
  openGraph: {
    title: 'Next-Tailwind Starter Template',
    description: 'Starter Template',
    images: '/banner/example.png',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
