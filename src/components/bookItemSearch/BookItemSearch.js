'use client'
import Image from 'next/image'
import React from 'react'
import Availability from '../availability/Availability'
import Statusbar from '../statusbar/Statusbar'
import FavoriteButton from '../favoriteButton/FavoriteButton'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/context/AuthContext'

export default function BookItemSearch ({ book }) {
  const router = useRouter()
  const { booksInShelf, booksReading, booksToRead, readBooks } = useAuthContext()
  const { id, volumeInfo, saleInfo } = book
  return (
    <div key={id} className='flex w-auto flex-shrink-0 h-32 mr-11 p-4 rounded-xl bg-white overflow-hidden ml-11 mb-6'>
      <div className='flex'>
        <div className='p-1 mt-2 flex gap-10 items-center' >
          <div
            className='flex cursor-pointer items-center'
            onClick={() => router.push(`/preview/?id=${book.id}`)}
          >
            <Image
              className='rounded-xl shadow-xl !w-20 !h-24 flex items-center'
              alt='Book Image'
              unoptimized
              src={volumeInfo?.imageLinks?.thumbnail || '../../../../png/book-cover-placeholder.png'}
              width={75}
              height={99}
              layout='responsive' />
            <div
              className='ml-10 flex flex-col w-48 align-bottom cursor-pointer'
            >
              <h3 className='text-gray-800 text-xl text-left font-normal mb-1 mr-64 truncate w-52'>{volumeInfo.title}</h3>
              <p className='text-base font-light'>{volumeInfo?.authors && volumeInfo?.authors[0]}, {volumeInfo.publishedDate?.slice(0, 4)}</p>
            </div>
          </div>
          <span className='text-base w-28 mr-3 text-center '> {volumeInfo.averageRating ? Math.floor(volumeInfo.averageRating).toFixed(1) : '-'}/<span className='text-gray-400'>5</span> </span>
          <div className='flex flex-col w-56 '>
            {
              volumeInfo.categories?.map((category) => {
                return (
                  <p className='text-gray-800 text-xl text-left font-normal mb-1' key={id}>{ category}</p>
                )
              })
            }
          </div>
          <div className='w-52 flex justify-start '>
            <Availability saleInfo={saleInfo} />
          </div>
          <div className='w-28'>
            <Statusbar bookId={id} booksInShelf={booksInShelf} booksReading={booksReading} booksToRead={booksToRead} readBooks={readBooks} />
          </div>
          <div className='w-11'>
            <FavoriteButton bookId={id} />
          </div>
          <button
            className='border-solid border-2 border-orange-500 text-orange-500 rounded-md px-2 py-1'
            onClick={() => router.push(`/preview/?id=${book.id}`)}
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  )
}
