'use client'

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import React from 'react'

export default function Breadcrumb() {
    return (
        <Breadcrumbs>
            <BreadcrumbItem color='danger' className=' font-semibold' >Delhi</BreadcrumbItem>
            <BreadcrumbItem className='text-black font-semibold'>Mumbai</BreadcrumbItem>
        </Breadcrumbs>
    )
}

