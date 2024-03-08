import { Card, CardBody, Divider, Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import { IoIosBed } from 'react-icons/io'
import { IoAirplaneSharp } from 'react-icons/io5'
import { EachFlight, EachHotel } from '../component'

const Flight = () => {
  let data = [1, 2, 3]
  return (
    <div>
      {data.map((flight,index) => (
        <Card key={index} className="rounded-sm shadow-md mb-3">
          <CardBody>
            <EachFlight />
          </CardBody>
        </Card>
      ))}
    </div>
  )
}
const Stays = () => {
  let data = [1, 2, 3]
  return (
    <div>
      {data.map((flight,index) => (
        <Card key={index} className="rounded-sm shadow-md mb-3">
          <CardBody>
            <EachHotel />
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default function History() {
  const TabClassName = {
    tabList: "flex justify-between w-full  rounded-none p-0 bg-white shadow-md ",
    cursor: "w-full bg-[#8DD3BB] h-1",
    tab: "h-12 font-semibold border-r-2",
  }
  return (
    <div className="mt-6 w-full ">
      <h2 className="text-3xl font-bold text-black mb-3">Tickets/Bookings</h2>
      <Tabs classNames={TabClassName} aria-label="Options" variant='underlined' style={{ width: '100%' }} >
        <Tab key="Flight" title={<div className="flex items-center space-x-2">
          <IoAirplaneSharp />
          <span>Flight</span></div>}  ><Flight /></Tab>
        <Tab key="Stays" title={<div className="flex items-center space-x-2">
          <IoIosBed />
          <span>Stays</span></div>}   ><Stays /></Tab>
      </Tabs>
    </div>
  )
}
