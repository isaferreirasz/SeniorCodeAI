import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// @ts-ignore
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { CustomCursor } from '@/components/Cursor';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Senior Code AI - Aprenda a Programar',
  description:
    'Uma plataforma completa para aprender programação de forma simples e eficaz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
