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
    <div className='absolute top-8 right-3'>
      <div>
        <aside className='flex items-center gap-5 border-solid bg-white w-52 h-14 rounded-full p-1 border-2 mr-10'>
          <Image className='rounded-full'
            src={user?.avatar} width={45} height={45} alt='profileImage' unoptimized />
          <h1 className='text-lg text-gray-800'>{user?.name.split(" ")[0]}</h1>
          <span className='cursor-pointer ml-auto' onClick={handleClickDropdown}>{<ArrowDown />}</span>
          <div className='relative'>
            <ul id='dropdown' className={`absolute right-0 mt-10 p-4 bg-white rounded-xl shadow-md text-gray-700 ${isDropdownVisible ? 'visible' : 'invisible'}`}>
              <li className='block px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Perfil</li>
              <li className='block px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Configurações</li>
              <li onClick={useLogout({ setUser, setToken })} className='cursor-pointer block px-4 py-2 rounded-md hover:bg-gray-100 '>Sair</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
