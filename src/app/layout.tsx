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
    siteName: 'Next-Tailwind Starter Template',
    title: 'Next-Tailwind Starter Template',
    description: 'Starter Template',
    images: '/banner/example.png',
    type: 'website',
  },
  twitter: {
    title: 'Next-Tailwind Starter Template',
    description: 'Starter Template',
    images: '/banner/example.png',
    card: 'summary_large_image',
  },
  appleWebApp: {
    title: 'Next-Tailwind Starter Template',
    capable: true,
    statusBarStyle: 'default',
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
