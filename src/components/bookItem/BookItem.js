import Image from 'next/image'
import React from 'react'

export default function BookItem ({ book }) {
  const { volumeInfo, id } = book || {}
  const { title, authors, publishedDate, averageRating, imageLinks } = volumeInfo || {}
  return (
    <>
      {
        book &&
        <div key={id} className='flex sm:w-40 h-72 w-32  p-4 rounded-xl bg-white  overflow-hidden transition-all hover:scale-105 hover:bg-blue-gray-100'>
          <div className='flex flex-col'>
            <Image
              className='rounded-xl shadow-xl sm:!w-32 sm:!h-44 !w-24 '
              alt='livros'
              unoptimized
              src={imageLinks?.thumbnail || '../../../../png/book-cover-placeholder.png'}
              width={50}
              height={50}
              layout='responsive' />
            <div className='p-1 mt-2' >
              <h3 className='text-gray-900 text-xs text-left font-semibold mb-1'>{title}</h3>
              <p className='text-xs font-light'>{authors && authors[0]}, {publishedDate?.slice(0, 4)}</p>
              <span className='text-xs'> {averageRating ? Math.floor(averageRating).toFixed(1) : '-'} / <span className='text-gray-400'>5</span> </span>
            </div>
          </div>
        </div>
      }
    </>
  )
}
