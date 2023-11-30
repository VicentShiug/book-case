export const useGetReadBooks = async({ user, setReadBooks }) => { 
  const urlVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/4/volumes`;

  const response = await fetch(urlVolume, {
    headers: {
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
  const data = await response.json()
  setReadBooks(data.items)
}

export const useGetBooksToRead = async({ user, setBooksToRead }) => { 
  const urlVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/2/volumes`;

  const response = await fetch(urlVolume, {
    headers: {
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
  const data = await response.json()
  setBooksToRead(data.items)
}

export const useGetBooksReading = async ({ user, setBooksReading }) => { 
  const urlVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/3/volumes`;
  const response = await fetch(urlVolume, {
    headers: {
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
  const data = await response.json()
  setBooksReading(data.items)
}

export const useGetFavorites = async ({ user, setFavoriteBooks }) => { 
  const urlVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes`;
  const response = await fetch(urlVolume, {
    headers: {
      'Authorization': `Bearer ${user.accessToken}`
    }
  })
  const data = await response.json()
  setFavoriteBooks(data.items)
}

export const onGetABook = async ({ id }) => { 
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const urlVolume = `https://www.googleapis.com/books/v1/volumes/${id}`;

  const response = await fetch(cors + urlVolume);
  const data = await response.json();
  return data
}

export const UseGetAllStateBooks = async ({ user, setBooksReading, setBooksToRead, setReadBooks, setFavoriteBooks }) => { 
  await useGetBooksReading({ user, setBooksReading })
  await useGetBooksToRead({ user, setBooksToRead })
  await useGetReadBooks({ user, setReadBooks })
  await useGetFavorites({ user, setFavoriteBooks })
}