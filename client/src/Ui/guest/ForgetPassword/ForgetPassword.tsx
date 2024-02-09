'use client'

import { FormInput } from '@/components/Form/FormInput'
import AuthLayout from '@/ui/Layout/AuthLayout'
import { Button, Divider } from '@nextui-org/react'
import { FiChevronLeft } from "react-icons/fi";
import React, { useState } from 'react'
const initialState = {
    email: '',
    verify_code: '',
}

export default function ForgetPassword() {
    const [formData, setFormdata] = useState(initialState)
    const [errors, setErrors] = useState<any>({})
    const [isSubmited, setIsSubmited] = useState(false)

    const handleChange = (e: any) => {
        let { name, value } = e.target;
        setFormdata((prevState) => ({ ...prevState, [name]: value }))
        setErrors((prevState: any) => ({ ...prevState, [name]: '' }))
    }
    const handleSubmit  = () => {
        setIsSubmited(!isSubmited)
    }

    return (
        <AuthLayout>
            <div className='flex items-center font-medium gap-1 mt-16 cursor-pointer'>
                <FiChevronLeft size={23} />
                Back to login
            </div>
            <h2 className='text-color text-5xl my-4 font-bold'>{isSubmited ? 'Verify code' : 'Forgot your password?'}</h2>
            <p className='text-color '>{isSubmited ? 'An authentication code has been sent to your email.' : 'Don’t worry, happens to all of us. Enter your email below to recover your password'}</p>
            <div className='mt-11'>
                {isSubmited ? (<FormInput
                    name="verify_code"
                    label="Enter code"
                    value={formData.verify_code}
                    onChange={handleChange}
                    error={errors.verify_code}
                />) :
                    (<FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />)
                }
                <Button color='primary' className='w-full rounded-md text-color font-semibold mb-3 mt-3' onClick={handleSubmit}>{isSubmited ? 'Verify' : 'Submit'}</Button>
            </div>
            {isSubmited ? false : <div className='grid grid-cols-3 items-center text-center mt-10'>
                <Divider className="" />
                <span className='text-color '>Or login with</span>
                <Divider className="" />
            </div>}
        </AuthLayout>
    )
}


