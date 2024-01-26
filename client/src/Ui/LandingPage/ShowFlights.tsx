'use client'

import React from 'react'
import { IoIosBed } from 'react-icons/io'
import { IoAirplaneSharp } from 'react-icons/io5'
import {Tabs, Tab} from "@nextui-org/react"; 
import FlightBooking from './FlightBooking';

const TAB = ['FLIGHT','hotel']


export default function ShowFlights() {
  const [selected, setSelected] = React.useState(TAB[0]); 
  console.log(selected)
  return (
    <div className='w-[73%] h-[280px] bg-white rounded-2xl mx-auto relative bottom-14 left-2 flex flex-col px-8 pt-5'>
      {/* header */}
      <div className="">
      <Tabs  classNames={{
          tabList: "gap-10 w-full relative rounded-none p-0",
          cursor: "w-full bg-[#8DD3BB] h-1 ",
          tab: "max-w-fit px-0 h-12",
        }} variant={'underlined'} aria-label="Tabs variants" >
          <Tab title={<div className="flex items-center text-[14px] font-semibold text-[#112211] " >
            <IoAirplaneSharp style={{ color: '#112211',marginRight:'3px',fontSize: '18px' }}/> Find Flight
          </div>}>
            <FlightBooking/>
          </Tab>
          <Tab title={<div className="flex items-center text-[14px] font-semibold text-[#112211]" >
                                <IoIosBed style={{ color: '#112211',marginRight:'3px',fontSize: '18px' }}/> Find Stays
                            </div>}>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}




{/* <motion.div animate={isOpen ? "open" : "closed"} variants={variants} >
          <div  className="w-28 outline outline-3 outline-[#8DD3BB] mt-3 transition-transform ease-in-out duration-300"></div>
        </motion.div> */}