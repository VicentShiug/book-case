'use client'
import BackgroundArea from '@/components/backgroundArea/BackgroundArea'
import BookItemSearch from '@/components/bookItemSearch/BookItemSearch'
import Profile from '@/components/profile/Profile'
import SearchBar from '@/components/searchBar/SearchBar'
import Sidebar from '@/components/sidebar/Sidebar'
import SkeletonBookItemSearch from '@/components/skeletonBookItemSearch'
import TopBar from '@/components/topBar/Topbar'
import { useAuthContext } from '@/context/AuthContext'
import React from 'react'

export default function Search () {
  const { searchedBook, isLoading } = useAuthContext()

  return (
    <BackgroundArea>
      <TopBar sidebar profile={window.innerWidth < 640} />
      <div className='flex flex-col w-full overflow-x-hidden relative'>
        {window.innerWidth > 640 && <Profile />}
        <SearchBar />
        {searchedBook?.length > 0 || isLoading
          ? <div className='flex px-11 sm:pt-40 pt-0  sm:visible invisible'>
            <h1 className='text-gray-600 font-medium text-xl xl:mr-80 md:mr-10'>Título</h1>
            <h1 className='text-gray-600 font-medium text-xl xl:mr-16 md:mr-10'>Avaliação</h1>
            <h1 className='text-gray-600 font-medium text-xl xl:mr-44 md:mr-10'>Categoria</h1>
            <h1 className='text-gray-600 font-medium text-xl xl:mr-[102px] md:mr-10'>Disponibilidade</h1>
            <h1 className='text-gray-600 font-medium text-xl'>Status</h1>
          </div>
          : <div className='flex mx-auto pt-40 mb-6'>
            <h1 className='text-gray-600 font-medium text-xl sm:m-auto '>Comece a pesquisar !</h1>
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
    </BackgroundArea>
  )
}
