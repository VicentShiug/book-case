import React from 'react'

export default function BackgroundArea ({children}) {
  return (
    <div className="flex flex-col rounded-s-xl relative bg-gray-100 sm:flex-row w-full h-full overflow-auto ">
      {children}
    </div>
  )
}
