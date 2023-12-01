import { onGetABook } from "./useGetBooks";

export const onFavoriteBook = async ({ user, bookId, setFavoriteBooks, favoriteBooks }) => {
const urlAddVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/addVolume?volumeId=${bookId}`;
  const cors = 'https://cors-anywhere.herokuapp.com/';

  // adiciona o livro aos favoritos na api do google
  await fetch(cors + urlAddVolume, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.accessToken}`,
    }
  });

  // pega o livro adicionado aos favoritos e adiciona no array de favoritos
  const data = await onGetABook({ id: bookId });
  setFavoriteBooks([...favoriteBooks || [], data]);
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
  const newFavoriteBooks = favoriteBooks?.filter((book) => book.id !== data.id);
  setFavoriteBooks(newFavoriteBooks);
}

export const onAddBookToRead = async ({ user, bookId, setBooksToRead, booksToRead }) => {
  const urlAddVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/2/addVolume?volumeId=${bookId}`;
  // const cors = 'https://cors-anywhere.herokuapp.com/';

  // adiciona o livro aos favoritos na api do google
  await fetch(urlAddVolume, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.accessToken}`,
    }
  });

  // pega o livro adicionado aos favoritos e adiciona no array de favoritos

  const data = await onGetABook({ id: bookId });
  setBooksToRead([...booksToRead || [], data]);
}

export const onRemoveBookToRead = async ({ user, bookId, setBooksToRead, booksToRead }) => {
  const urlRemoveVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/2/removeVolume?volumeId=${bookId}`;
  // remove o livro dos favoritos na api do google
  await fetch(urlRemoveVolume, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.accessToken}`,
    }
  });

  // pega o livro removido dos favoritos e remove do array de favoritos

  const data = await onGetABook({ id: bookId });
  const newBooksToRead = booksToRead?.filter((book) => book.id !== data.id);
  setBooksToRead(newBooksToRead);
}

export const onAddBookReading = async ({ user, bookId, setBooksReading, booksReading }) => { 
  const urlAddVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/3/addVolume?volumeId=${bookId}`;
  // adiciona o livro aos favoritos na api do google
  await fetch(urlAddVolume, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.accessToken}`,
    }
  });

  // pega o livro adicionado aos favoritos e adiciona no array de favoritos

  const data = await onGetABook({ id: bookId });
  setBooksReading([...booksReading || [], data]);
}

export const onRemoveBookReading = async ({ user, bookId, setBooksReading, booksReading }) => {
  const urlRemoveVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/3/removeVolume?volumeId=${bookId}`;
  // remove o livro dos favoritos na api do google
  await fetch(urlRemoveVolume, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.accessToken}`,
    }
  });

  // pega o livro removido dos favoritos e remove do array de favoritos

  const data = await onGetABook({ id: bookId });
  const newBooksReading = booksReading?.filter((book) => book.id !== data.id);
  setBooksReading(newBooksReading);
}

export const onAddBookRead = async ({ user, bookId, setReadBooks, readBooks }) => {
  const urlAddVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/4/addVolume?volumeId=${bookId}`;
  // adiciona o livro aos favoritos na api do google
  await fetch(urlAddVolume, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.accessToken}`,
    }
  });

  // pega o livro adicionado aos favoritos e adiciona no array de favoritos

  const data = await onGetABook({ id: bookId });
  setReadBooks([...readBooks || [], data]);
}

export const onRemoveBookRead = async ({ user, bookId, setReadBooks, readBooks }) => {
  const urlRemoveVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/4/removeVolume?volumeId=${bookId}`;
  // remove o livro dos favoritos na api do google
  await fetch(urlRemoveVolume, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.accessToken}`,
    }
  });

  // pega o livro removido dos favoritos e remove do array de favoritos

  const data = await onGetABook({ id: bookId });
  const newReadBooks = readBooks?.filter((book) => book.id !== data.id);
  setReadBooks(newReadBooks);
}