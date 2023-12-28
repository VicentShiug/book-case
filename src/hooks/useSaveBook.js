import { onGetABook } from "./useGetBooks";

export const onFavoriteBook = async ({ dataBook, setFavoriteBooks, favoriteBooks }) => {
  setFavoriteBooks([...favoriteBooks || [], dataBook]);
}

export const onRemoveFavoriteBook = async ({ dataBook, setFavoriteBooks, favoriteBooks }) => {
  const newFavoriteBooks = favoriteBooks?.filter((book) => book.id !== dataBook.id);
  setFavoriteBooks(newFavoriteBooks);
}

export const onAddBookToRead = async ({ dataBook, setBooksToRead, booksToRead }) => {
  setBooksToRead([...booksToRead || [], dataBook]);
}

export const onRemoveBookToRead = async ({ dataBook, setBooksToRead, booksToRead }) => {
  const newBooksToRead = booksToRead?.filter((book) => book.id !== dataBook.id);
  setBooksToRead(newBooksToRead);
}

export const onAddBookReading = async ({ dataBook, setBooksReading, booksReading }) => { 
  setBooksReading([...booksReading || [], dataBook]);
}

export const onRemoveBookReading = async ({ dataBook, setBooksReading, booksReading }) => {
  const newBooksReading = booksReading?.filter((book) => book.id !== dataBook.id);
  setBooksReading(newBooksReading);
}

export const onAddBookRead = async ({ dataBook, setReadBooks, readBooks }) => {
  setReadBooks([...readBooks || [], dataBook]);
}

export const onRemoveBookRead = async ({ dataBook, setReadBooks, readBooks }) => {
  const newReadBooks = readBooks?.filter((book) => book.id !== dataBook.id);
  setReadBooks(newReadBooks);
}