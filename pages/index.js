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
        <title>
          Creative Value Marketing - Webbyrå & digital marknadsföring
        </title>
      </Head>

      <Hero />

      {/* <Timeline id='about' bgcolor='bg-gray-200' /> */}

      <Services id='tjanster' bgcolor='bg-gray-200' />

      <Featured id='om-oss' bgcolor='bg-white' />

      <Finisher id='kontakt' bgcolor='bg-gray-900' />

      {/* <Team id='contact' bgcolor='bg-white' /> */}
    </>
  )
}
