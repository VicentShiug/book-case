'use client'
import { useAuthContext } from '@/context/AuthContext'
import { onFavoriteBook, onRemoveFavoriteBook } from '@/hooks/useSaveBook'
import { MarkedHearthIcon, UnMarkedHearthIcon } from '@/icons/Icons'
import React from 'react'

export default function FavoriteButton ({ bookId }) {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const { user, favoriteBooks, setFavoriteBooks, } = useAuthContext()
  const iconInShelf = favoriteBooks?.find((book) => book.id === bookId) ? <MarkedHearthIcon /> : <UnMarkedHearthIcon />
  const isFavorite = favoriteBooks?.find((book) => book.id === bookId)
  return (
    <div>
      <span className='cursor-pointer' onClick={() => {
        !isFavorite 
          ? onFavoriteBook({ user, bookId, setFavoriteBooks, favoriteBooks })
          : onRemoveFavoriteBook({ user, bookId, setFavoriteBooks, favoriteBooks })
        forceUpdate()
      }}>
        {isFavorite ? <MarkedHearthIcon /> : <UnMarkedHearthIcon />}
      </span>
    </div>
  )
}
