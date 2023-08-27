'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className}>{children}</body>
        <GlobalStyles />
      </ThemeProvider>
    </html>
  );
}
