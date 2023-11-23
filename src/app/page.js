'use client';

import Sidebar from "@/components/sidebar/Sidebar";
import { useAuthContext } from "@/context/AuthContext";
import { auth } from "@/service/firebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MainSection from "@/components/mainSection/MainSection";
import { getLivros } from "@/hooks/useGetLivros";

export default function Home () {
  const router = useRouter()
  const { user, setUser, token, setLivros } = useAuthContext()


  useEffect(() => {
    if (!token) {
      router.push('/Login')
      return
    }
    auth.onAuthStateChanged(user => {
      const { displayName, photoURL, uid } = user
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        accessToken: token
      })
    })

    const type = 4
    getLivros({ user, setLivros, type })
  }, [])

  return (
    <div className="w-screen h-screen bg-bg bg-no-repeat bg-right p-9 pb-10 bg-white fill-slate-600">
      <div className="w-full h-full ">
        <div className="flex rounded-s-xl bg-gray-100 flex-row w-full h-full">
          <Sidebar />
          <MainSection />
        </div>
      </div>
    </div>

  )
}
