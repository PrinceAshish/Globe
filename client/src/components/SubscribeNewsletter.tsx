import React from 'react'
import { FormInput } from './Form/FormInput'
import { Button } from '@nextui-org/react'
import Image from 'next/image'

function SubscribeNewsletter() {
    return (
        <div className='bg-[#CDEAE1] rounded-2xl p-6 grid grid-cols-2 mx-24 items-end'>
            <div>
                <h3 className='text-color text-5xl font-semibold '>Subscribe <br/> Newsletter</h3>
                <div className='mt-5'>
                    <h4 className='text-color font-bold'>The Travel</h4>
                    <h4>Get inspired! Receive travel discounts, tips and behind the scenes stories.</h4>
                    <div className='flex gap-2 mt-6'>
                        <FormInput
                            name="email"
                            type="email"
                            label="Email"
                            className="bg-white w-1/2"
                        //    value={formData.email}
                        //    onChange={handleChange}
                        //    error={errors.email}
                        />
                        <Button className='bg-[#112211] text-white mt-1 rounded-md' size='lg'>Subscribe</Button>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <Image src={'/Images/mailbox.svg'} alt={'mailbox'} className='w-[350px] h-[280px]'  width={100} height={100} />
            </div>
        </div>
    )
}

export default SubscribeNewsletter
