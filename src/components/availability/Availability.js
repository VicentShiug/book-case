import { CheckBullet, XBullet } from '@/icons/Icons'
import React from 'react'

export default function Availability () {
  return (
    <div className='flex gap-2 items-center'>
      <div className='flex flex-col gap-2'>
        <CheckBullet />
        <XBullet />
        <CheckBullet />
      </div>
      <div className='flex flex-col'>
        <p>Físico</p>
        <p>E-Book</p>
        <p>Audio Livro</p>
      </div>
    </div>
  )
}
