import React, { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonBookItem ({ count }) {
  return (
    <div className='flex py-10 overflow-hidden' >
      {
        Array(count).fill().map((_, i) => {
          return (
            <div key={i} className='flex flex-col ml-10 gap-1'>
              <Skeleton width={150} height={190} />
              <Skeleton width={150} height={10} />
              <Skeleton width={120} height={10} />
              <Skeleton width={50} height={10} />
            </div>
          )
        })
      }
    </div>
  )
}
