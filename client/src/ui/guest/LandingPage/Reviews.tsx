import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

export default function Reviews() {
  return (
    <div className='mt-16'>
        <div className="flex justify-between">
            <div className="text">
                <h2 className='text-2xl font-semibold mb-4'>Reviews</h2>
                <h4>What people says about Golobe facilities</h4>
            </div>
            <Button className='border-[#8DD3BB] rounded-md' variant="bordered">See All</Button>  
        </div>
        <div className="flex mt-10">
        <Card className="py-4 w-[425px]" >
            <CardHeader className="flex-col items-start">
                <p className="text-2xl font-bold">“A real sense of community, nurtured”</p>
                <p className="text-[#112211] text-sm">Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for ...</p>
            </CardHeader>
            <CardBody  className="overflow-visible py-2">
                <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1495562569060-2eec283d3391?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}"
                width={270}
                />
            </CardBody>
    </Card>
        </div>
    </div>
  )
}


