import { Button, Card, CardFooter, CardHeader ,Image} from '@nextui-org/react'
import React from 'react'

export default function ChooseImage() {
  return (
    <div className='flex justify-between gap-8 mt-20'>
        <Card className="w-1/2 h-[560px] col-span-12 sm:col-span-5">
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover custom-gradient"
                src="/Images/Choose_Flight.png"
            />
            <CardFooter className="absolute bottom-0 flex justify-center ">
                <div className=" w-3/4 text-center text-white">
                    <h3 className='text-4xl font-bold'>Flights</h3>
                    <p>Search Flights & Places Hire to our most popular destinations</p>
                    <Button className='bg-[#8DD3BB] rounded-md text-[#112211] font-semibold mt-2'>Show Filghts</Button>  
                </div>
            </CardFooter>
        </Card>
        <Card className="w-1/2 h-[560px] col-span-12 sm:col-span-5">
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover custom-gradient"
                src="/Images/Choose_Hotel.png"
            />
            <CardFooter className="absolute bottom-0 flex justify-center ">
                <div className=" w-3/4 text-center text-white">
                    <h3 className='text-4xl font-bold'>Hotels</h3>
                    <p>Search hotels & Places Hire to our most popular destinations</p>
                    <Button className='bg-[#8DD3BB] rounded-md text-[#112211] font-semibold mt-2'>Show Hotels</Button>  
                </div>
            </CardFooter>
        </Card>
    </div>  
  )
}

