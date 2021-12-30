const Services = ({ id, bgcolor }) => {
  return (
    <section id={id} className={`py-20 ${bgcolor}`}>
      <div className='contain mx-auto'>
        <div className='flex flex-wrap'>
          <div className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400'>
                  <i className='fas fa-award'></i>
                </div>
                <h6 className='text-xl font-semibold'>Webbutveckling</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.
                </p>
              </div>
            </div>
          </div>

          <div className='w-full md:w-4/12 px-4 text-center'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                  <i className='fas fa-retweet'></i>
                </div>
                <h6 className='text-xl font-semibold'>
                  Digital marknadsföring
                </h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Kärnan Social Media Marketing Keep you user engaged by
                  providing meaningful information. Remember that by this time,
                  the user is curious.
                </p>
              </div>
            </div>
          </div>

          <div className='pt-6 w-full md:w-4/12 px-4 text-center'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400'>
                  <i className='fas fa-fingerprint'></i>
                </div>
                <h6 className='text-xl font-semibold'>Varumärke</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </p>
                {/* Ett spretigt varumärke skapar förvirring hos kunden och sänker det allmänna intrycket av företaget, produkten eller tjänsten. Det går därför inte att underskatta vikten av att skapa en konsekvent ram som varumärket ska agera inom. Med en varumärkesplattform (brand profile) slår ni fast vad just ni står för och gör länken mellan den affärsidé och designprofil tydlig för alla anställda.

                En varumärkesplattform är ett styrdokument som redogör för organisationens vision, affärsidé, mission, kärnvärden, tonalitet, varumärkeslöfte, varumärkesidentitet och positionering på marknaden.

                När webbyrån Wasabi Web gör varumärkesplattformar har vi av naturliga skäl en tonvikt på de designinslag som kommer prägla kundens webb. Vilken känsla ska webbplatsen skapa hos användaren? Vilket bildmanéer ska ni utgå ifrån? När får en accentfärg förekomma? Hur ska logotypen användas? Vilka typsnitt ska genomsyra all kommunikation? Hur ska varumärket se ut på trycksaker? Varje estetiskt element har en viktig roll i helhetsintrycket. */}
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap items-center mt-10'>
          <div className='w-full md:w-5/12 mr-auto ml-auto'>
            <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100'>
              <i className='fas fa-user-friends text-xl'></i>
            </div>
            <h3 className='text-3xl mb-2 font-semibold leading-normal'>
              Working with us is a pleasure
            </h3>
            <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, maiores amet!
            </p>
            <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ad
              magni facilis, aspernatur porro dicta praesentium sit cumque,
              dolores iste, itaque veritatis incidunt tempora consequatur culpa.
              Qui, cupiditate odio. Iste.
            </p>
          </div>

          <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
            <div className='relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600'>
              <img
                alt='...'
                src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'
                className='w-full align-middle rounded-t-lg'
              />
              <blockquote className='relative p-8 mb-4'>
                <svg
                  preserveAspectRatio='none'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 583 95'
                  className='absolute left-0 w-full block'
                  style={{
                    height: '95px',
                    top: '-94px',
                  }}
                >
                  <polygon
                    points='-30,95 583,95 583,65'
                    className='text-pink-600 fill-current'
                  ></polygon>
                </svg>
                <h4 className='text-xl font-bold text-white'>
                  Top Notch Services
                </h4>
                <p className='text-md font-light mt-2 text-white'>
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
