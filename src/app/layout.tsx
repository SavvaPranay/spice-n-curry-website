import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { seoData, schemaData } from '@/data/business';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(seoData.siteUrl),
  title: {
    default: seoData.defaultTitle,
    template: `%s | ${seoData.siteName}`,
  },
  description: seoData.defaultDescription,
  keywords: seoData.keywords,
  authors: [{ name: seoData.siteName }],
  creator: seoData.siteName,
  publisher: seoData.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: seoData.defaultTitle,
    description: seoData.defaultDescription,
    url: seoData.siteUrl,
    siteName: seoData.siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: seoData.ogImage,
        width: 1200,
        height: 630,
        alt: `${seoData.siteName} - Authentic Indian Grocery & Restaurant`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.defaultTitle,
    description: seoData.defaultDescription,
    images: [seoData.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData.localBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData.groceryStore),
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased bg-[#FFF8E7]`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
