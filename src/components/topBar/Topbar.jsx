import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Profile from '../profile/Profile'

export default function TopBar ({sidebar, profile}) {
  return (
    <div className='bg-white sm:w-80 w-full flex pb-20 sm:rounded-none rounded-b-xl'>
      {sidebar && <Sidebar />}
      {profile && <Profile />}
    </div>
  )
}
