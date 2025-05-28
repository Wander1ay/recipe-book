import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">

        <Head>
            <link rel="stylesheet" type="text/css"
                  href="https://www.cdn-tinkoff.ru/frontend-libraries/npm/react-kit-font/typography/desktop.css"/>
            <link rel="stylesheet" type="text/css"
                  href="https://www.cdn-tinkoff.ru/frontend-libraries/npm/react-kit-font/typography/ios.css"/>
            <link rel="stylesheet" type="text/css"
                  href="https://www.cdn-tinkoff.ru/frontend-libraries/npm/react-kit-font/typography/android.css"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}
