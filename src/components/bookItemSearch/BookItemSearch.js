import Image from 'next/image'
import React from 'react'
import Availability from '../availability/Availability'
import Statusbar from '../statusbar/Statusbar'
import FavoriteButton from '../favoriteButton/FavoriteButton'
import { useRouter } from 'next/navigation'

export default function BookItemSearch ({ book }) {
  const router = useRouter()
  const { id, volumeInfo, saleInfo } = book
  return (
    <div key={id} className='flex w-auto flex-shrink-0 sm:h-32 h-28  sm:p-4 p-1 rounded-xl bg-white overflow-hidden sm:mx-11 mx-3 sm:mb-6 mb-3'>
      <div className='flex '>
        <div className='p-1 sm:mt-2 flex gap-10 items-center' >
          <div
            className='flex cursor-pointer items-center'
            onClick={() => router.push(`/preview/?id=${id}`)}
          >
            <Image
              className='rounded-xl shadow-xl sm:!w-20 sm:!h-24 !w-16 flex items-center'
              alt='Book Image'
              unoptimized
              src={volumeInfo?.imageLinks?.thumbnail || '../../../../png/book-cover-placeholder.png'}
              width={75}
              height={99}
              layout='responsive' />
            <div
              className='sm:ml-10 ml-5 flex flex-col w-48 align-bottom cursor-pointer'
            >
              <h3 className='text-gray-800 sm:text-xl text-left font-normal mb-1 mr-64 truncate w-52'>{volumeInfo.title}</h3>
              <p className='sm:text-base text-sm font-light'>{volumeInfo?.authors && volumeInfo?.authors[0]}, {volumeInfo.publishedDate?.slice(0, 4)}</p>
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
            <Statusbar bookId={id} />
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
