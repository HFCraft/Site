import { Head, Html, Main, NextScript } from 'next/document'

const Document: React.FC = (): JSX.Element => {
  return (
    <Html>
      <Head>
        <link rel="preload" crossOrigin="anonymous" type="font/woff2" href="/fonts/Minecraft-Five-Bold.woff2" as="font" />
        <link rel="preload" crossOrigin="anonymous" type="font/woff2" href="/fonts/Minecraft-Ten.woff2" as="font" />
        <link
          rel="icon preload"
          type="image/webp"
          href="/_next/image?url=/images/Favicon.webp&w=64&q=75"
        />
        <link
          rel="shortcut icon preload"
          type="image/webp"
          href="/_next/image?url=/images/Favicon.webp&w=64&q=75"
        />

        <link
          rel="icon preload"
          type="image/webp"
          sizes="16x16"
          href="/_next/image?url=/images/Favicon@16.webp&w=16&q=75"
        />
        <link
          rel="icon preload"
          type="image/webp"
          sizes="32x32"
          href="/_next/image?url=/images/Favicon@32.webp&w=32&q=75"
        />
        <link
          rel="icon preload"
          type="image/webp"
          sizes="96x96"
          href="/_next/image?url=/images/Favicon@96.webp&w=96&q=75"
        />
        <link
          rel="icon preload"
          type="image/webp"
          sizes="192x192"
          href="/_next/image?url=/images/Android@192.webp&w=192&q=75"
        />

        <link
          rel="apple-touch-icon preload"
          sizes="57x57"
          href="/_next/image?url=/images/Apple@57.webp&w=57&q=75"
        />
        <link
          rel="apple-touch-icon preload"
          sizes="60x60"
          href="/_next/image?url=/images/Apple@60.webp&w=60&q=75"
        />
        <link
          rel="apple-touch-icon preload"
          sizes="72x72"
          href="/_next/image?url=/images/Apple@72.webp&w=72&q=75"
        />
        <link
          rel="apple-touch-icon preload"
          sizes="76x76"
          href="/_next/image?url=/images/Apple@76.webp&w=76&q=75"
        />
        <link
          rel="apple-touch-icon preload"
          sizes="114x114"
          href="/_next/image?url=/images/Apple@114.webp&w=114&q=75"
        />
        <link
          rel="apple-touch-icon preload"
          sizes="120x120"
          href="/_next/image?url=/images/Apple@120.webp&w=120&q=75"
        />
        <link
          rel="apple-touch-icon preload"
          sizes="144x144"
          href="/_next/image?url=/images/Apple@144.webp&w=144&q=75"
        />
        <link
          rel="apple-touch-icon preload"
          sizes="152x152"
          href="/_next/image?url=/images/Apple@152.webp&w=152&q=75"
        />
        <link
          rel="apple-touch-icon preload"
          sizes="180x180"
          href="/_next/image?url=/images/Apple@180.webp&w=180&q=75"
        />
      </Head>
      <body className="antialiased animate-start animate-text-start dark:text-gray-200 dark:bg-zinc-900 bg-gray-200 text-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
