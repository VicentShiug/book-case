export const useGetReadBooks = async ({ user, setReadBooks }) => {
  const urlVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/4/volumes`

  const response = await fetch(urlVolume, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`
    }
  })
  const data = await response.json()
  setReadBooks(data.items)
}

export const useGetBooksToRead = async ({ user, setBooksToRead }) => {
  const urlVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/2/volumes`

  const response = await fetch(urlVolume, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`
    }
  })
  const data = await response.json()
  setBooksToRead(data.items)
}

export const useGetBooksReading = async ({ user, setBooksReading }) => {
  const urlVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/3/volumes`
  const response = await fetch(urlVolume, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`
    }
  })
  const data = await response.json()
  setBooksReading(data.items)
}

export const useGetFavorites = async ({ user, setFavoriteBooks }) => {
  const urlVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes`
  const response = await fetch(urlVolume, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`
    }
  })
  const data = await response.json()
  setFavoriteBooks(data.items)
}

export const onGetABook = async ({id }) => {
  const urlVolume = `https://www.googleapis.com/books/v1/volumes/${id}`

  const response = await fetch(urlVolume)
  const data = await response.json()
  return data
}

export const onGetAllBooks = async ({
  user,
  setBooks,
  setReadBooks,
  setBooksReading,
  setBooksToRead
}) => {
  const urlVolume1 = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/2/volumes?maxResults=40` // to read
  const urlVolume2 = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/3/volumes?maxResults=40` // reading
  const urlVolume3 = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/4/volumes?maxResults=40` // read

  const response1 = await fetch(urlVolume1, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`
    }
  })

  const response2 = await fetch(urlVolume2, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`
    }
  })

  const response3 = await fetch(urlVolume3, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`
    }
  })

  const data1 = await response1.json()
  const data2 = await response2.json()
  const data3 = await response3.json()
  let books = []

  setBooksToRead(data1.items)
  setBooksReading(data2.items)
  setReadBooks(data3.items)

  books.push(...(data1.items || []))
  books.push(...(data2.items || []))
  books.push(...(data3.items || []))
  console.log(books)
  // books = books.map((book) => {
  //   return book = {
  //     id: book.id,
  //     title: book.volumeInfo.title,
  //     authors: book.volumeInfo.authors,
  //     description: book.volumeInfo.description,
  //     imageLinks: book.volumeInfo.imageLinks,
  //     publishedDate: book.volumeInfo.publishedDate,
  //     averageRating: book.volumeInfo.averageRating
  //   }
  // })
  console.log(books)
  setBooks(books)
}

export const UseGetAllStateBooks = async ({
  user,
  setBooksReading,
  setBooksToRead,
  setReadBooks,
  // setFavoriteBooks,
  setBooksInShelf
}) => {
  // await useGetBooksReading({ user, setBooksReading })
  // await useGetBooksToRead({ user, setBooksToRead })
  // await useGetReadBooks({ user, setReadBooks })
  // await useGetFavorites({ user, setFavoriteBooks })
  await onGetAllBooks({
    user,
    setBooks: setBooksInShelf,
    setReadBooks,
    setBooksReading,
    setBooksToRead
  })
}
