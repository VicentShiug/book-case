'use client';
import { AuthContext, useAuthContext } from '@/context/AuthContext';
import { ArrowDown, SearchIcon, SearchInBarIcon } from '@/icons/Icons';
import React, { useState } from 'react'

export default function SearchBar () {
  const [search, setSearch] = useState('')
  const { setSearchedBook } = useAuthContext()
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleClickDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleSearch = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
    const data = await response.json();
    setSearchedBook(data.items);
  }

  const handleSearchInBar = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className='flex w-full'>
        <div className=' flex h-12 rounded-full border-2 ml-12 mt-8 bg-white'>
          <div className='cursor-pointer relative flex pr-2 items-center gap-3 bg-gray-100 rounded-s-full' onClick={handleClickDropdown}>
            <h1 className='text-base text-gray-800 ml-4'>Todos</h1>
            <span className='cursor-pointer'>{<ArrowDown />}</span>
          </div>
          <div className='relative'>
            <ul id='dropdown' className={`p-4 absolute top-14 -left-24 bg-white rounded-xl shadow-md text-gray-700 ${isDropdownVisible ? 'visible' : 'invisible'}`}>
              <li className='block px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Todos</li>
              <li className='block px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Título</li>
              <li className='block px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Autor</li>
              <li className='block px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Texto</li>
              <li className='block px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer'>Assuntos</li>
            </ul>
          </div>
          <div className='flex divide-x-2'>
            <input onKeyDown={(e) => (e.code == 'Enter' || e.code == 'NumpadEnter') && handleSearch() } onChange={(e) => { handleSearchInBar(e) }} className='w-full ml-2 h-full outline-none' placeholder='Search' />
            <button  className='pr-4 pl-3' onClick={() => handleSearch()}>{<SearchInBarIcon />}</button>
          </div>
        </div>
      </div>
    </>
  )
}
