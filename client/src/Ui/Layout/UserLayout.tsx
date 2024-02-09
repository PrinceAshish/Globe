import Navbar from '@/components/Navbar'
import React from 'react'

export default function UserLayout({children}:any) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}
