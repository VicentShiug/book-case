'use client';

import BackgroundArea from '@/components/backgroundArea/BackgroundArea';
import Profile from '@/components/profile/Profile';
import SearchBar from '@/components/searchBar/SearchBar';
import Sidebar from '@/components/sidebar/Sidebar';
import { useAuthContext } from '@/context/AuthContext';
import { BackArrowIcon } from '@/icons/Icons';
import Link from 'next/link';
import React from 'react'

export default function Preview ({ searchParams }) {
  const { searchedBook, setSearchedBook } = useAuthContext()

  const book = searchedBook?.find((book) => book.id === searchParams.id)
  const { id } = searchParams
  const { } = book
  console.log(book)
  return (
    <BackgroundArea>
      <Profile />
      <Sidebar />
      {/* <SearchBar /> */}
      <div className='w-full h-full pt-40 pl-11'>
        <Link href='/search' className='flex gap-2 items-center text-gray-700'> {<BackArrowIcon />}Voltar para resultados</Link>

      </div>
    </BackgroundArea>
  )
}
