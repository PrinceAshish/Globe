import React from 'react'
import { FaCcVisa } from 'react-icons/fa'
import AddCardModal from './AddCardModal'

const EachChooise = ({ title, descripation, isActive }: any) => {
    return (
        <div className={`${isActive ? "bg-[#8DD3BB]" : "border border-primary"} w-full p-4 rounded-xl flex justify-between items-center mb-2`}>
            <div className='flex items-center'>
                <FaCcVisa />
                <h2 className='text-color text-base font-semibold ml-5'>{title}</h2>
                <h3 className='text-color text-sm ml-3'>{descripation}</h3>
            </div>
            <div className={`${isActive ? "border-white" : "border-primary"} border-2 w-5 h-5 grid place-items-center rounded-full`}>
                {isActive ? <div className='bg-white rounded-full w-3 h-3'></div> : false}
            </div>
        </div>
    )
}

export default function UserCards() {
    return (
        <div className='mt-12 shadow-lg p-4'>
            <EachChooise title={"**** **** **62 5314"} descripation={'02/27'} isActive />
            <AddCardModal/>
        </div>
    )
}


