import BackgroundArea from '@/components/backgroundArea/BackgroundArea'
import Profile from '@/components/profile/Profile'
import SearchBar from '@/components/searchBar/SearchBar'
import Sidebar from '@/components/sidebar/Sidebar'
import React from 'react'

export default function Search() {
  return (
    <BackgroundArea>
      <Sidebar />
      <SearchBar />
      <Profile />
    </BackgroundArea>
  )
}
