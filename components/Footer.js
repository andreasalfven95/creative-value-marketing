import { MailIcon } from '@heroicons/react/solid'
import ExportedImage from 'next-image-export-optimizer'

const Footer = () => {
  return (
    <footer className='relative bg-gray-200  pt-16 pb-6'>
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
        <div className='flex flex-col gap-4 items-center justify-center text-center max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold'>Ta kontakt med oss!</h2>
          <p className='text-lg text-gray-700'>
            Vill ni veta mer så finns Creative Value Marketing på följande
            plattformar, och vi svarar normalt inom 1-2 arbetsdagar. Följ oss
            även gärna på sociala medier för nyheter och kampanjer.
          </p>
          <div className='flex gap-4'>
            <button
              aria-label='Facebook link'
              className='bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none p-3'
              type='button'
            >
              <a
                href='https://www.facebook.com/creativevaluemarketing'
                target='_blank'
                rel='nofollow noopener noreferrer'
                aria-label='Link to Creative Value Marketing Facebook'
              >
                <img
                  loading='lazy'
                  className='h-4 w-4'
                  src='assets/images/iconmonstr-facebook-1.svg'
                  alt='Facebook logotyp'
                />
              </a>
            </button>
            <button
              aria-label='Instagram link'
              className='bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none p-3'
              type='button'
            >
              <a
                href='https://www.instagram.com/creativevaluemarketing/'
                target='_blank'
                rel='nofollow noopener noreferrer'
                aria-label='Link to Creative Value Marketing Instagram'
              >
                <img
                  loading='lazy'
                  className='h-4 w-4'
                  src='assets/images/iconmonstr-instagram-11.svg'
                  alt='Instagram logotyp'
                />
              </a>
            </button>
            <button
              aria-label='Email link'
              className='bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none p-3'
              type='button'
            >
              <a
                href='mailto:hello@creativevaluemarketing.com'
                target='_blank'
                rel='noreferrer'
                aria-label='Link to Creative Value Marketing email'
              >
                <MailIcon loading='lazy' alt='Email bild' className='h-4 w-4' />
              </a>
            </button>
            <button
              aria-label='Messanger link'
              className='bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none p-3'
              type='button'
            >
              <a
                href='https://m.me/creativevaluemarketing'
                target='_blank'
                rel='nofollow noopener noreferrer'
                aria-label='Link to Creative Value Marketing Messenger'
              >
                <img
                  loading='lazy'
                  className='h-4 w-4'
                  src='assets/images/iconmonstr-facebook-messenger-1.svg'
                  alt='Messenger logotyp'
                />
              </a>
            </button>
          </div>
        </div>
        <hr className='my-6 border-gray-400' />
        <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full mx-auto text-center'>
            <div className='text-sm text-gray-600 font-bold'>
              Copyright © {new Date().getFullYear()} | Creative Value Marketing
              by{' '}
              <a
                href='https://www.linkedin.com/in/andreas-alfven'
                target='_blank'
                rel='nofollow noreferrer'
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
