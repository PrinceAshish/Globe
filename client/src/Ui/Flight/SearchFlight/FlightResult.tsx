import { currencyFormater } from '@/utills/commonFunction'
import { Button, Divider } from '@nextui-org/react'
import React from 'react'
import { BiHeart } from 'react-icons/bi'

export default function FlightResult() {
  return (
    <div className='border-l-2 col-span-4 pl-5'>
      <h2 className='text-color font-semibold mb-5'>Showing 4 of <span className='text-[#FF8682]'>257 places</span></h2>
      <div className='bg-white shadow-lg w-full py-6 px-4 flex'>
        <div>
          <img src="https://s3-alpha-sig.figma.com/img/fa7a/7b30/507a76a5fb381349747966551fc46c61?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F9BrIpxtYt6-LC8i7lVul2dPRpQGZ0a9DwgD0KNSzjobFipI5StGbNVOGH-u4hkFcLofBpY5gma6CZKhwRFiXC6U7p9-qsts3ZcCLk6xoOVEHJFNJ0Wld-YzI64AJWNXGWND1NiN9A5LcHaYH9BtcIsHr~odhK899tnX23Ais7c0z1yqItlJMCW7oWBUqgLtpyTFltSnBgsm08wmNGCjQV3wXtvJRGhnMpsQhxecJMF9qFUAL31uEGXAbLs8dPmP2g7-YUpoGXQ6fFbgQyl4ASOL-UdsH94P0AfyDiIAF-KBNTmXgbiWVEk6N1yzPFOhLeVv7ZOE3nfi0vAnp~l-zA__" alt="logo.png" className='w-40 h-24' />
        </div>
        <div className='w-full px-6'>
          {/* 1st col */}
          <div className='flex justify-between '>
            <div className='flex items-center space-x-2'>
              <div className='grid place-items-center w-10 h-8 border-primary border rounded-md'>
                4.2
              </div>
              <span className='text-color text-xs font-bold'>Very Good <span className='font-medium'>54 reviews</span></span>
            </div>
            <div className='flex flex-col'>
              <span className='text-color text-xs font-medium'>starting from</span>
              <span className='text-error font-bold text-xl'>{currencyFormater(5999)}</span>
            </div>
          </div>
          {/* 2nd col */}
          <div className='flex justify-between mt-2'>
            <div>
              <h4 className='text-color font-semibold'>12:00 pm - 01:28 pm</h4>
              <span className='text-color text-sm'>Emirates</span>
            </div>
            <h4 className='text-color font-semibold text-sm'>non-stop</h4>
            <div>
              <h4 className='text-color font-semibold'>2h 28m</h4>
              <span className='text-color text-sm'>EWR-BNA</span>
            </div>
          </div>
          <Divider className='my-3' />
          <div className='flex gap-x-4 items-center mt-5'>
            <Button isIconOnly className="border border-primary bg-white text-black rounded  hover:bg-primary hover:text-white" aria-label="switch" >
              <BiHeart style={{ fontSize: '20px', fontWeight: 'bold' }} />
            </Button>
            <Button className='w-full bg-primary text-color font-semibold rounded-md'>
              View Deals
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


