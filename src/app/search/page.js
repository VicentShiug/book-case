'use client'
import BackgroundArea from '@/components/backgroundArea/BackgroundArea'
import BookItemSearch from '@/components/bookItemSearch/BookItemSearch'
import Profile from '@/components/profile/Profile'
import SearchBar from '@/components/searchBar/SearchBar'
import Sidebar from '@/components/sidebar/Sidebar'
import SkeletonBookItemSearch from '@/components/skeletonBookItemSearch'
import { useAuthContext } from '@/context/AuthContext'
import React from 'react'

export default function Search () {
  const { searchedBook, isLoading } = useAuthContext()

  return (
    <BackgroundArea>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <SearchBar />
        {searchedBook?.length > 0 || isLoading
          ? <div className='flex pl-11 pt-40 mb-6'>
            <h1 className='text-gray-600 font-medium text-xl xl:mr-80 md:mr-10'>Título</h1>
            <h1 className='text-gray-600 font-medium text-xl xl:mr-16 md:mr-10'>Avaliação</h1>
            <h1 className='text-gray-600 font-medium text-xl xl:mr-44 md:mr-10'>Categoria</h1>
            <h1 className='text-gray-600 font-medium text-xl xl:mr-[102px] md:mr-10'>Disponibilidade</h1>
            <h1 className='text-gray-600 font-medium text-xl'>Status</h1>
          </div>
          : <div className='flex pl-11 pt-40 mb-6'>
            <h1 className='text-gray-600 font-medium text-xl m-auto'>Comece a pesquisar !</h1>
            </div>
        }
        {
          isLoading && <SkeletonBookItemSearch count={5} />
        }
        {
          !isLoading && searchedBook?.map((book) => {
            return (
              <div key={book.id}>
                <BookItemSearch key={book?.id} book={book} />
              </div>
            )
          }
          )
        }
        
      </div>
      <Profile />
    </BackgroundArea>
  )
}
