'use client';

import Sidebar from "@/components/sidebar/Sidebar";
import { useAuthContext } from "@/context/AuthContext";
import { auth } from "@/service/firebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MainSection from "@/components/mainSection/MainSection";
import { UseGetAllStateBooks } from "@/hooks/useGetBooks";
import BackgroundArea from "@/components/backgroundArea/BackgroundArea";

//  0 = Favorite
//  1 = Purchased
//  2 = To Read
//  3 = Reading Now
//  4 = Have Read
//  5 = Reviewed
//  6 = Recently Viewed
//  7 = My Google eBooks
//  8 = Books for you
//  9 = Browsing history



export default function Home () {
  const router = useRouter()
  const { user, token, setBooksToRead, setBooksReading, setReadBooks, setBooksInShelf, booksReading, booksToRead, readBooks,favoriteBooks, setFavoriteBooks } = useAuthContext()


  useEffect(() => {
    if (!token) {
      router.push('/login')
      return
    }
    UseGetAllStateBooks({ user, setBooksReading, setBooksToRead, setReadBooks, setFavoriteBooks })
    
    setBooksInShelf([...booksReading, ...booksToRead, ...readBooks, ...favoriteBooks])

  }, [])

  const urlVolume = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/3/volumes`;
  const urlAddVoluem = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/4/addVolume`
  const cors = 'https://cors-anywhere.herokuapp.com/'

  const testeapi = async () => {

    const response = await fetch(cors + urlVolume, {
      headers: {
        'Authorization': `Bearer ${user.accessToken}`
      }
    })
    const data = await response.json()
    console.log(data)
  }

  const handleAddBook = async () => {
    const response = await fetch(cors + urlVolume, {
      headers: {
        method: 'POST',
        'Authorization': `Bearer ${user.accessToken}`
      }
    })
    const data = await response.json()
    console.log(data)
  };

  return (
    <BackgroundArea>
      <Sidebar />
      <MainSection />
      <button onClick={() => testeapi()}>Testar api</button>
    </BackgroundArea>

  )
}
