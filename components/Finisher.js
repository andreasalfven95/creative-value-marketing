import {
  AdjustmentsIcon,
  EmojiHappyIcon,
  LightBulbIcon,
  UsersIcon,
} from '@heroicons/react/solid'

const Finisher = ({ id, bgcolor }) => {
  return (
    <section id={id} className={`relative py-20 ${bgcolor}`}>
      {/* <div
        className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
        style={{ height: '80px' }}
      >
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            className='text-gray-900 fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div> */}

      <div className='contain mx-auto'>
        <div className='flex flex-wrap text-center justify-center'>
          <div className='w-full lg:w-6/12'>
            <h2 className='text-4xl font-semibold text-white'>
              Varför Creative Value Marketing?
            </h2>
            <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-500'>
              När ni väljer oss kommer vi göra vårt absolut yttersta för att
              alla ska känna att de får någonting ut av samarbetet; ni, kunderna
              och även vi. Under projektens gång kommer vi noga följa upp för
              att få era tankar kring hur det går.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap mt-12 justify-center'>
          <div className='w-full lg:w-3/12 px-4 text-center'>
            <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
              <UsersIcon />
            </div>
            <h6 className='text-xl mt-5 font-semibold text-white'>
              Personlig service
            </h6>
            <p className='mt-2 mb-4 text-gray-500'>
              Vi skapar nöjda kunder genom en nära kontakt med er, och fokus på
              vad ni vill uppnå.
              {/* Genom nära kontakt med er och fokus på vad ni vill uppnå, skapar
              vi bra investeringar och nöjda kunder */}
            </p>
          </div>
          <div className='w-full lg:w-3/12 px-4 text-center'>
            <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
              <LightBulbIcon />
            </div>
            <h5 className='text-xl mt-5 font-semibold text-white'>
              Kreativa idéer
            </h5>
            <p className='mt-2 mb-4 text-gray-500'>
              "Creative Value" är något vi står för, och vill därför skapa värde
              genom kreativa lösningar.
            </p>
          </div>
          <div className='w-full lg:w-3/12 px-4 text-center'>
            <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
              <AdjustmentsIcon />
            </div>
            <h5 className='text-xl mt-5 font-semibold text-white'>
              Individuell anpassning
            </h5>
            <p className='mt-2 mb-4 text-gray-500'>
              För att få ut mest möjliga av digitala medier arbetar vi noga med
              att anpassa innehåll.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Finisher
