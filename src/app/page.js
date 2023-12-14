'use client';
import Sidebar from "@/components/sidebar/Sidebar";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import MainSection from "@/components/mainSection/MainSection";
import { UseGetAllStateBooks, onGetAllBooks } from "@/hooks/useGetBooks";
import BackgroundArea from "@/components/backgroundArea/BackgroundArea";
import { parseCookies } from "nookies";
import Profile from "@/components/profile/Profile";
import TopBar from "@/components/topBar/Topbar";
import { Button } from "@material-tailwind/react";

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
  const { user, token, setBooksToRead, setBooksReading, setReadBooks, setFavoriteBooks, setIsLoading, setBooksInShelf, isLoading } = useAuthContext()
  const [isClient, setIsClient] = useState(false)
  const loadData = async () => {
    setIsClient(true)
    setIsLoading(true)
    const userLoad = user ? user : JSON.parse(parseCookies().user)
    if (token || userLoad) {
      await UseGetAllStateBooks({ user: userLoad, setBooksReading, setBooksToRead, setReadBooks, setFavoriteBooks, setBooksInShelf })
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      {isClient ?
        <BackgroundArea>
          <TopBar sidebar profile={window.innerWidth < 640} />
          <MainSection />
        </BackgroundArea>
        : null}
    </>
  )
}
