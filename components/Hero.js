const Hero = ({ id }) => {
  return (
    <section id={id}>
      <div
        className='contain relative flex content-center items-center justify-center cursor-default'
        style={{
          minHeight: '95vh',
        }}
      >
        <div
          className='absolute top-0 w-full h-full bg-center bg-cover'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          }}
        >
          <span
            id='blackOverlay'
            className='w-full h-full absolute opacity-80 bg-black'
          ></span>
        </div>
        <div className='relative mx-auto'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full md:w-6/12 ml-auto mr-auto text-center'>
              <div /* className='pr-12' */>
                <h1 className='text-white font-semibold text-5xl'>
                  Vi hjälper er att växa.
                </h1>
                <p className='mt-4 text-lg text-gray-300'>
                  Låt oss ta ert företag till nästa nivå. Genom smart
                  marknadsföring och modern teknik genererar vi fler kunder. Vi
                  designar för att ni ska synas!
                </p>
              </div>
            </div>
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
  )
}

export default Hero
