import { Inter } from "next/font/google"
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale, getMessages } from 'next-intl/server';
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AuthProvider } from "@/context/AuthContext"
import { Metadata, ResolvingMetadata, Viewport } from 'next'
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

// Define supported locales type
type SupportedLocale = 'it' | 'en' | 'es';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: SupportedLocale }>;
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

// Generate metadata based on locale
export async function generateMetadata(
  { params }: { params: { locale: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Get the parent metadata
  const parentMetadata = await parent;

  try {
    // Get messages for the current locale
    const messages = await getMessages();
    
    if (!messages || !messages.metadata) {
      console.error('Metadata not found in messages for locale:', params.locale);
      return parentMetadata;
    }

    const meta = messages.metadata;

    return {
      metadataBase: new URL('https://www.persevida.com'),
      title: {
        template: meta.titleTemplate,
        default: meta.defaultTitle,
      },
      description: meta.description,
      applicationName: meta.applicationName,
      referrer: 'origin-when-cross-origin',
      keywords: meta.keywords,
      authors: [{ name: meta.authorName }],
      creator: meta.creator,
      publisher: meta.publisher,
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      openGraph: {
        type: 'website',
        locale: meta.locale,
        url: meta.url,
        siteName: meta.siteName,
        title: meta.ogTitle,
        description: meta.ogDescription,
        images: [
          {
            url: meta.ogImage,
            width: 1200,
            height: 630,
            alt: meta.ogImageAlt,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.twitterTitle,
        description: meta.twitterDescription,
        images: [meta.twitterImage],
        creator: meta.twitterCreator,
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
      alternates: {
        canonical: meta.canonicalUrl,
        languages: {
          'en-US': 'https://www.persevida.com',
          'es-ES': 'https://www.persevida.com/es',
          'it-IT': 'https://www.persevida.com/it',
        },
      },
      manifest: '/favicon/site.webmanifest',
      icons: {
        icon: [
          { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        ],
        apple: [
          { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ],
        other: [
          { rel: 'mask-icon', url: '/favicon/safari-pinned-tab.svg', color: '#000000' }
        ]
      },
      verification: {
        google: meta.googleVerification,
      },
      category: 'technology',
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
    return parentMetadata;
  }
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }, { locale: 'es' }];
}

export default async function LocaleLayout(props: Props) {
  const params = await props.params;
  const locale = params.locale;
  
  // Validate that the incoming `locale` parameter is valid
  if (!['en', 'it', 'es'].includes(locale)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="dark">
      <body className={`${inter.className} min-h-screen bg-background antialiased dark`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
            <AuthProvider>
              <div className='relative flex min-h-screen flex-col'>
                <SiteHeader />
                <main className='flex-1 flex flex-col'>{props.children}</main>
                <SiteFooter />
              </div>
            </AuthProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
