'use client';
import BooksList from "@/components/booksList";
import Sidebar from "@/components/sidebar";
import { AuthContext, useAuthContext } from "@/context/AuthContext";
import useAuth from "@/hooks/useAuth";
import { app, auth } from "@/service/firebase";
import { GoogleAuthProvider, signInWithCustomToken, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home () {
  const router = useRouter()
  // const { user, setUser, token } = useAuth()
  const { user, setUser, token, setToken } = useAuthContext()
  console.log(token)
  console.log(user)
  const [livros, setLivros] = useState([])
  // const [token, setToken] = useState([])


  useEffect(() => {
    // auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user
        // auth.updateCurrentUser(user)
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          accessToken: token
        })
      } else {
        
        router.push('/Login')
      }
    // })
    
    getLivros()
  }, [])


  
  const url = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes`;
  const getLivros = async () => {
    if (!user || !user.accessToken) {
      console.error("Token de acesso não encontrado")
      return
    }


    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    // const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=a+menina+a`,
    const response = await fetch(proxyUrl + url, {
      headers: {
        'Authorization': `Bearer ${user.accessToken}`
      }
    })
    const data = await response.json()
    setLivros(data.items)
    console.log(data)
  }


  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <Sidebar />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Minha lista</h2>
          <BooksList books={livros} />
        </div>
      </div>
      <div>
        
        <div>
          <aside>
            <img src={user?.avatar} alt="" />
            <h1>{user?.name}</h1>
          </aside>
          <main>
            {
              user && <button onClick={() => auth.signOut()}>Logout</button>
            }
            <button onClick={() => getLivros()}>pegar livros</button>
          </main>
        </div>
      </div>
    </>

  )
}
