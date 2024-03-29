'use client'

import React from 'react'
import { IoAirplaneSharp } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import {Button} from "@nextui-org/react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


function LandingNavbar() {
const router = useRouter()
  return (
    <div className="w-full flex justify-between px-5 pt-5  rounded-lg">
      <div className="flex">
        <Link href={'/flight'} className="flex items-center text-[14px] font-semibold text-white cursor-pointer">
          <IoAirplaneSharp style={{ color: 'white',marginRight:'3px',fontSize: '18px' }}/>
          Find Flight
        </Link>
        <Link href={'/hotel'} className="flex items-center text-[14px] font-semibold text-white ml-6 cursor-pointer">
          <IoIosBed style={{ color: 'white',marginRight:'3px',fontSize: '18px' }}/>
          Find Stays
        </Link>
      </div>
      <div className="center">
          <Image
            src={'/logo.svg'}
            alt='Logo.svg'
            width={100}
            height={40}
          />
      </div>
      <div className="flex space-x-2">
        <div className="login">
        <Button variant='light'  className='text-white' onClick={()=>router.push('/login')}>Login</Button> 
        </div>
        <div className="signUp">
        <Button className='text-[#112211] bg-white'  onClick={()=>router.push('/register')}>Sign up</Button>
        </div>
      </div>
    </div>
  )
}

export function Header() {
  return (
    <div className='w-[95%] h-[581px] flex flex-col items-center rounded-3xl land_background mx-auto  mt-5 '>
      <LandingNavbar/>
      <div className="text-center mt-20">
        <h2 className='text-white font-bold text-[40px] web-font'>Helping Others</h2>
        <h1 className='text-white font-bold text-[85px] web-font'>Live & Travel</h1>
        <h3 className='text-white font-semibold text-[20px]'>Special offers to suit your plan</h3>
      </div>
    </div>
  )
}
