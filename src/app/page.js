'use client';
import Sidebar from "@/components/sidebar/Sidebar";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import MainSection from "@/components/mainSection/MainSection";
import { UseGetAllStateBooks } from "@/hooks/useGetBooks";
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
  const { user, token, setBooksToRead, setBooksReading, setReadBooks, setFavoriteBooks } = useAuthContext()
  const [isClient, setIsClient] = useState(false)

  const loadData = async() => {
    setIsClient(true)
    const userLoad = user ? user : JSON.parse(parseCookies().user)
    if (token || userLoad) {
      return UseGetAllStateBooks({ user: userLoad, setBooksReading, setBooksToRead, setReadBooks, setFavoriteBooks })
    }
  }

  useEffect(() => {
    loadData()
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
