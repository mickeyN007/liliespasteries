//import { useAuth0 } from '@auth0/auth0-react'
import * as React from 'react'

const Login = () => {
  //const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()

  if (false)
  //if (!isLoading && !isAuthenticated)
    return (
      <div className='p-8 fixed z-[9999] top-0 left-0 right-0 bottom-0 bg-[#070A22E5]/90 text-white backdrop-blur flex justify-center items-center md:items-start md:pt-[151px]'>
        <div className='flex flex-col items-center'>
          <img alt='logo' src='/icon.svg' className='object-contain h-[16px] md:h-[25px]' />
          <p className='text-lg font-semibold py-3'>BreadOrDough</p>

          <div className='pt-8 sm:pt-14 flex items-center gap-5'>
            <img alt='hand icon' src='/hand.svg' className='object-contain h-[30px] md:h-[42px]' />
            <p className='text-3xl sm:text-[42px] font-bold'>Hello there!</p>
          </div>

          <p className='max-w-[418px] text-xl sm:text-[22px] text-[#8F97AE] text-center pt-6'>
            Log in to your account to have access to the application
          </p>

          <button
            type='button'
            className='bg-[#4234E8] mt-10 text-lg sm:text-xl rounded-xl px-8 py-4 hover:opacity-80'
            //onClick={loginWithRedirect}
          >
            Login
          </button>
        </div>
      </div>
    )

  return null
}

export default Login
