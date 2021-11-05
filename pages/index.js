import Head from 'next/head'
import Hero from './../components/Hero'
import Timeline from './../components/Timeline'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Template business website</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='pt-24' id='home'>
        <Hero />
      </section>
      <section className='pt-16' id='about'>
        <Timeline />
      </section>
    </div>
  )
}
