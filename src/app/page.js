'use client';
import Sidebar from "@/components/sidebar/Sidebar";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import MainSection from "@/components/mainSection/MainSection";
import { UseGetAllStateBooks, onGetAllBooks } from "@/hooks/useGetBooks";
import BackgroundArea from "@/components/backgroundArea/BackgroundArea";
import { parseCookies } from "nookies";

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
  const { user, token, setBooksToRead, setBooksReading, setReadBooks, setFavoriteBooks, setIsLoading, setBooksInShelf } = useAuthContext()
  const [isClient, setIsClient] = useState(false)
  console.log('atualizou')
  const loadData = async () => {
    const userLoad = user ? user : JSON.parse(parseCookies().user)
    if (token || userLoad) {
      UseGetAllStateBooks({ user: userLoad, setBooksReading, setBooksToRead, setReadBooks, setFavoriteBooks, setBooksInShelf })
      setIsClient(true)
    }
  }



  useEffect(() => {
    setIsLoading(true)
    loadData()
    setIsLoading(false)
  }, [])

  return (
    <>
      {isClient ?
        <BackgroundArea>
          <Sidebar />
          <MainSection />
        </BackgroundArea>
        : null}
    </>
  )
}
