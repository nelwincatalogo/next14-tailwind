'use client';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from '@/components/AlertTemplate';

import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 2500,
  offset: '20px',
  // you can also just use 'scale'
  transition: transitions.FADE,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AlertProvider template={AlertTemplate} {...options}>
          {children}
        </AlertProvider>
      </body>
    </html>
  );
}
