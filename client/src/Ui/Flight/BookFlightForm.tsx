import React from 'react'
import FlightBooking from '../guest/LandingPage/FlightBooking'

export default function BookFlightForm() {
    return (
        <div className='grid grid-cols-1 w-full rounded-2xl bg-white relative bottom-32 p-6 border'>
            <h2 className='text-xl font-semibold'>Where are you flying? </h2>
            <div>
                <FlightBooking />
            </div>
        </div>
    )
}


