'use client'

import { FormCheckbox } from '@/components/FormCheckbox'
import { FormInput } from '@/components/FormInput'
import { Button, Divider } from '@nextui-org/react'
import React, { useState } from 'react'

const initialState = {
    email: '',
    password: '',
    rememberMe: false,
}

export default function Login() {
    const [formData, setFormdata] = useState(initialState)
    const [errors, setErrors] = useState<any>({})

    const handleChange = (e: any) => {
        let { name, value } = e.target;
        setFormdata((prevState) => ({ ...prevState, [name]: value }))
        setErrors((prevState: any) => ({ ...prevState, [name]: '' }))
    }
    const handleChage2 = (e: any) => {
        let value = e.target.checked
        setFormdata((prevState) => ({ ...prevState, rememberMe: value }))
        setErrors((prevState: any) => ({ ...prevState, rememberMe: '' }))
    }

    return (
        <>
            <div className="mt-8">
                <h2 className='text-5xl text-color font-bold  '>Login</h2>
                <p className='text-base text-color mt-4'>Login to access your Golobe account</p>
                <div className='mt-12'>
                    <FormInput
                        name="email"
                        type="email"
                        label="Email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                    />
                    <div className="flex justify-between items-start">
                        <FormCheckbox
                            name="rememberMe"
                            className={''}
                            value={formData.rememberMe}
                            onChange={handleChage2}
                            error={errors.rememberMe}
                            title={'Remember me'}
                        />
                        <span className='text-error hover:underline cursor-pointer'>Forgot Password</span>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <Button color='primary' className='w-full rounded-md text-color font-semibold mb-4'>Login</Button>
                <span className='text-color font-medium'>Don’t have an account? <span className='text-[#FF8682] font-semibold hover:underline cursor-pointer'> Sign up </span></span>
            </div>
            <div className='grid grid-cols-3 items-center text-center mt-10'>
                <Divider className="" />
                <span className='text-color '>Or login with</span>
                <Divider className="" />
            </div>
        </>
    )
}
