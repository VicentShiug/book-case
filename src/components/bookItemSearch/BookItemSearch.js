import Image from 'next/image'
import React from 'react'
import Availability from '../availability/Availability'
import Statusbar from '../statusbar/Statusbar'
import FavoriteButton from '../favoriteButton/FavoriteButton'

export default function BookItemSearch ({ book }) {
  return (
    // <div key={book?.id} className='flex w-40 p-4 rounded-xl bg-white h-72 overflow-hidden'>
    <div  key={book.id} className='flex w-full h-32  p-4 rounded-xl bg-white overflow-hidden ml-11 mb-6'>
      <div className='flex'>
        <Image
          className='rounded-xl shadow-xl !w-20 !h-24'
          alt='livros'
          unoptimized
          src={book.volumeInfo?.imageLinks?.thumbnail}
          // src='https://books.google.com/books/content?id=-_MMbijUmTEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
          width={75}
          height={99}
          layout='responsive' />
        <div className='p-1 mt-2 flex gap-10 justify-center items-center' >
          <div className='ml-10 w-52 '>
            {/* <h3 className='text-gray-900 text-xs text-left font-semibold mb-1'>{book.volumeInfo.title}</h3> */}
            <h3 className='text-gray-800 text-xl text-left font-normal mb-1 mr-64 truncate w-52'>{book.volumeInfo.title}</h3>
            {/* <p className='text-xs font-light'>{book.volumeInfo?.authors[0]}, {book.volumeInfo.publishedDate?.slice(0, 4)}</p> */}
            <p className='text-base font-light'>{book?.volumeInfo?.authors && book?.volumeInfo?.authors[0]}, {book.volumeInfo.publishedDate?.slice(0, 4)}</p>
          </div>
          {/* <span className='text-xs'> {book.volumeInfo.averageRating ? Math.floor(book.volumeInfo.averageRating).toFixed(1)  : '-'} / <span className='text-gray-400'>5</span> </span> */}
          <span className='text-xs mr-20 '> {book?.volumeInfo.averageRating ? Math.floor(book.volumeInfo.averageRating).toFixed(1)  : '-'}/<span className='text-gray-400'>5</span> </span>
          <div className='flex flex-col w-56'>
            <p className='text-gray-800 text-xl text-left font-normal mb-1'>Ficção</p>
            <p className='text-base font-light'>Tristeza profunda</p>
          </div>
          <div className='w-52'>
            <Availability />
          </div>
          <div className='w-28'>
            <Statusbar />
          </div>
          <div className='w-11'>
            <FavoriteButton />
          </div>
            <button className='border-solid border-2 border-orange-500 text-orange-500 rounded-md px-2 py-1'>
              Preview
            </button>
        </div>
      </div>
    </div>
  )
}
