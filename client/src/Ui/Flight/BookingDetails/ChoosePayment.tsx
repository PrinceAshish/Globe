import React from 'react'

const EachChooise = ({title,descripation,isActive}:any) => {
    return (
        <div className={`${isActive ? "bg-[#8DD3BB]" : "border border-primary"} w-full p-4 rounded-xl flex justify-between items-center mb-2`}>
            <div>
                <h2 className='text-color text-base font-semibold'>{title}</h2>
                <h3 className='text-color text-sm'>{descripation}</h3>
            </div>
            <div className={`${isActive ? "border-white":"border-primary"} border-2 w-5 h-5 grid place-items-center rounded-full`}>
                {isActive ? <div className='bg-white rounded-full w-3 h-3'></div>:false}
            </div>
        </div>
    )
}
export default function ChoosePayment() {
    return (
        <div className='mt-10 shadow-lg p-4 w-full'>
            <EachChooise title={'Pay using UPI'} descripation={'Pay with any upi app'} isActive />
            <EachChooise title={'Pay using Card'} descripation={'Pay with VISA or Master Card'}  />
        </div>
    )
}


