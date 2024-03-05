import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

export default function CityAdCard() {
    return (
        <Card className="h-[400px]">
            <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="/Images/Flight/Ads/Melbourne.svg"
            />
            <CardFooter className="absolute z-10 bottom-1 flex-col !items-start">
                <div className='w-full'>
                    <div>
                        <p className="text-white font-bold">Melbourne</p>
                        <h4 className="text-white font-medium text-large">An amazing journey</h4>
                    </div>
                    <Button className='bg-primary text-color font-semibold w-full rounded mt-2'>Book Flight</Button>
                </div>
            </CardFooter>
        </Card>
    )
}


