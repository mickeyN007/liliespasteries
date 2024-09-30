import * as React from 'react'
import cn from 'classnames'
import { BaseContainer } from '../BaseContainer'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../../constants/links'
//import { useAuth0 } from '@auth0/auth0-react'
import { Loader } from '../Loader'
//import ThemeToggle from './ThemeToggle'
import Login from './Login'
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline'

import learnToday from '../../../assets/learnToday.svg'
import logo from '../../../assets/logo.png'


import { 
  UserCircleIcon,
  ShoppingCartIcon,
  MagnifyingGlassCircleIcon
} from '@heroicons/react/24/outline'; // Import the SearchIcon from your icon library

type LayoutProps = {
  children: React.ReactNode
  className?: string
  topText?: string;
}

const Layout = ({ children, className, topText }: LayoutProps) => {
  const [showSidebar, setShowSidebar] = React.useState(false)
  const { pathname } = useLocation()
  const leftTopNavLinks = navLinks.slice(0,3)

  const navTextStyle = 'transition-colors text-lg duration-200 ease-in-out'

  //const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0()
  const isLoading = false
  const isAuthenticated = true
  //const topText = ''
  return (
    <main
      className={cn(
        'w-full h-full fixed top-0 left-0 flex flex-col',
        className,
      )}
    >
      <Login />

      {/* Sidebar */}
      <div
        className={cn(
          'p-6 text-white backdrop-blur fixed top-0 bottom-0 right-0 w-[100vw] lg:hidden z-[999] transition duration-200 ease-in-out',
          { 'translate-x-full': !showSidebar },
        )}
      >
        <div className='flex justify-end mb-8'>
          <button type='button' onClick={() => setShowSidebar(false)}>
            <XCircleIcon className='w-6 text-black' />
          </button>
        </div>

        <div className='text-white/60 grid gap-7 text-center text-lg'>
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setShowSidebar(false)}
              className={cn('transition-colors duration-200 ease-in-out', {
                'text-white': pathname === path || (path.length > 1 && pathname.includes(path)),
              })}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className='z-0 w-full min-w-[1440px] h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='relative w-full h-full'>
          <div className='w-[324px] h-[410px] absolute top-[-58px] left-[-23px] blur-[250px]' />
          <div className='w-[333px] h-[374px] absolute top-[197px] left-[1106px] blur-[250px]' />

          <div className='absolute top-[186px] md:top-[289px] w-full h-full transition duration-200' />
        </div>
      </div>

      <div className='relative z-10'>
        {/* Navbar */}
        {
          topText &&
          <div
            className={cn(`
              ${topText ? '' : ''}
              w-full bg-primary text-white text-center py-1
            `)}
          >
            <p>{topText}</p>
          </div>
        }
        
        <BaseContainer className='relative md:px-[3%] flex items-center justify-between'>
          <button type='button' className='lg:hidden' onClick={() => setShowSidebar(true)}>
            <Bars3Icon className='w-[7vw] max-w-[25px] text-black' />
          </button>

          <div className='hidden text-white/60 lg:flex items-center gap-12'>
            {leftTopNavLinks.map(({ label, path }) => {
              return (
                <Link
                  key={path}
                  to={path}
                  className={cn(`
                    ${navTextStyle}
                    ${pathname === path || (path.length > 1 && pathname.includes(path)) ? 'text-activeLink' : 'text-black'}
                  `)}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <div className='flex items-center gap-[6px]'>
            <Link to='/'><img alt='logo' src={logo} className='object-cover h-[50px] md:h-[165px]' /></Link>
          </div>

          <div className='hidden text-white/60 lg:flex items-center gap-12'>
            <Link
              key={'ABOUT US'}
              to={'/about-us'}
              className={cn(`
                ${navTextStyle}
                ${pathname === '/about-us' || (pathname.includes('/about-us')) ? 'text-activeLink' : 'text-black'}
              `)}
            >
              ABOUT US
            </Link>

            <Link to='/'><img alt='logo' src={learnToday} className='object-cover h-[50px] md:h-[43px]' /></Link>
            <div className='hidden text-white/60 lg:flex items-center gap-3'>
              <UserCircleIcon className="h-6 w-6 text-black" />
              <MagnifyingGlassCircleIcon className="h-6 w-6 text-black" />
              <ShoppingCartIcon className="h-6 w-6 text-black" />
              
            </div>
            

          </div>
          
        </BaseContainer>
      </div>

      <BaseContainer className='relative z-10 overflow-auto noScrollbar noScrollbar'>
        {children}
      </BaseContainer>

      {/* LOGIN SCREEN */}
    </main>
  )
}

export default Layout


/*

<div className='hidden lg:flex gap-3 items-center h-[88px]'>
            <Link
              key={'/donation'}
              to={'/donation'}
              className='flex items-center text-2xl text-white p-5 py-2 bg-[#034B64] h-full mr-10'
              //onClick={() => (!isLoading ? (isAuthenticated ? logout() : loginWithRedirect()) : {})}
            >
              Donate
            </Link>
          </div>
          */