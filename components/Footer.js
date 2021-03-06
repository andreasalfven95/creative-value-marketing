import { MailIcon } from '@heroicons/react/solid'

const Footer = () => {
  return (
    <footer className='relative bg-gray-200 pt-20 pb-6'>
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
            className='text-gray-300 fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div> */}

      <div className='contain mx-auto'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h4 className='text-3xl font-semibold'>Låt oss komma i kontakt!</h4>
          <h5 className='text-lg mt-2 mb-2 text-gray-700'>
            Vill ni veta mer så finns Creative Value Marketing på dessa
            plattformar, och vi brukar svara på all kontakt inom 1-2
            arbetsdagar.
          </h5>
          <div className='md:mt-6'>
            <button
              className='bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3'
              type='button'
            >
              <a
                href='https://www.facebook.com/creativevaluemarketing'
                target='_blank'
              >
                <img
                  src='/assets/icons/iconmonstr-facebook-1.svg'
                  alt='facebook'
                />
              </a>
            </button>
            <button
              className='bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3'
              type='button'
            >
              <a
                href='https://www.instagram.com/creativevaluemarketing/'
                target='_blank'
              >
                <img
                  src='/assets/icons/iconmonstr-instagram-11.svg'
                  alt='instagram'
                />
              </a>
            </button>
            <button
              className='bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3'
              type='button'
            >
              <a
                href='mailto:andreas@creativevaluemarketing.com'
                target='_blank'
              >
                <MailIcon />
              </a>
            </button>
            <button
              className='bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3'
              type='button'
            >
              <a href='http://m.me/creativevaluemarketing' target='_blank'>
                <img
                  src='/assets/icons/iconmonstr-facebook-messenger-1.svg'
                  alt='messenger'
                />
              </a>
            </button>
          </div>
        </div>
        <hr className='my-6 border-gray-400' />
        <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full mx-auto text-center'>
            <div className='text-sm text-gray-600 font-semibold py-1'>
              Copyright © {new Date().getFullYear()} | Creative Value Marketing
              by{' '}
              <a
                href='https://andreasalfven95.github.io/portfolio/'
                target='_blank'
                className='text-gray-600 hover:text-gray-900'
              >
                Andreas Alfvén
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
