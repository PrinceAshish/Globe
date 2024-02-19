'use client'
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Popover, PopoverContent, PopoverTrigger, User } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function UserPopover() {
    const pathname = usePathname();
    return (
        <Popover  placement="bottom">
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
                <Card shadow="none" className="max-w-[350px] border-none bg-transparent rounded-sm">
                    <CardBody className="px-3 py-0">
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

export default UserPopover
