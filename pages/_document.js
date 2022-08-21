import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='se'>
        <Head>
          <meta
            name='description'
            key='desc'
            content='Vi får er att synas online! Vi hjälper er med webbutveckling, att ranka högt på Google (SEO), digital marknadsföring & grafisk design.'
          ></meta>
          <meta charSet='UTF-8'></meta>

          <meta
            name='facebook-domain-verification'
            content='r6bcgtp4wisd8sdu07db1sob071svz'
          />

          <link
            rel='canonical'
            href='https://creativevaluemarketing.com/'
            key='canonical'
          />

          {/* OPEN GRAPH */}
          <meta property='og:site_name' content='Creative Value Marketing' />
          <meta property='og:locale' content='se_SE' />
          <meta
            property='og:title'
            content='Creative Value Marketing - Webbbyrå & digital marknadsföring'
          />
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content='https://creativevaluemarketing.com/'
          />
          <meta
            property='og:image'
            content='assets/images/creative-value-marketing-logo-full.webp'
          />
          <meta
            property='og:description'
            content='Vi får er att synas online! Vi hjälper er med webbutveckling, att ranka högt på Google (SEO), digital marknadsföring & grafisk design.'
          />
          <meta
            name='facebook-domain-verification'
            content='r6bcgtp4wisd8sdu07db1sob071svz'
          />

          {/* TWITTER */}
          <meta name='twitter:card' content='summary' />
          <meta
            name='twitter:title'
            content='Creative Value Marketing - Webbbyrå & digital marknadsföring'
          />
          <meta
            name='twitter:description'
            content='Vi får er att synas online! Vi hjälper er med webbutveckling, att ranka högt på Google (SEO), digital marknadsföring & grafisk design.'
          />
          <meta
            name='twitter:image'
            content='assets/images/creative-value-marketing-logo-full.webp'
          />

          {/* FAVOICON */}
          <link rel='shortcut icon' href='assets/images/favicon.svg' />

          {/* FONTS */}
          {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin /> */}
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'
            rel='stylesheet'
            as='font'
          />
        </Head>
        <body className='antialiased selection:bg-sky-900/20'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
