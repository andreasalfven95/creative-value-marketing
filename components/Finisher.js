import {
  AdjustmentsIcon,
  EmojiHappyIcon,
  LightBulbIcon,
  UsersIcon,
} from '@heroicons/react/solid'

import CTAButton from './CTAButton'

const Finisher = ({ id, bgcolor }) => {
  return (
    <section id={id} className={`py-16 ${bgcolor}`}>
      <div className='contain mx-auto justify-center items-center flex flex-col gap-16'>
        <div className='w-full max-w-3xl flex flex-col gap-4 text-center justify-center items-center'>
          <h2 className='text-4xl font-bold text-white'>
            Varför ska ni välja Creative Value Marketing?
          </h2>
          <p className='text-lg leading-relaxed text-gray-400'>
            När ni väljer oss till att skapa er nya hemsida, eller ta hand om er
            digitala marknadsföring, kommer vi göra vårt absolut yttersta för
            att alla ska känna att de får någonting ut av samarbetet; både ni
            och era kunder. Under projektens gång kommer vi ha nära kontakt och
            noggrann uppföljning för att få era tankar kring projekten eller
            kampanjerna.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-8'>
          <div className='w-full lg:w-3/12 text-center items-center flex flex-col gap-2'>
            <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
              <UsersIcon loading='lazy' />
            </div>
            <h3 className='text-xl font-bold text-white'>Personlig service</h3>
            <p className='text-gray-400'>
              Genom nära kontakt med er, och med stort fokus på de mål ni vill
              uppnå, skapar vi bra investeringar och nöjda kunder för er. Känner
              ni att samarbetet fungerar så hittar vi gärna fler sätt att få er
              att växa.
            </p>
          </div>
          <div className='w-full lg:w-3/12 text-center items-center flex flex-col gap-2'>
            <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
              <LightBulbIcon loading='lazy' />
            </div>
            <h3 className='text-xl font-bold text-white'>Kreativa idéer</h3>
            <p className='text-gray-400'>
              &quot;Creative Value&quot; är något vi står för, och vi vill
              därför skapa värde genom kreativitet och dedikerat arbete. Med
              detta, moderna metoder och nya tekniker, uppnår vi en hög
              standard.
            </p>
          </div>
          <div className='w-full lg:w-3/12 text-center items-center flex flex-col gap-2'>
            <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
              <AdjustmentsIcon loading='lazy' />
            </div>
            <h3 className='text-xl font-bold text-white'>
              Individuell anpassning
            </h3>
            <p className='text-gray-400'>
              För att få ut mest möjligt av webbutveckling och digital
              marknadsföring, arbetar vi noga med att anpassa innehåll till
              målgrupper och varumärke.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Finisher
