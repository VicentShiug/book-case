import React from 'react'

export default function Statusbar ({ bookId, booksInShelf }) {


  return (
    <span className='w-20 h-7 rounded-md bg-green-500 flex justify-center items-center center text-white'>
      <p className='text-sm font-normal'>
        {booksInShelf?.find((book) => book.id === bookId) && 'Lido'} + aa
      </p>
    </span>
  )
}
