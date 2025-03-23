import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pessoas desaparecidas - Polícia Judiciária Civil MT',
  description:
    'Consulte o registro de pessoas desaparecidas da Polícia Judiciária Civil de Mato Grosso',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col antialiased`}
      >
        <Header />

        <main className="container mx-auto p-6">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
