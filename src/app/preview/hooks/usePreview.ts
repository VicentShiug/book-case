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

  const getBook = async ({ id, setBook }: IGetBook): Promise<IBook> => {
    const data = await onGetABook({ id });
    setBook(data);
    return data;
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

  const removeBook = async ({ dataBook, from }: IRemoveBook) => {
    if (from == 'toRead') {
      await onRemoveBookReading({ dataBook, setBooksReading, booksReading })
      await onRemoveBookRead({ dataBook, setReadBooks, readBooks })
      return
    }
    if (from == 'reading') {
      await onRemoveBookRead({ dataBook, setReadBooks, readBooks })
      await onRemoveBookToRead({ dataBook, setBooksToRead, booksToRead })
      return
    }
    if (from == 'read') {
      await onRemoveBookReading({ dataBook, setBooksReading, booksReading })
      await onRemoveBookToRead({ dataBook, setBooksToRead, booksToRead })
      return
    }
    if (!from || from == '#') {
      await onRemoveBookReading({ dataBook, setBooksReading, booksReading })
      await onRemoveBookToRead({ dataBook, setBooksToRead, booksToRead })
      await onRemoveBookRead({ dataBook, setReadBooks, readBooks })
      return
    }
  }

  const checkIsOnDatabase = async (bookData: IBook) => {
    const booksInDB = await getUserData(user.id)
    const isOnDatabase = booksInDB.books.find((book: IBook) => book.id === bookData.id)
    return isOnDatabase
  }

  const addBookDB = async (bookData: IBook, from) => {
    bookData.status = from
    if (checkIsOnDatabase(bookData)) {
      await removeBookDB({ collectionName: user.id, book: [bookData] })
    }
    addBook({ collectionName: user.id, book: [bookData] })
  }

  const handleChangeStateBook = async ({ e, id, setIsLoadingRequest, bookData }) => {
    setIsLoadingRequest(true)
    const from = e.target.value
    const dataBook = await getBook({ id, setBook })
    try {
      if (from === 'toRead') {
        await removeBook({ from, id, dataBook })
        await addBookDB(bookData, from)
        return await onAddBookToRead({ dataBook, setBooksToRead, booksToRead })
      }
      if (from === 'reading') {
        await removeBook({ from, id, dataBook })
        await addBookDB(bookData, from)
        return await onAddBookReading({ dataBook, setBooksReading, booksReading })
      }
      if (from === 'read') {
        await removeBook({ from, id, dataBook })
        await addBookDB(bookData, from)
        return await onAddBookRead({ dataBook, setReadBooks, readBooks })
      }
      if (from === '#') {
        await removeBookDB({ collectionName: user.id, book: [bookData] })
        return await removeBook({ from, id, dataBook })
      }
    } catch (error) {
      console.log(error)
    } finally {
      clientQuery.invalidateQueries('books')
      setIsLoadingRequest(false)
    }
  }

  return { getBook, status, getImage, handleChangeStateBook }
}