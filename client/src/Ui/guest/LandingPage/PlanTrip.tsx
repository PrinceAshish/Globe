'use client'
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import React from 'react'

const test = ['Istanbul, Turkey','Sydney, Australia','Baku, Azerbaijan','Malé, Maldives','Paris, France','New York, US','London, UK','Tokyo, Japan','Dubai, UAE']
export default function PlanTrip() {
  return (
    <div className=''>
        <div className="flex justify-between items-center w-full">
            <div className="">
                <h3 className='text-black text-3xl font-semibold mb-4'>Plan your perfect trip</h3>
                <h3 className='text-[#112211] text-base '>Search Flights & Places Hire to our most popular destinations</h3>
            </div> 
            <div className="">
            <Button className='border-[#8DD3BB] rounded-md' variant="bordered">See more places</Button>  
            </div>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-8">
            {test.map((m,idx)=>(
                <Card shadow="sm" key={idx} isPressable onPress={() => console.log("item pressed")}>
                <CardBody className="overflow-visible ">
                    <div className="flex items-center gap-4">    
                    <Image
                    shadow="sm"
                    radius="lg"
                    className="w-[90px] h-[90px] object-cover"
                    src={'https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    />
                    <div className="">
                        <h5 className='text-[#112211] text-base font-semibold'>{m}</h5>
                        <h5 className='text-sm '>Flights &#x2022; Hotels &#x2022; Resorts</h5>
                    </div>
                    </div>
                </CardBody>
            </Card>
            ))}
            
            </div>
    </div>
  )
}
