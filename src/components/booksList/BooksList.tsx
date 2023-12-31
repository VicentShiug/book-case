import React from 'react'
import BookItem from '../bookItem/BookItem'
import { useRouter } from 'next/navigation'

export default function BooksList({ books, className }) {
  const router = useRouter()
  return (
    <>
      {books?.length > 0 &&
        <div className='flex w-full py-10' >
          <div className={'flex w-full flex-wrap sm:gap-5 sm:m-10 gap-4 mx-3 shrink' + className}>
            {
              books?.map(book => {
                return (
                  <div
                    key={book.id}
                    className='flex cursor-pointer items-center sm:mx-0 mx-auto'
                    onClick={() => router.push(`/preview/?id=${book.id}`)}
                  >
                    <BookItem book={book} key={book.id} />
                  </div>
                )
              })
            }
          </div>
        </div>
      }
    </>
  )
}
