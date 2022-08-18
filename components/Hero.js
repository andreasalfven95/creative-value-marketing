const Hero = ({ id }) => {
  return (
    <section id={id} className='pt-16 md:pt-0'>
      <div className='contain relative flex content-center items-center justify-center py-32 sm:py-48 md:min-h-screen'>
        <div
          className='absolute top-0 w-full h-full bg-center md:bg-left bg-cover'
          style={{
            backgroundImage:
              "url('/assets/images/kontor-creative-value-marketing.webp')",
          }}
        >
          <span
            id='blackOverlay'
            className='w-full h-full absolute opacity-80 bg-black'
          ></span>
        </div>
        <div className='relative mx-auto'>
          <div className='flex flex-col w-full md:max-w-2xl mx-auto text-white'>
            <h1 className='text-xs mt-4 order-3 font-bold text-gray-200'>
              Creative Value Marketing,&nbsp;
              <span className='block text-base'>
                Webbyrå Uppsala, Stockholm & Västerås
              </span>
            </h1>
            <h2 className='font-bold text-4xl sm:text-6xl after:content-["Okomplicerat."] after:text-gray-500 after:block after:text-2xl sm:after:text-4xl sm:after:mt-2'>
              Webbutveckling, <br /> digital marknadsföring <br /> & grafisk
              design.
            </h2>
            <p className='mt-4 text-base md:text-lg text-gray-300'>
              Webbyrån Crative Value Marketing hjälper er att synas online.
              Genom modern webbutveckling och smart, mätbar, digital
              marknadsföring genererar vi fler kunder till er. Låt oss ta ert
              företag till nästa nivå.
            </p>
          </div>
        </div>
        {/* <div
          className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
          style={{ height: '70px' }}
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
              className='text-gray-200 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
