import React from 'react'
import Breadcrumb from '../Breadcrumb'
import { BiMapPin, BiShareAlt } from 'react-icons/bi'
import { currencyFormater } from '@/utills/commonFunction'
import { Button } from '@nextui-org/react'
import TermsConditions from './TermsConditions'
import TicketDesign from './TicketDesign'

export default function Ticket() {
    return (
        <div className='w-full px-28 mt-10'>
            <div>
                <Breadcrumb />
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-color text-3xl font-bold'>Emirates A380 Airbus</h3>
                    <div className='flex gap-x-2 items-center mt-2'>
                        <BiMapPin />
                        <span className='text-color text-sm '>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</span>
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                    <h3 className='text-color text-3xl font-bold '>{currencyFormater(5999)}</h3>
                    <div className='flex items-center gap-x-3 mt-2'>
                        <Button isIconOnly className='bg-white border border-primary rounded'>
                            <BiShareAlt style={{ fontSize: 25 }} />
                        </Button>
                        <Button className='bg-primary text-color font-semibold rounded'>
                            Download
                        </Button>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
            <TicketDesign/>
            <TermsConditions />
            </div>
        </div>
    )
}


