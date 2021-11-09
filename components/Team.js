const Team = ({ id, bgcolor }) => {
  return (
    <section id={id} className={`py-20 ${bgcolor}`}>
      <div className='contain mx-auto'>
        <div className='flex flex-wrap justify-center text-center mb-24'>
          <div className='w-full lg:w-6/12'>
            <h2 className='text-4xl font-semibold'>Here are our heroes</h2>
            <p className='text-lg leading-relaxed m-4 text-gray-600'>
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
            <div className='px-6'>
              <img
                alt='...'
                src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
                className='shadow-lg rounded-full h-32 w-32 object-cover mx-auto'
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold'>Ryan Tompson</h5>
                <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                  Web Developer
                </p>
                <div className='mt-6'>
                  <button
                    className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-twitter'></i>
                  </button>
                  <button
                    className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-facebook-f'></i>
                  </button>
                  <button
                    className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-dribbble'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
            <div className='px-6'>
              <img
                alt='...'
                src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
                className='shadow-lg rounded-full h-32 w-32 object-cover mx-auto'
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold'>Romina Hadid</h5>
                <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                  Marketing Specialist
                </p>
                <div className='mt-6'>
                  <button
                    className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-google'></i>
                  </button>
                  <button
                    className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-facebook-f'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
            <div className='px-6'>
              <img
                alt='...'
                src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
                className='shadow-lg rounded-full h-32 w-32 object-cover mx-auto'
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold'>Alexa Smith</h5>
                <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                  UI/UX Designer
                </p>
                <div className='mt-6'>
                  <button
                    className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-google'></i>
                  </button>
                  <button
                    className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-twitter'></i>
                  </button>
                  <button
                    className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-instagram'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
            <div className='px-6'>
              <img
                alt='...'
                src='https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100'
                className='shadow-lg rounded-full h-32 w-32 object-cover mx-auto'
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold'>Jenna Kardi</h5>
                <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                  Founder and CEO
                </p>
                <div className='mt-6'>
                  <button
                    className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-dribbble'></i>
                  </button>
                  <button
                    className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-google'></i>
                  </button>
                  <button
                    className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-twitter'></i>
                  </button>
                  <button
                    className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-instagram'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
