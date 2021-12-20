import Head from 'next/head'
import Hero from './../components/Hero'
import Timeline from './../components/Timeline'
import Finisher from '../components/Finisher'
import Services from './../components/Services'
import Featured from '../components/Featured'
import Team from './../components/Team'

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative Value - Digital Marketing Agency</title>
        <link rel='icon' href='/assets/icons/favicon.svg' />
      </Head>

      <Hero />

      {/* <Timeline id='about' bgcolor='bg-gray-200' /> */}

      <Featured id='about' bgcolor='bg-white' />

      <Services id='services' bgcolor='bg-gray-200' />

      <Finisher id='contact' bgcolor='bg-gray-900' />

      {/* <Team id='contact' bgcolor='bg-white' /> */}
    </>
  )
}
