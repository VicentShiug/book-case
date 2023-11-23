import React from 'react'
import GoogleLogo from '../../../public/svg/GoogleLogo'

export default function LoginGoogleButton ({ onClick }) {
  return (
    <div className='flex flex-col max-w-md space-y-5'>
      <button onClick={onClick}
        className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
        <span className="mr-2">
          <GoogleLogo />
        </span>
        <span>Sign in with Google</span>
      </button>
    </div>
  )
}
