'use client'
import { useLandingPage } from '@/ui/guest/LandingPage/useLandingPage'
import { calculateTimeDifference, convertTo12HourFormat, currencyFormater, getRandomNumber } from '@/utills/commonFunction'
import { Button, Divider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { BiHeart } from 'react-icons/bi'
import { useSearchFlightStore } from './useSearchFlightStore'

export default function FlightResult() {
  const SerachFlightData = useLandingPage((state: any) => state.SerachFlightData)
  const FlightData = useSearchFlightStore((state: any) => state.FlightData)
  const searchFlight = useSearchFlightStore((state: any) => state.searchFlight)
  const saveIndividualFlight = useLandingPage((state: any) => state.saveIndividualFlight)
  const router = useRouter()
  const handleClick = () => {
    saveIndividualFlight(FlightData)
    router.push('/flight/123/details')
  }
  useEffect(() => {
    if (Object.keys(SerachFlightData).length) {
      handleSearchFlight()
    }
  }, [SerachFlightData])
  const handleSearchFlight = () => {
    let dataToSend = {
      from_city: SerachFlightData.from_city,
      to_city: SerachFlightData.to_city,
      start_date: SerachFlightData.start_date,
      end_date: SerachFlightData.end_date ? SerachFlightData.end_date : SerachFlightData.start_date,
    }
    searchFlight(dataToSend)
  }

  return (
    <div className='border-l-2 col-span-4 pl-5'>
      <h2 className='text-color font-semibold mb-5'>Showing {FlightData.length || 0} of <span className='text-[#FF8682]'>{FlightData.length || 0} places</span></h2>
      {FlightData.length ?
        FlightData.map((d:any) => (
          <div className='bg-white shadow-lg w-full py-6 px-4 flex'>
            <div>
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxpZ2h0fGVufDB8fDB8fHww" alt="logo.png" className='w-40 h-24' />
            </div>
            <div className='w-full px-6'>
              {/* 1st col */}
              <div className='flex justify-between '>
                <div className='flex items-center space-x-2'>
                  <div className='grid place-items-center w-10 h-8 border-primary border rounded-md'>
                    {d.flightReview}
                  </div>
                  <span className='text-color text-xs font-bold'>Very Good <span className='font-medium'>{getRandomNumber()} reviews</span></span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-color text-xs font-medium'>starting from</span>
                  <span className='text-error font-bold text-xl'>{currencyFormater(d.flightPrice)}</span>
                </div>
              </div>
              {/* 2nd col */}
              <div className='flex justify-between mt-2'>
                <div>
                  <h4 className='text-color font-semibold'>{convertTo12HourFormat(d.flightStartTime)} - {convertTo12HourFormat(d.flightEndTime)}</h4>
                  <span className='text-color text-sm'>{d.flightName}</span>
                </div>
                <h4 className='text-color font-semibold text-sm'>{d.flightTravelType}</h4>
                <div>
                  <h4 className='text-color font-semibold'>{calculateTimeDifference(d.flightStartTime,d.flightEndTime)}</h4>
                  <span className='text-color text-sm'>{d.flightNumber}</span>
                </div>
              </div>
              <Divider className='my-3' />
              <div className='flex gap-x-4 items-center mt-5'>
                <Button isIconOnly className="border border-primary bg-white text-black rounded  hover:bg-primary hover:text-white" aria-label="switch" >
                  <BiHeart style={{ fontSize: '20px', fontWeight: 'bold' }} />
                </Button>
                <Button className='w-full bg-primary text-color font-semibold rounded-md' onClick={handleClick}>
                  View Deals
                </Button>
              </div>
            </div>
          </div>
        )) :
        <h2>No Flight Availible</h2>
      }

    </div>
  )
}


