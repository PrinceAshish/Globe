'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosBed } from 'react-icons/io'
import { IoAirplaneSharp } from 'react-icons/io5'
import { FaHeart } from "react-icons/fa";
import { Avatar, Divider, Popover, PopoverContent, PopoverTrigger, User } from '@nextui-org/react'
import UserPopover from './UserPopover'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
    const router  = useRouter();
    const pathname = usePathname();
    return (
        <div className=' flex justify-between shadow px-20 '>
            <div className='flex gap-10 '>
                <div className={`grid place-items-center ${pathname === '/flight' ?  'border-b-5 border-[#8DD3BB]' : ''} `}>
                    <Link href={'/flight'} className='flex text-color text-sm'>
                        <IoAirplaneSharp style={{ color: '#112211', marginRight: '3px', fontSize: '18px' }} />
                        Find Flight
                    </Link>
                </div>
                <div className={`grid place-items-center ${pathname === '/hotel' ?  'border-b-5 border-[#8DD3BB]' : ''}`}>
                    <Link href={'/hotel'} className='flex text-color text-sm '>
                        <IoIosBed style={{ color: '#112211', marginRight: '3px', fontSize: '18px' }} />
                        Find Hotel
                    </Link>
                </div>
            </div>
            <div className='flex py-3'>
                <Image
                    src={'/logo2.svg'}
                    alt='Logo.svg'
                    width={100}
                    height={40}
                    className='cursor-pointer'
                    onClick={()=>router.push('/')}
                />
            </div>
            <div className='flex py-3 items-center gap-3'>
                <div className='flex items-center text-color font-semibold text-sm gap-2'>
                    <FaHeart />
                    Favourites
                </div>
                <Divider orientation="vertical" className='bg-[#112211] h-4' />
                <UserPopover/>
                {/* <div className='flex items-center gap-1'>
                    <Avatar name="Jhon D" />
                    Jhon D.
                </div> */}
            </div>
        </div >
    )
}


