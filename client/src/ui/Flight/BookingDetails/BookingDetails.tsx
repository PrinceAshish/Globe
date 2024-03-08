import React from 'react'
import Breadcrumb from '../Breadcrumb'
import FlightBookingDetails from './FlightBookingDetails'
import ChoosePayment from './ChoosePayment'
import UserCards from './UserCards'
import TicketOwerview from './TicketOwerview'

export default function BookingDetails() {
    return (
        <div className='px-28'>
            <div className='mt-11'>
                <Breadcrumb />
            </div>
            <div className='flex gap-x-8 '>
                <div className='flex flex-col gap-y-7 w-7/12'>
                    <FlightBookingDetails/>
                    <ChoosePayment/>
                    <UserCards/>
                </div>
                <div className='w-5/12'>
                    <TicketOwerview/>
                </div>
            </div>
        </div>
    )
}
