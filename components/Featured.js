const Featured = ({ id, bgcolor }) => {
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
            className='text-white fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div> */}

      <div className='contain mx-auto'>
        <div className='items-center flex flex-wrap'>
          <div className='w-full md:w-4/12 ml-auto mr-auto max-w-md flex justify-center items-center flex-wrap'>
            <img
              alt='...'
              className='max-w-full max-h-[32rem] rounded-lg shadow-lg'
              src='https://images.pexels.com/photos/3782226/pexels-photo-3782226.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
              /* src='https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' */
            />
          </div>
          <div className='w-full md:w-5/12 ml-auto mr-auto pt-6 md:pt-0'>
            <div className='pt-2 md:pt-0 md:pr-12'>
              {/* <div className='text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300'>
                <i className='fas fa-rocket text-xl'></i>
              </div> */}
              <h3 className='text-3xl font-semibold'>
                {/* Ett nytt äventyr. */}Er hjälp på vägen.
              </h3>
              <p className='mt-4 text-lg leading-relaxed text-gray-600'>
                Creative Value Marketing är helt nystartat, men fyllt med
                fantastiska idéer. Det startades för att möta behovet hos flera
                företag, som både vill och behöver synas mer; och det är precis
                vad vi är bäst på!
              </p>
              <ul className='list-none mt-6'>
                <li className='py-2'>
                  <div className='flex items-center'>
                    <div>
                      <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-gray-300 mr-3'>
                        <i className='fas fa-fingerprint'></i>
                      </span>
                    </div>
                    <div>
                      <h4 className='text-gray-600'>
                        Hjälper er att ta nästa steg
                      </h4>
                    </div>
                  </div>
                </li>
                <li className='py-2'>
                  <div className='flex items-center'>
                    <div>
                      <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-gray-300 mr-3'>
                        <i className='fab fa-html5'></i>
                      </span>
                    </div>
                    <div>
                      <h4 className='text-gray-600'>
                        Gör det med fokus på växande
                      </h4>
                    </div>
                  </div>
                </li>
                <li className='py-2'>
                  <div className='flex items-center'>
                    <div>
                      <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-gray-300 mr-3'>
                        <i className='far fa-paper-plane'></i>
                      </span>
                    </div>
                    <div>
                      <h4 className='text-gray-600'>
                        Glada företag, glada kunder
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
