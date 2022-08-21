import CTAButton from './CTAButton'
import ExportedImage from 'next-image-export-optimizer'

const Hero = ({ id }) => {
  return (
    <section id={id} className='md:pt-0'>
      <div className='contain relative flex content-center items-center justify-center min-h-screen'>
        <div className='absolute top-0 w-full h-full -z-10'>
          <ExportedImage
            layout='fill'
            objectFit='cover'
            priority
            src='assets/images/kontor-creative-value-marketing.webp'
            alt='Teamet på webbyrån Creative Value Marketing jobbar med digital marknadsföring.'
            className='object-center md:object-left'
          />
          <span
            id='blackOverlay'
            className='w-full h-full absolute opacity-80 bg-black'
          ></span>
        </div>
        <div className='mx-auto flex flex-col gap-4 md:max-w-2xl text-white'>
          <h1 className='text-xs order-last font-bold text-gray-200'>
            Creative Value Marketing,&nbsp;
            <span className='block text-base'>
              Webbyrå Uppsala, Stockholm & Västerås
            </span>
          </h1>
          <h2 className='font-bold text-4xl sm:text-6xl after:content-["Okomplicerat."] after:text-gray-500 after:block after:text-2xl sm:after:text-4xl sm:after:mt-2'>
            Webbutveckling, <br /> digital marknadsföring <br /> & grafisk
            design.
          </h2>
          <p className='text-base md:text-lg text-gray-300'>
            Webbyrån Crative Value Marketing hjälper er att synas online. Genom
            modern webbutveckling och smart, mätbar, digital marknadsföring
            genererar vi fler kunder till er. Låt oss ta ert företag till nästa
            nivå.
          </p>
          <CTAButton
            textColor={'text-white'}
            bgColor={'bg-sky-800/80'}
            borderColor={'border-white'}
          />
          <img
            loading='lazy'
            aria-hidden
            src='assets/images/scroll.svg'
            alt='Scroll ikon'
            className='h-16 w-16 absolute animate-bounce-slow bottom-8 left-0 right-0 mx-auto'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
