import Image from 'next/image'
import React from 'react'

export default function BookItem ({book}) {
  return (
    <div key={book.id} className='flex w-40 p-4 rounded-xl bg-white h-72 overflow-hidden'>
      <div className='flex flex-col'>
        <Image
          className='rounded-xl shadow-xl !w-32 !h-44'
          alt='livros'
          unoptimized
          src={book.volumeInfo.imageLinks.thumbnail}
          width={50}
          height={50}
          layout='responsive' />
        <div className='p-1 mt-2' >
          <h3 className='text-gray-900 text-xs text-left font-semibold mb-1'>{book.volumeInfo.title}</h3>
          <p className='text-xs font-light'>{book.volumeInfo?.authors[0]}, {book.volumeInfo.publishedDate?.slice(0, 4)}</p>
          <span className='text-xs'> {book.volumeInfo.averageRating ? Math.floor(book.volumeInfo.averageRating).toFixed(1)  : '-'} / <span className='text-gray-400'>5</span> </span>
        </div>
      </div>
    </div>
  )
}
