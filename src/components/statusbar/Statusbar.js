import React from 'react'
export default function Statusbar ({ bookId, booksInShelf, booksReading, booksToRead, readBooks  }) {

  const status = booksReading?.find((book) => book.id === bookId)
    ? 'Lendo' : booksToRead?.find((book) => book.id === bookId)
      ? 'À ler' : readBooks?.find((book) => book.id === bookId)
        ? 'Lido' : null

  const onShelf = booksInShelf?.find((book) => book.id === bookId)
    ? 'Na estante' : 'Não salvo'

  return (
    <div className='flex flex-col gap-2'>
      <span className='w-20 h-7 rounded-md bg-orange-500 flex justify-center items-center center text-white'>
        <p className='text-sm font-normal'>
          {onShelf}
        </p>
      </span>

      {status &&
        <span className='w-20 h-7 rounded-md bg-amber-600 flex justify-center items-center center text-white'>
          <p className='text-sm font-normal'>
            {status}
          </p>
        </span>}
    </div>
  )
}
