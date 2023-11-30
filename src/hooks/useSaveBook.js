import { onGetABook } from "./useGetBooks";

export const onFavoriteBook = async ({ user, bookId, setFavoriteBooks, favoriteBooks }) => {
const urlAddVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/addVolume?volumeId=${bookId}`;
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const urlVolume = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

  // adiciona o livro aos favoritos na api do google
  await fetch(cors + urlAddVolume, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.accessToken}`,
    }
  });

  // pega o livro adicionado aos favoritos e adiciona no array de favoritos
  const data = await onGetABook({ id: bookId });
  setFavoriteBooks([...favoriteBooks, data]);
}

export const onRemoveFavoriteBook = async ({ user, bookId, setFavoriteBooks, favoriteBooks }) => {
  const urlRemoveVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/removeVolume?volumeId=${bookId}`;
  const cors = 'https://cors-anywhere.herokuapp.com/';

  // remove o livro dos favoritos na api do google
  await fetch(cors + urlRemoveVolume, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.accessToken}`,
    }
  });

  const data = await onGetABook({ id: bookId });
  const newFavoriteBooks = favoriteBooks.filter((book) => book.id !== data.id);
  setFavoriteBooks(newFavoriteBooks);
}

export const onAddBookToRead = async ({ user, bookId, setBooksToRead, booksToRead }) => {
  const urlAddVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/2/addVolume?volumeId=${bookId}`;
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const urlVolume = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

  // adiciona o livro aos favoritos na api do google
  await fetch(cors + urlAddVolume, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.accessToken}`,
    }
  });

  // pega o livro adicionado aos favoritos e adiciona no array de favoritos

  const data = await onGetABook({ id: bookId });
  setBooksToRead([...booksToRead, data]);
}

export const onRemoveBookToRead = async ({ user, bookId, setBooksToRead, booksToRead }) => {
  const urlRemoveVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/2/removeVolume?volumeId=${bookId}`;
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const urlVolume = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

  // remove o livro dos favoritos na api do google
  await fetch(cors + urlRemoveVolume, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.accessToken}`,
    }
  });

  // pega o livro removido dos favoritos e remove do array de favoritos

  const data = await onGetABook({ id: bookId });
  const newBooksToRead = booksToRead.filter((book) => book.id !== data.id);
  setBooksToRead(newBooksToRead);
}

