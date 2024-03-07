import React from 'react'
import FlightDetailsHeader from './FlightDetailsHeader'
import FlightPolicies from './FlightPolicies'
import ReturnFlightCard from './ReturnFlightCard'

export default function FlightDetails() {
    return (
        <div className='px-28'>
            <FlightDetailsHeader/>
            <FlightPolicies/>
            {/* <ReturnFlightCard/> */}
        </div>
    )
}


