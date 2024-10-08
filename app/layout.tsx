import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { cookies } from 'next/headers';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { getSession } from '@auth0/nextjs-auth0';
import { getCartProducts } from '@/lib/actions';
import CartContextProvider from './contexts/CartContextProvider';
import RootLayoutError from './components/RootLayoutError';
import metadataDetails from '@/lib/metadata/metadataDetails';

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: metadataDetails.rootLayout.title,
  description: metadataDetails.rootLayout.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get('theme')?.value
    ? (cookies().get('theme')!.value as 'dark' | 'light')
    : 'system';

  const session = await getSession();
  const userId = session && session.user.sub;
  const { products, totalQuantity, error } = (userId && (await getCartProducts(userId))) || {};

  return (
    <html lang="en" className={`${theme}`}>
      <body className={manrope.className}>
        {!error ? (
          <UserProvider>
            <CartContextProvider totalQuantity={totalQuantity || 0}>
              <Header selectedTheme={theme} session={session} products={products} />
              {children}
              <Footer />
            </CartContextProvider>
          </UserProvider>
        ) : (
          <RootLayoutError />
        )}
      </body>
    </html>
  );
}
