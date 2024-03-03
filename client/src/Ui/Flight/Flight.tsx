import { SelecteAirCity } from '@/components/SelecteAirCity'
import Image from 'next/image'
import React from 'react'

function Flight() {
    return (
        <div className='test'>
            <Image src={'Images/Flight/banner.svg'} alt='banner' width={100} height={100} className='w-full h-auto' />
            <div className="px-28">
                <div className='grid grid-cols-1 test w-full h-40 rounded-2xl bg-white relative bottom-32 shadow p-6'>
                    <h2 className='text-xl font-semibold'>Where are you flying? </h2>
                    <div>
                        <div>
                            <SelecteAirCity />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flight
