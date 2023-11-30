import { CheckBullet, XBullet } from '@/icons/Icons'
import React from 'react'

export default function Availability ({saleInfo}) {
  return (
    <div className='flex gap-2 items-center'>
      <div className='flex flex-col gap-2'>
      {
        saleInfo?.saleability === 'FOR_SALE' ? <CheckBullet /> : <XBullet />
        }
        {
        saleInfo?.isEbook ? <CheckBullet />  : <XBullet />
        }
        {/* <CheckBullet />
        <XBullet />
        <CheckBullet /> */}
      </div>
      <div className='flex flex-col'>
        <p>Compra</p>
        <p>E-Book</p>
      </div>
    </div>
  )
}
