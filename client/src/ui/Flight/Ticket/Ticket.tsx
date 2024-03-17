'use client'

import React from 'react'
import Breadcrumb from '../Breadcrumb'
import { BiMapPin, BiShareAlt } from 'react-icons/bi'
import { currencyFormater } from '@/utills/commonFunction'
import { Button } from '@nextui-org/react'
import TermsConditions from './TermsConditions'
import TicketDesign from './TicketDesign'
import { useLandingPage } from '@/ui/guest/LandingPage/useLandingPage'
import { UseLoginStore } from '@/ui/guest/Login/UseLoginStore'
import { useRouter } from 'next/navigation'
import { useTicketStore } from './useTicketStore'

export default function Ticket() {
    const IndividualFlight = useLandingPage((state: any) => state.IndividualFlight)
    // const SerachFlightData = useLandingPage((state: any) => state.SerachFlightData)
    const customerData = UseLoginStore((state: any) => state.customerData)
    const saveTicket = useTicketStore((state: any) => state.saveTicket)

    const router = useRouter()
    const handleDownload = () => {
        let datatoSend = {
            id: customerData.id,
            departureFrom:  IndividualFlight[0].flightStartFrom,
            landFrom:IndividualFlight[0].flightEndFrom,
            departureTime :IndividualFlight[0].flightStartTime,
            landingTime :IndividualFlight[0].flightEndTime,
            flightName:IndividualFlight[0].flightName,
            travelDate:IndividualFlight[0].flightStartDate,
            gateNo:"12 A",
            seatNo: "128"
        }
        saveTicket(datatoSend)
        const anchor = document.createElement('a');
        anchor.href = 'F:/image.jpg' as any;    
        anchor.download = 'image.jpg';
        anchor.click();
        router.push('/user')
    };
    return (
        <div className='w-full px-28 mt-10'>
            <div>
                <Breadcrumb />
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-color text-3xl font-bold'>{IndividualFlight[0]?.flightName} {IndividualFlight[0].flightNumber}</h3>
                    <div className='flex gap-x-2 items-center mt-2'>
                        <BiMapPin />
                        <span className='text-color text-sm '>departure from {IndividualFlight[0].flightStartFrom} Airport</span>
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                    <h3 className='text-color text-3xl font-bold '>{currencyFormater(IndividualFlight[0].flightPrice)}</h3>
                    <div className='flex items-center gap-x-3 mt-2'>
                        <Button isIconOnly className='bg-white border border-primary rounded'>
                            <BiShareAlt style={{ fontSize: 25 }} />
                        </Button>
                        <Button className='bg-primary text-color font-semibold rounded' onClick={handleDownload}>
                            Download
                        </Button>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <TicketDesign />
                <TermsConditions />
            </div>
        </div>
    )
}


