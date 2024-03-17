import { useLandingPage } from '@/ui/guest/LandingPage/useLandingPage';
import { UseLoginStore } from '@/ui/guest/Login/UseLoginStore';
import { convertTo12HourFormat } from '@/utills/commonFunction';
import { User } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'
import { IoAirplane } from 'react-icons/io5'
import myImage from 'F:/image.jpg';

const EachDetails = ({ title, value, icons }: any) => {
    let path: string;
    switch (icons) {
        case 'date':
            path = '/Images/Icons/calendar_primary.svg'
            break;
        case 'clock':
            path = '/Images/Icons/timmer_primary.svg'
            break;
        case 'gate':
            path = '/Images/Icons/gate_primary.svg'
            break;
        case 'seat':
            path = '/Images/Icons/seat_primary.svg'
            break;
        default:
            path = '/Images/Icons/date_primary.svg'
            break;
    }
    return (
        <div className="flex ">
            <div className="bg-[#EBF6F2] p-1 h-fit">
                <Image src={path} alt="icons" width={22} height={22} />
            </div>
            <div className="flex flex-col ml-1">
                <span className="text-color text-sm ">{title}</span>
                <span className="text-color text-sm font-semibold">{value}</span>
            </div>
        </div>
    )
}

export default function TicketDesign() {
    const IndividualFlight = useLandingPage((state: any) => state.IndividualFlight)
    const SerachFlightData = useLandingPage((state: any) => state.SerachFlightData)
    const customerData = UseLoginStore((state: any) => state.customerData)
    console.log(customerData)

    
    return (
        <div className='border rounded-2xl w-7/12 flex overflow-hidden'>
            <div className='px-6 py-8 pr-10 bg-[#EBF6F2] flex flex-col justify-between'>
                <div>
                    <h4 className='text-color font-semibold text-2xl'>{convertTo12HourFormat(IndividualFlight[0].flightStartTime)}</h4>
                    <span className='text-base font-normal'>{IndividualFlight[0].flightStartFrom}</span>
                </div>
                <div>
                    <IoAirplane style={{ fontSize: 42, transform: 'rotate(90deg)' }} />
                </div>
                <div>
                    <h4 className='text-color font-semibold text-2xl'>{convertTo12HourFormat(IndividualFlight[0].flightEndTime)}</h4>
                    <span className='text-base font-normal'>{IndividualFlight[0].flightEndFrom}</span>
                </div>
            </div>
            <div className='flex flex-col w-full'>

                <div className='bg-primary p-6 flex justify-between items-center'>
                    <div>
                        <User
                            as="button"
                            name={customerData.first_name || 'User'}
                            description="Boarding Pass N’123"
                            className="transition-transform text-color text-lg font-semibold"
                            avatarProps={{
                                className: 'w-10 h-10',
                                src: "https://th.bing.com/th/id/OIP.b61rHwfyvldBI6kQRI78jgHaHa?w=266&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                            }}
                        />
                    </div>
                    <h4 className='text-color text-base font-bold'>Busniess Class</h4>
                </div>

                <div className='p-6 flex justify-between'>
                    <EachDetails title={'Date'} value={IndividualFlight[0].flightStartDate} icons={'date'} />
                    <EachDetails title={'Gate'} value={'A12'} icons={'gate'} />
                    <EachDetails title={'Flight time'} value={'12:30'} icons={'clock'} />
                    <EachDetails title={'Seat no.'} value={'128'} icons={'seat'} />
                </div>

                <div className='flex justify-between items-start p-6'>
                    <div>
                        <h2 className='text-color text-3xl font-bold'>EK</h2>
                        <span>ABCD</span>
                    </div>
                    <Image src={'/Images/Flight/barcode.svg'} alt={'barcode'} width={100} height={100} className='w-64 h-20' />
                </div>
            </div>
        </div>
    )
}


