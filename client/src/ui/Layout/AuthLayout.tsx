'use client'

import SwiperComponent from '@/components/SwiperComponent'
import React from 'react'
import Image from 'next/image'

const EachLink = ({ name }: any) => {
    let imageLink = `/Images/socialMedia/${name}.svg`;
    return (
        <div className='border border-[#8DD3BB] h-14 grid place-items-center cursor-pointer ' onClick={() => console.log('ashish')}>
            <Image
                src={imageLink}
                alt='social_media_link'
                width={100}
                height={40}
                className='w-6 h-6'
            />
        </div>
    )
}

export default function AuthLayout({ needInRight = false, children }: any) {
    const images = [
        "/Images/login1.svg",
        "/Images/login2.svg",
    ]
    return (
        <div>
            {needInRight ?
                <div className="grid grid-cols-2 test px-28 py-14 select-none gap-28 test h-full">
                    <div className="">
                        <SwiperComponent images={images} className={'w-full h-90'} width={40} height={40} />
                    </div>
                    <div className=''>
                        <div className='img'>
                            <Image
                                src={'/logo2.svg'}
                                alt='Logo.svg'
                                width={100}
                                height={40}
                            />
                        </div>
                        {children}
                        <div className='grid grid-cols-3 gap-5 mt-10'>
                            <EachLink name={'facebook'} />
                            <EachLink name={'google'} />
                            <EachLink name={'apple'} />
                        </div>
                    </div>
                </div>
                :
                <div className="grid grid-cols-2 test px-28 py-14 select-none gap-28">
                    <div className=''>
                        <div className='img'>
                            <Image
                                src={'/logo2.svg'}
                                alt='Logo.svg'
                                width={100}
                                height={40}
                            />
                        </div>
                        {children}
                        <div className='grid grid-cols-3 gap-5 mt-10'>
                            <EachLink name={'facebook'} />
                            <EachLink name={'google'} />
                            <EachLink name={'apple'} />
                        </div>
                    </div>
                    <div className="">
                        <SwiperComponent images={images} className={'w-full h-full'} width={40} height={40} />
                    </div>
                </div>
            }
        </div>
    )
}


