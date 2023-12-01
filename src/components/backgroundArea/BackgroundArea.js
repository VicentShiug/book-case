import React from 'react'

export default function BackgroundArea ({children}) {
  return (
    <div className="flex rounded-s-xl relative bg-gray-100 flex-row w-full h-full overflow-auto ">
      {children}
    </div>
  )
}
