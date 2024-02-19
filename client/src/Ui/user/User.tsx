'use client'

import React from 'react'
import { Card, CardBody, Divider, Tab, Tabs } from '@nextui-org/react'
import Account from './Account/Account'
import History from './History/History'
import PaymentMethods from './PaymentMethods/PaymentMethods'

export default function User() {

    const TabClassName = {
        tabList: "flex justify-between w-full relative rounded-none p-0 bg-white shadow-md ",
        cursor: "w-full bg-[#8DD3BB] h-1 ",
        tab: " h-12 font-semibold ",
    }

    return (
        <div className="flex w-full flex-col  my-5 px-20" >
            <Tabs classNames={TabClassName} aria-label="Options" variant='underlined' >
                <Tab key="Account" title="Account" className='border-r-2' ><Account/></Tab>
                <Tab key="History" title="History"  className='border-r-2' ><History/></Tab>
                <Tab key="Payment methods" title="Payment methods" ><PaymentMethods/></Tab>
            </Tabs>
        </div>
    )
}
