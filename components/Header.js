import { MenuIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';

const Header = () => {
  const menuItems = [
    { name: 'Hem', href: '#' },
    { name: 'Tjänster', href: '#tjanster' },
    { name: 'Om oss', href: '#om-oss' },
    { name: 'Kontakt', href: '#kontakt' },
    /* { name: 'Featured', href: '#featured' }, */
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarState, setNavbarState] = useState('translate-x-full');
  const [scrolledNav, setScrolledNav] = useState(
    'h-16 md:h-28 bg-white md:bg-transparent'
  );
  const [scrolledTxt, setScrolledTxt] = useState('');
  const [scrolledImg, setScrolledImg] = useState('md:h-24');

  /* HANDLE SCROLL */
  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolledNav('h-16 md:h-16 bg-white');
      setScrolledTxt('md:text-black');
      setScrolledImg('md:h-16 md:invert-0');
    } else {
      setScrolledNav('h-16 md:h-28 bg-white md:bg-transparent');
      setScrolledTxt('md:text-white');
      setScrolledImg('md:h-24');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  /* SHOW/HIDE SIDEBAR */
  useEffect(() => {
    if (navbarOpen) {
      setNavbarState('translate-x-0');
      document.body.classList.add('overflow-hidden');
    } else {
      setNavbarState('translate-x-full');
      document.body.classList.remove('overflow-hidden');
    }
  }, [navbarOpen]);

  return (
    <header
      className={` ${scrolledNav} fixed contain z-50 top-0 w-full flex justify-between items-center transition-all duration-200 drop-shadow-lg translate gap-8`}
    >
      <div className=''>
        {/* BIG LOGO */}
        <a
          href='#'
          id='logo'
          aria-label='Link Creative Value Marketing to main page'
        >
          <img
            src={'/assets/images/creative-value-marketing-logo-full.svg'}
            alt='Creative Value Marketing logotyp'
            className={`${scrolledImg} w-full hidden md:block invert transition-all duration-200`}
          />
        </a>
        {/* SMALL LOGO */}
        <a
          href='#'
          id='small-logo'
          aria-label='Link to Creative Value Marketing main page'
        >
          <img
            src={'/assets/images/creative-value-marketing-logo-full.svg'}
            alt='Creative Value Marketing logotyp'
            className={`h-16 ${scrolledImg} w-full md:hidden transition-all duration-200`}
          />
        </a>
      </div>
      <nav role='navigation' aria-label='Main menu' className='shrink-0'>
        <div className='flex items-center'>
          <button aria-label='Menu button'>
            <MenuIcon
              aria-hidden='true'
              focusable='false'
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='h-8 w-8 text-black md:hidden'
            />
          </button>
        </div>
        <div
          className={`fixed bg-white md:bg-transparent left-1/3 md:left-0 right-0 min-h-screen mt-4 md:mt-0 transform ${navbarState} transition duration-500 md:translate-x-0 md:relative md:min-h-0 overflow-x-hidden`}
        >
          <ul className='text-xl md:text-lg mt-12 md:mt-0 text-right md:text-left gap-8 p-4 md:p-0 flex flex-col md:flex-row md:items-center'>
            {menuItems.map((menuitem, i) => (
              <li
                key={i}
                className='z-10 transform transition-all duration-500 md:text-white border-b pb-2 md:border-none md:pb-0 hover:opacity-30'
              >
                <a
                  onClick={() => setNavbarOpen((navbarOpen = false))}
                  href={menuitem.href}
                  className={scrolledTxt}
                >
                  {menuitem.name}
                </a>
              </li>
            ))}
            <li className='z-10 md:text-white border-b pb-2 md:border-none md:pb-0 flex gap-4 justify-end'>
              <button
                className='bg-white transform transition-all duration-500 border border-black font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none p-2 hover:opacity-50'
                type='button'
              >
                <a
                  className='flex items-center justify-center'
                  href='https://www.facebook.com/creativevaluemarketing'
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                >
                  <img
                    className='h-4 w-4'
                    src='/assets/icons/iconmonstr-facebook-1.svg'
                    alt='facebook'
                  />
                </a>
              </button>
              <button
                className='bg-white transform transition-all duration-500 border border-black font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none p-2 hover:opacity-50'
                type='button'
              >
                <a
                  className='flex items-center justify-center'
                  href='https://www.instagram.com/creativevaluemarketing/'
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                >
                  <img
                    className='h-4 w-4'
                    src='/assets/icons/iconmonstr-instagram-11.svg'
                    alt='instagram'
                  />
                </a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

/* import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <img
                    className='block lg:hidden h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                    alt='Workflow'
                  />
                  <img
                    className='hidden lg:block h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                    alt='Workflow'
                  />
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button
                  type='button'
                  className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
} */
