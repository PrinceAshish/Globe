'use client'

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import React from 'react'
import { useLandingPage } from '../guest/LandingPage/useLandingPage'

export default function Breadcrumb() {
    const SerachFlightData = useLandingPage((state:any)=>state.SerachFlightData)
    return (
        <Breadcrumbs>
            <BreadcrumbItem color='danger' className=' font-semibold' >{SerachFlightData.from_city}</BreadcrumbItem>
            <BreadcrumbItem className='text-black font-semibold'>{SerachFlightData.to_city}</BreadcrumbItem>
        </Breadcrumbs>
    )
}

