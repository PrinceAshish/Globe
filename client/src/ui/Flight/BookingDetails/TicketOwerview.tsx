'use client'
import { useLandingPage } from '@/ui/guest/LandingPage/useLandingPage'
import { currencyFormater } from '@/utills/commonFunction'
import { Button, Divider } from '@nextui-org/react'
import React from 'react'

const EachPrice = ({ title, value }: any) => {
    return (
        <div className='flex justify-between mb-4'>
            <span className='text-color text-base font-medium'>{title}</span>
            <span className='text-color text-base font-bold'>{currencyFormater(value)}</span>
        </div>
    )
}
export default function TicketOwerview() {
    const IndividualFlight = useLandingPage((state: any) => state.IndividualFlight)
    const SerachFlightData = useLandingPage((state: any) => state.SerachFlightData)
    let trip_class = 'Economy'
    switch (SerachFlightData.trip_class) {
        case '0':
            trip_class = 'Economy';
            break;
        case '1':
            trip_class = 'Business ';
        case '2':
            trip_class = 'First';
            break;
        default:
            trip_class = 'Economy';
            break;
    }
    console.log(SerachFlightData)
    return (
        <div className='w-full border p-6 shadow-md'>
            <div className='flex'>
                <img
                    src="https://s3-alpha-sig.figma.com/img/5fa8/e842/23d243db9749cc4ddef95d4c9fdb6c59?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYXeowIx57x1zIAGDUZYH6cfeOz4BE3iKp~jghvCXYUMOhLe7vb7cwxd-wk1ECIOjbqXptvejGl6eQQIB9GA6aPtP6MsB69Nmz6fpEADA4hafO7laa~SZYZXpBzZPMiMCGvIJ8T29G2-eF8gjnPmrBX7SZ4m1g-paumuWSOY7xKEWrZfg7I4sZqb7vG2PMD082Zf5iy-KW7-kTbE4bWxujRwXxdqVu9RM5gCxFBFt4K5JxnM3tQUNY0XigPeNLnLgWYojnjD4LYyNN8vm5G4R060iqVGQC7GddUt9g87kNDLY6tjM3zrvo4ZfXcbRRb3jmW3sLbLW2UZMd4I3UumCA__"
                    alt="flight overview"
                    className='w-32 h-32 rounded-xl '
                />
                <div className='ml-5'>
                    <h4 className='text-color text-sm'>{trip_class} </h4>
                    <h3 className='text-color text-lg font-semibold my-2'>{IndividualFlight[0].flightName} {IndividualFlight[0].flightNumber}</h3>
                    <div className='flex items-center'>
                        <div className='grid place-items-center w-10 h-8 border-primary border rounded-md'>
                        {IndividualFlight[0].flightReview} 
                        </div>
                        <span className='ml-3 text-color text-xs font-bold'>Very Good <span className='font-medium'>54 reviews</span></span>
                    </div>
                </div>
            </div>
            <Divider className='my-3' />
            <h2 className='text-color text-base font-medium'>Your booking is protected by <span className='font-semibold'>golobe</span></h2>
            <Divider className='my-3' />
            <div>
                <h4 className='text-color font-bold tezt-base mb-4'>Price Details</h4>
                <EachPrice title={'Base Fare'} value={Number(IndividualFlight[0].flightPrice) -900} />
                <EachPrice title={'Discount'} value={100} />
                <EachPrice title={'Taxes'} value={500} />
                <EachPrice title={'Service Fee'} value={499} />
                <Divider className='mb-3' />
                <EachPrice title={'Total'} value={IndividualFlight[0].flightPrice} />
            </div>
        </div>
    )
}


