'use client'

import { currencyFormater } from '@/utills/commonFunction'
import { BreadcrumbItem, Breadcrumbs, Button } from '@nextui-org/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiHeart, BiMapPin, BiShare } from 'react-icons/bi'
import Breadcrumb from '../Breadcrumb'
import { useLandingPage } from '@/ui/guest/LandingPage/useLandingPage'

export default function FlightDetailsHeader() {
    const IndividualFlight = useLandingPage((state: any) => state.IndividualFlight)
    console.log(IndividualFlight)
    console.log(IndividualFlight.flightPrice)
    
    const router = useRouter()

    const handleClick = () => {
        router.push('/flight/123/details/booking')
    }

    return (
        <div>
            <div className='mt-12'>
                <Breadcrumb />
            </div>
            <div className='flex justify-between items-end mt-8'>
                {/* 1st col */}
                <div className='flex flex-col gap-y-3'>
                    <h2 className='font-bold text-2xl text-color'>{IndividualFlight[0].flightName} {IndividualFlight[0].flightNumber}</h2>
                    <h4 className='flex gap-x-2 items-center text-color text-sm font-medium'>
                        <BiMapPin />
                        departure from {IndividualFlight[0].flightStartFrom} Airport
                    </h4>
                    <div className='flex items-center space-x-2'>
                        <div className='grid place-items-center w-10 h-8 border-primary border rounded-md'>
                            {IndividualFlight[0].flightReview}
                        </div>
                        <span className='text-color text-xs font-bold'>Very Good <span className='font-medium'>54 reviews</span></span>
                    </div>
                </div>
                {/* 2nd col */}
                <div className='flex flex-col items-end gap-2'>
                    <h3 className='text-error font-bold text-3xl '>{currencyFormater(IndividualFlight[0].flightPrice)}</h3>
                    <div className='flex gap-x-4'>
                        <Button isIconOnly className="border border-primary bg-white text-black rounded  hover:bg-primary hover:text-white" aria-label="switch" >
                            <BiHeart style={{ fontSize: '20px', fontWeight: 'bold' }} />
                        </Button>
                        <Button isIconOnly className="border border-primary bg-white text-black rounded  hover:bg-primary hover:text-white" aria-label="switch" >
                            <BiShare style={{ fontSize: '20px', fontWeight: 'bold' }} />
                        </Button>
                        <Button className='w-full bg-primary text-color font-semibold rounded' onClick={handleClick}>
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <img
                    src={'https://s3-alpha-sig.figma.com/img/5fa8/e842/23d243db9749cc4ddef95d4c9fdb6c59?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYXeowIx57x1zIAGDUZYH6cfeOz4BE3iKp~jghvCXYUMOhLe7vb7cwxd-wk1ECIOjbqXptvejGl6eQQIB9GA6aPtP6MsB69Nmz6fpEADA4hafO7laa~SZYZXpBzZPMiMCGvIJ8T29G2-eF8gjnPmrBX7SZ4m1g-paumuWSOY7xKEWrZfg7I4sZqb7vG2PMD082Zf5iy-KW7-kTbE4bWxujRwXxdqVu9RM5gCxFBFt4K5JxnM3tQUNY0XigPeNLnLgWYojnjD4LYyNN8vm5G4R060iqVGQC7GddUt9g87kNDLY6tjM3zrvo4ZfXcbRRb3jmW3sLbLW2UZMd4I3UumCA__'}
                    alt='logo'
                    // width={100}
                    // height={100}
                    className='w-full h-96 object-cover rounded-xl '
                />
            </div>
            <div className='mt-10'>
                <h2 className='font-bold text-2xl'>More Images</h2>
                <div className='mt-3'>
                    <img src="https://s3-alpha-sig.figma.com/img/6394/11f9/0604a120cfb8b0c30958f0ca9577e1ba?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aPI7GuLZmB0AfIea9NCbvAjIWXnokUFlacLEXtDOh-1zLppXwjlRKZ~JZpA5TU8fC6pwuv1qv0bnoYRkolFqXW8vt1o31qxhmxH4wZcPewg~76BnMlXCPKZc~Ue4Q9~UkfsKCrC4iW15aTN65Zb-P-X7wXF2M838c3CUitCbWCUVp6iNh0NmXNlHijei9grg1icMI6P~Z~jpYwogw-sovucIAyWHuPVWeos6i5IO20pzKtC9b9alWnNYOfPz-a9YnJyX-hgVPtWZ5YYz9cH76Yjw2qhwMx1qhZUAGSFLid1RDG3qYkO1~Mris9OpvEkoJ~F~9rSip19hsekRkHqtPA__"
                        alt="logogogogo"
                        className='w-28 h-28 rounded-lg'
                    />
                </div>
            </div>
        </div>
    )
}


