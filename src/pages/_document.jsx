import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.png" type='image/png' sizes='256x256' />
        <title>Petshop</title>
        <meta name='author' content='Jhonatan Vinicius' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
