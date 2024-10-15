import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Willis Portfolio</title>
        <meta name="description" content="My Website to showcase my masterpiece and what I can do." />
        <link rel="icon" href="/assets/images/logo.ico" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        {/* Load Ionicons asynchronously */}
        <Script
          strategy="afterInteractive"
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
        <Script
          strategy="afterInteractive"
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}