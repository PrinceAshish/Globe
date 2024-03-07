'use client'

import { currencyFormater } from '@/utills/commonFunction'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaWifi } from 'react-icons/fa'
import { IoAirplane, IoFastFood, IoStopwatch } from 'react-icons/io5'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'

export default function FlightBookingDetails() {
    const router = useRouter()
    const handleClick = () => {
        router.push('/flight/ticket/123/download')
    }
    return (
        <div className='shadow-md px-6 py-8 '>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-semibold text-color'>Emirates A380 Airbus</h2>
                <h3 className='text-error text-3xl font-semibold'>{currencyFormater(5999)}</h3>
            </div>
            <div className='flex justify-between mt-7'>
                <h2 className='text-color text-lg font-semibold'>Return Wed, Dec 8</h2>
                <h3 className='text-color font-medium text-lg'>2h 28m</h3>
            </div>
            <div className='flex justify-between mt-6 items-center'>
                <div className='flex p-2 px-4 items-center gap-x-4 rounded border'>
                    <img src="https://s3-alpha-sig.figma.com/img/fa7a/7b30/507a76a5fb381349747966551fc46c61?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F9BrIpxtYt6-LC8i7lVul2dPRpQGZ0a9DwgD0KNSzjobFipI5StGbNVOGH-u4hkFcLofBpY5gma6CZKhwRFiXC6U7p9-qsts3ZcCLk6xoOVEHJFNJ0Wld-YzI64AJWNXGWND1NiN9A5LcHaYH9BtcIsHr~odhK899tnX23Ais7c0z1yqItlJMCW7oWBUqgLtpyTFltSnBgsm08wmNGCjQV3wXtvJRGhnMpsQhxecJMF9qFUAL31uEGXAbLs8dPmP2g7-YUpoGXQ6fFbgQyl4ASOL-UdsH94P0AfyDiIAF-KBNTmXgbiWVEk6N1yzPFOhLeVv7ZOE3nfi0vAnp~l-zA__" alt="logo.png" className='w-16 h-11' />
                    <div className='space-y-1'>
                        <h4 className='text-color text-lg font-semibold'>Emirates</h4>
                        <h5 className='text-color text-sm '>Airbus A320</h5>
                    </div>
                </div>
                <div className='flex w-2/4 justify-between h-fit'>
                    <div className='border-r-2 px-4'>
                        <IoAirplane style={{ fontSize: 22 }} />
                    </div>
                    <div className='border-r-2 px-4'>
                        <FaWifi style={{ fontSize: 22 }} />
                    </div>
                    <div className='border-r-2 px-4'>
                        <IoStopwatch style={{ fontSize: 22 }} />
                    </div>
                    <div className='border-r-2 px-4'>
                        <IoFastFood style={{ fontSize: 22 }} />
                    </div>
                    <div className='px-4'>
                        <MdAirlineSeatReclineNormal style={{ fontSize: 22 }} />
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-12'>
                <div><h4 className='text-color font-semibold text-2xl'>12:00 pm <span className='ml-3 text-base font-normal'>Newark(EWR)</span></h4></div>
                <div>
                    <IoAirplane style={{ fontSize: 42 }} />
                </div>
                <div><h4 className='text-color font-semibold text-2xl'>12:00 pm <span className='ml-3 text-base font-normal'>Newark(EWR)</span></h4></div>
            </div>
            <div className='flex justify-end mt-5'>
                <Button className='bg-primary rounded text-color font-semibold' onClick={handleClick}>
                    Confirm and Pay
                </Button>
            </div>
        </div>
    )
}

