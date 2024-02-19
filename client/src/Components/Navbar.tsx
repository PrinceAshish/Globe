import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosBed } from 'react-icons/io'
import { IoAirplaneSharp } from 'react-icons/io5'
import { FaHeart } from "react-icons/fa";
import { Avatar, Divider } from '@nextui-org/react'

export default function Navbar() {
    return (
        <div className=' flex justify-between shadow px-20 '>
            <div className='flex gap-10 '>
                <div className="grid place-items-center border-b-5 border-[#8DD3BB] ">
                    <Link href={'/'} className='flex text-color text-sm'>
                        <IoAirplaneSharp style={{ color: '#112211', marginRight: '3px', fontSize: '18px' }} />
                        Find Flight
                    </Link>
                </div>
                <div className="grid place-items-center">
                    <Link href={'/'} className='flex text-color text-sm '>
                        <IoIosBed style={{ color: '#112211', marginRight: '3px', fontSize: '18px' }} />
                        Find Flight
                    </Link>
                </div>
            </div>
            <div className='flex py-3'>
                <Image
                    src={'/logo2.svg'}
                    alt='Logo.svg'
                    width={100}
                    height={40}
                />
            </div>
            <div className='flex py-3 items-center gap-3'>
                <div className='flex items-center text-color font-semibold text-sm gap-2'>
                    <FaHeart />
                    Favourites
                </div>
                <Divider orientation="vertical" className='bg-[#112211] h-4'/>
                <div className='flex items-center gap-1'>
                    <Avatar name="Jhon D" />
                    Jhon D.
                </div>
            </div>
        </div >
    )
}


