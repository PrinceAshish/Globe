import { Avatar, Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { IoCloudUpload } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

function UserCard() {
    return (
        <div className='px-20 pt-10'>
            <Image src={'Images/user_background.svg'} alt='user_background' width={100} height={0} className='w-full' />
            <div className='flex justify-end relative bottom-16 h-10 '>
                <Button className='bg-primary text-color font-medium mr-6 rounded-sm'>
                    <IoCloudUpload />
                    Upload new cover
                </Button>
            </div>
            <div className='flex flex-col items-center relative bottom-20'>
                <Avatar isBordered color="primary" className='w-28 h-28' src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                <div className='w-8 h-8 bg-primary rounded-full grid place-items-center cursor-pointer absolute top-20 ml-20'><MdEdit size={20} /></div>
                <h2 className='text-xl text-color font-semibold mt-5'>John Doe</h2>
                <span className='text-md text-color'>john.doe@gmail.com</span>
            </div>
        </div>
    )
}

export default UserCard
