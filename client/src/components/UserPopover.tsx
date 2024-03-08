'use client'
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider, Popover, PopoverContent, PopoverTrigger, User } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { BiChevronRight, BiUser } from 'react-icons/bi';

const EachData = ({ title, icon }: any) => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center space-x-2'>
                <BiUser />
                <span className='text-color font-medium text-base'>{title}</span>
            </div>
            <div>
                <BiChevronRight />
            </div>
        </div>
    )
}
export default function UserPopover() {
    const pathname = usePathname();
    return (
        <Popover placement="bottom-start">
            <PopoverTrigger>
                <User
                    as="button"
                    name="Ashish"
                    // description="Product Designer"
                    className="transition-transform"
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                    }}
                />
            </PopoverTrigger>
            <PopoverContent className="py-2">
                {/* <UserTwitterCard /> */}
                <Card shadow="none" className="w-96 border-none bg-transparent rounded-sm">
                    <CardBody className="p-8">
                        <User
                            name="Ashish"
                            className="transition-transform"
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                            }}
                        />
                        <Divider className='border-2' />
                        <EachData title={'MyAccount'} icon={'user'} />
                        {pathname === '/user' ?
                            <div className="text-small pl-px text-white mb-2 bg-gray-700">My Profile</div>
                            :
                            <Link href={'/user'} className="text-small pl-px text-color mb-2">My Profile</Link>
                        }
                        <div className="text-small pl-px text-color ">Settings</div>
                    </CardBody>
                </Card>
            </PopoverContent>
        </Popover>
    )
}
