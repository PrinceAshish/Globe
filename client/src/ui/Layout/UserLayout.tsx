'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SubscribeNewsletter from '@/components/SubscribeNewsletter'
import UserCard from '@/components/UserCard'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function UserLayout({ children }: any) {
  const pathname = usePathname();
  return (
    <>
      <Navbar />
      {pathname === '/user' ? <UserCard /> : false}
      <div>
        {children}
      </div>
      <div className='relative top-20'>
        <SubscribeNewsletter />
      </div>
      <Footer />
    </>
  )
}
