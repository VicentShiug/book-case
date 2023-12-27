import { useAuthContext } from "@/context/AuthContext";
import { addBook, getUserData, removeBookDB } from "@/functions/DBFunctions";
import { onGetABook } from "@/hooks/useGetBooks";
import { onAddBookRead, onAddBookReading, onAddBookToRead, onRemoveBookRead, onRemoveBookReading, onRemoveBookToRead } from "@/hooks/useSaveBook";
import { useQueryClient } from "react-query";

export const usePreview = () => {
  const { book, setBook, user,
    setBooksToRead, booksToRead,
    setBooksReading, booksReading,
    setReadBooks, readBooks,
    isLoading, setIsLoading, setBooksInShelf
  } = useAuthContext()

  const clientQuery = useQueryClient()

  const getBook = async ({ id, setBook }: IGetBook): Promise<Object> => {
    const data = await onGetABook({ id });
    setBook(data);
    return data;
  }

  const preview = () => {
    console.log('preview');
  }

  const status = ({ booksToRead, booksReading, readBooks, id }) => {
    return (booksToRead?.find((book: IBook) => book.id === id)
      ? 'toRead' : booksReading?.find((book: IBook) => book.id === id)
        ? 'reading' : readBooks?.find((book: IBook) => book.id === id)
          ? 'read' : '#')
  }

  const getImage = (imageLinks: IImageLinks): String => {
    return imageLinks?.extraLarge
      || imageLinks?.large
      || imageLinks?.medium
      || imageLinks?.small
      || imageLinks?.thumbnail
      || imageLinks?.smallThumbnail
      || '/png/book-cover-placeholder.png'
  }

  const removeBook = async ({ from, id }: IRemoveBook) => {
    if (from == 'toRead') {
      await onRemoveBookReading({ user, bookId: id, setBooksReading, booksReading })
      await onRemoveBookRead({ user, bookId: id, setReadBooks, readBooks })
      return
    }
    if (from == 'reading') {
      await onRemoveBookRead({ user, bookId: id, setReadBooks, readBooks })
      await onRemoveBookToRead({ user, bookId: id, setBooksToRead, booksToRead })
      return
    }
    if (from == 'read') {
      await onRemoveBookReading({ user, bookId: id, setBooksReading, booksReading })
      await onRemoveBookToRead({ user, bookId: id, setBooksToRead, booksToRead })
      return
    }
    if (!from) {
      await onRemoveBookReading({ user, bookId: id, setBooksReading, booksReading })
      await onRemoveBookToRead({ user, bookId: id, setBooksToRead, booksToRead })
      await onRemoveBookRead({ user, bookId: id, setReadBooks, readBooks })
      return
    }
  }

  const handleChangeStateBook = async ({ e, id, setIsLoadingRequest, bookData }) => {
    setIsLoadingRequest(true)
    const from = e.target.value
    try {
      // if (from === 'toRead') {
      //   await removeBook({ from, id })
      //   return await onAddBookToRead({ user, bookId: id, setBooksToRead, booksToRead })
      // }
      // if (from === 'reading') {
      //   await removeBook({ from, id })
      //   return await onAddBookReading({ user, bookId: id, setBooksReading, booksReading })
      // }
      // if (from === 'read') {
      //   await removeBook({ from, id })
      //   return await onAddBookRead({ user, bookId: id, setReadBooks, readBooks })
      // }
      if (from === '#') {
        return await removeBookDB({ collectionName: user.id, book: [bookData] })
      }
      bookData.status = e.target.value
      const booksInDB = await getUserData(user.id)
      const isOnDatabase = booksInDB.books.find((book: IBook) => book.id === bookData.id)
      if (isOnDatabase) {
        await removeBookDB({ collectionName: user.id, book: [bookData] })
      }
      addBook({ collectionName: user.id, book: [bookData] })
    } catch (error) {
      console.log(error)
    } finally {
      clientQuery.invalidateQueries('books')
      setIsLoadingRequest(false)
    }
  }

  return { preview, getBook, status, getImage, handleChangeStateBook }
}