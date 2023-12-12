'use client';
import { AuthContext, useAuthContext } from '@/context/AuthContext';
import { ArrowDown, SearchIcon, SearchInBarIcon } from '@/icons/Icons';
import React, { useState } from 'react'

// Importações...

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const { setSearchedBook, setIsLoading } = useAuthContext();
  const [selectedOption, setSelectedOption] = useState('Todos'); // Estado para armazenar a opção selecionada
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleClickDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleSearch = async () => {
    setIsLoading(true)
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    const data = await response.json();
    setSearchedBook(data.items);
    setIsLoading(false)
  };

  const handleSearchInBar = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeDropdown = (option) => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

  return (
    <>
      <div className='flex w-full'>
        <div className='flex sm:h-12 h-10 rounded-full border-2 sm:ml-12 sm:mt-8 mt-24 mx-3  bg-white'>
          <div
            className='cursor-pointer relative flex pr-2 items-center gap-3 bg-gray-100 rounded-s-full'
            onClick={handleClickDropdown}>
            <h1 className='text-base text-gray-800 ml-4'>{selectedOption}</h1>
            <span className='cursor-pointer'>{<ArrowDown />}</span>
          </div>
          <div className='relative'>
            <ul
              id='dropdown'
              className={`p-4 absolute top-14 -left-24 bg-white rounded-xl shadow-md text-gray-700 ${
                isDropdownVisible ? 'visible' : 'invisible'
              }`}>
              {['Todos', 'Título', 'Autor', 'Texto', 'Assuntos'].map((option) => (
                <li
                  key={option}
                  onClick={() => handleChangeDropdown(option)}
                  className={`block px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer ${
                    selectedOption === option ? 'bg-gray-100' : ''
                  }`}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex divide-x-2'>
            <input
              onKeyDown={(e) => (e.code == 'Enter' || e.code == 'NumpadEnter') && handleSearch()}
              onChange={(e) => handleSearchInBar(e)}
              className='w-full ml-2 h-full outline-none'
              placeholder='Search'
            />
            <button className='pr-4 pl-3' onClick={() => handleSearch()}>
              {<SearchInBarIcon />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

