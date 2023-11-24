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

export const UseGetAllStateBooks = async ({ user,setBooksReading, setBooksToRead, setReadBooks }) => { 
  await useGetBooksReading({ user, setBooksReading })
  await useGetBooksToRead({ user, setBooksToRead })
  await useGetReadBooks({ user, setReadBooks })
}