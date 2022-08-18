import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='se'>
        <Head>
          <meta
            name='description'
            content='Vi får er att synas online! Vi hjälper er med webbutveckling, att ranka högt på Google (SEO), digital marknadsföring & grafisk design.'
          ></meta>
          <meta charSet='UTF-8'></meta>

          {/* FAVOICON */}
          <link rel='shortcut icon' href='/assets/icons/favicon.svg' />

          {/* FONTS */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;700;800&display=swap'
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
    );
  }
}

export default MyDocument;
