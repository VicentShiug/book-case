'use client';

import { useAuthContext } from '@/context/AuthContext'
import { useLogout } from '@/hooks/useAuth'
import { ArrowDown } from '@/icons/Icons'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Profile () {
  const { user, setUser, setToken } = useAuthContext()
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleClickDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className='absolute sm:top-8 sm:right-3 top-4 right-2 z-10'>
      <div>
        <aside className='flex items-center sm:gap-5 gap-2 border-solid bg-white sm:w-52 w-32 sm:h-14 rounded-full p-1 border-2 sm:mr-10'>
          <Image className='rounded-full w-10 h-10 sm:w-12 sm:h-12'
            src={user?.avatar || '../../jpg/avatar-placeholder.jpg'}
            width={45}
            height={45}
            alt='profileImage'
            unoptimized
          />
          <h1 className='sm:text-lg text-sm text-gray-800'>{user?.name.split(" ")[0]}</h1>
          <span className='cursor-pointer ml-auto' onClick={handleClickDropdown}>{<ArrowDown />}</span>
          <div className='relative'>
            <ul id='dropdown' className={`absolute right-0 w-32 sm:w-48 mt-10 p-4 bg-white rounded-xl shadow-md text-gray-700 ${isDropdownVisible ? 'visible' : 'invisible'}`}>
              <li className='block sm:px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Perfil</li>
              <li className='block sm:px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Configurações</li>
              <li onClick={useLogout()} className='cursor-pointer block sm:px-4 py-2 rounded-md hover:bg-gray-100 '>Sair</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
