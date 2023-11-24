'use client';
import { ArrowDown } from '@/icons/Icons';
import React, { useState } from 'react'

export default function SearchBar () {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleClickDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <>
      <div className='flex w-96 h-12 rounded-full border-2 ml-12 mt-8 bg-white'>
        <div className='cursor-pointer relative flex w-2/5 items-center gap-3 bg-gray-100 rounded-s-full' onClick={handleClickDropdown}>
          <h1 className='text-lg text-gray-800 ml-4'>Todos</h1>
          <span className='cursor-pointer'>{<ArrowDown />}</span>
        </div>
        <div className='relative'>
          <ul id='dropdown' className={`p-4 absolute top-14 -left-24 bg-white rounded-xl shadow-md text-gray-700 ${isDropdownVisible ? 'visible' : 'invisible'}`}>
            <li className='block px-4 py-2 rounded-md hover:bg-gray-100 '>Todos</li>
            <li className='block px-4 py-2 rounded-md hover:bg-gray-100 '>Título</li>
            <li className='block px-4 py-2 rounded-md hover:bg-gray-100 '>Autor</li>
            <li className='block px-4 py-2 rounded-md hover:bg-gray-100 '>Texto</li>
            <li className='block px-4 py-2 rounded-md hover:bg-gray-100 '>Assuntos</li>
          </ul>
        </div>
        <input className='w-full ml-1 h-full rounded-e-full outline-none px-4' placeholder='Search' />
      </div>
    </>
  )
}
