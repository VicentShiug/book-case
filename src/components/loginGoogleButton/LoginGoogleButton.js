import React from 'react'
import GoogleLogo from '../../../public/svg/GoogleLogo'
import { Tooltip } from '@material-tailwind/react'

export default function LoginGoogleButton ({ onClick, accept }) {
  return (
    <div className='flex flex-col max-w-md space-y-5'>
      <Tooltip content={!accept ? 'Necessário permitir o uso de cookies' : 'Fazer login'}>
        <button onClick={onClick}
          disabled={!accept}
          className={`flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative ${!accept && 'border-gray-500 text-gray-500'}`}>
          <span className="mr-2">
            <GoogleLogo />
          </span>
          <span>Fazer login usando o Google</span>
        </button>
      </Tooltip>
    </div>
  )
}
