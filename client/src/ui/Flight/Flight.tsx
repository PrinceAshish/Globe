
import Image from 'next/image'
import React from 'react'

import BookFlightForm from './BookFlightForm'
import { Button } from '@nextui-org/react'
import CityAdCard from './CityAdCard'

function Flight() {
    return (
        <div className=''>
            <Image src={'Images/Flight/banner.svg'} alt='banner' width={100} height={100} className='w-full h-auto' />
            <div>
                <div className="px-28">
                    <BookFlightForm />
                    <div className='w-full h-20'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h3 className='text-color text-3xl font-semibold mb-3'>Let's go places together</h3>
                                <h5 className='text-color text-base '>Discover the latest offers and news and start planning your next trip with us.</h5>
                            </div>
                            <Button variant='bordered' className='border-[#8DD3BB] rounded'>See All</Button>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <Image src={'Images/Flight/map.svg'} alt='map' width={100} height={100} className='w-full h-auto' />
                </div>
                <div className="px-28 mt-20">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h3 className='text-color text-3xl font-semibold mb-3'>Fall into travel</h3>
                            <h5 className='text-color text-base '>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</h5>
                        </div>
                        <Button variant='bordered' className='border-[#8DD3BB] rounded'>See All</Button>
                    </div>
                    <div className='grid grid-cols-4 gap-x-4 mt-10'>
                        <CityAdCard />
                        <CityAdCard />
                        <CityAdCard />
                        <CityAdCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flight
