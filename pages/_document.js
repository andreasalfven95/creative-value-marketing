import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            /* content='A website for all of those who are planning their big day. Here you can find venues, locations, services etc.' */
            content='Låt oss hjälpa er att synas bättre online! Vi hjälper er med digital marknadsföring, SEO, skapande av hemsidor och mycket, mycket mera.'
          ></meta>
          {/*  <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          ></meta> */}
          <meta charSet='UTF-8'></meta>

          {/* FAVOICON */}
          <link rel='shortcut icon' href='/assets/icons/favicon.svg' />

          {/* FONTS */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap'
            rel='stylesheet'
          />
          {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat:wght@400;600;700&display=swap'
            rel='stylesheet'
          /> */}
        </Head>
        <body className='antialiased'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
