import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SubscribeNewsletter from '@/components/SubscribeNewsletter'
import UserCard from '@/components/UserCard'
import React from 'react'

export default function UserLayout({ children }: any) {
  return (
    <>
      <Navbar />
      <UserCard />
      <div >
        {children}
      </div>
      <div className='relative top-20'>
        <SubscribeNewsletter />
      </div>
      <Footer />
    </>
  )
}
