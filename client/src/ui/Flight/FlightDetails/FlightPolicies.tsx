import React from 'react'
import { BiStopwatch } from 'react-icons/bi'

export default function FlightPolicies() {
  return (
    <div className='bg-[#8DD3BB99] p-4 rounded-2xl mt-6'>
      <h2 className='text-color font-bold text-2xl'>Emirates Airlines Policies</h2>
      <div className='w-full grid grid-cols-2 mt-5'>
        <h3 className='flex gap-x-3 text-color text-sm items-center'>
            <BiStopwatch/>
            Pre-flight cleaning, installation of cabin HEPA filters.
        </h3>
        <h3 className='flex gap-x-3 text-color text-sm items-center'>
            <BiStopwatch/>
            Pre-flight cleaning, installation of cabin HEPA filters.
        </h3>
      </div>
    </div>
  )
}


