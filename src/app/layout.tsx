import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { satoshiFont } from '@/styles/typography.config';
import { SessionProviders } from '@/context/AuthProvider';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import CustomToaster from '@/components/Toast';
import { CartProvider } from '@/context/CartContext';
export const metadata: Metadata = {
  title: 'Shop books',
  description: 'Generated by Developer',
};

export async function generateStaticParams() {
  return [];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshiFont.className}>
      <body>
        <CartProvider>
        <CustomToaster />
          <SessionProviders>{children}</SessionProviders>
        </CartProvider>
      </body>
    </html>
  );
}
