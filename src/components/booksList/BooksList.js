import React from 'react'
import BookItem from '../bookItem/BookItem'
import { useRouter } from 'next/navigation'

export default function BooksList ({ books, className }) {
  const router = useRouter()
  const ref = React.useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      {
        books?.length > 0 &&
        <div ref={ref} className='flex overflow-auto overscroll-auto scroll-smooth relative scrollbar-thin scrollbar-thumb-blue-gray-50' >
          <div className={'flex flex-row gap-10 ml-10 mr-10 ' + className}>
            {
              books?.map(book => {
                return (
                  <div
                    key={book.id}
                    className='flex cursor-pointer items-center'
                    onClick={() => router.push(`/preview/?id=${book.id}`)}
                  >
                    <BookItem book={book} key={book.id} />
                  </div>
                )
              })
            }
          </div>
          {/* <div className='overflow-auto'>
            <button onClick={() => scroll(500)} className='absolute right-0'>
              setinha para a direita
            </button>
            <button onClick={() => scroll(-500)} className=' absolute left-0'>
              setinha para a esquerda
            </button>
          </div> */}
        </div>
      }
    </>
  )
}
