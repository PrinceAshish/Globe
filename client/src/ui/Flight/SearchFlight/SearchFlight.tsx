import React from 'react'
import FlightBooking from '@/ui/guest/LandingPage/FlightBooking'
import FilterForm from './FilterForm'
import FlightResult from './FlightResult'

export default function SearchFlight() {
    return (
        <div className='px-28'>
            <div className='border p-6 rounded shadow-lg mt-5'>
                <FlightBooking />
            </div>
            <div className="grid grid-cols-6 gap-x-5 mt-8">
                <FilterForm/>
                <FlightResult/>
            </div>
        </div>
    )
}


