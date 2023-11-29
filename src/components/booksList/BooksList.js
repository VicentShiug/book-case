import React from 'react'
import BookItem from '../bookItem/BookItem'

export default function BooksList ({ books, className }) {
  return (
    <>
      <div className='flex' >
        <div className={'flex flex-row gap-10 ml-10 ' + className}>
          {
            books?.map(book => {
              return (
                <BookItem book={book} key={book.id} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}
