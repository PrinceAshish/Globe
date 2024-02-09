'use client'

import { FormCheckbox } from '@/components/FormCheckbox'
import { FormInput } from '@/components/FormInput'
import { FormInputNumber } from '@/components/FormInputNumber'
import AuthLayout from '@/ui/Layout/AuthLayout'
import { Button, Divider } from '@nextui-org/react'
import Link from 'next/link'
import React, { useState } from 'react'

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: '',
    agree: false,
}
function Register() {
    const [formData, setFormdata] = useState(initialState)
    const [errors, setErrors] = useState<any>({})

    const handleChange = (e: any) => {
        let { name, value } = e.target;
        console.log(name)
        console.log(value)
        setFormdata((prevState) => ({ ...prevState, [name]: value }))
        setErrors((prevState: any) => ({ ...prevState, [name]: '' }))
    }
    const handleChage2 = (e: any) => {
        let value = e.target.checked
        setFormdata((prevState) => ({ ...prevState, agree: value }))
        setErrors((prevState: any) => ({ ...prevState, agree: '' }))
    }
    const { first_name, last_name, email, phone_number, password, confirm_password, agree } = formData;
    return (
        <AuthLayout needInRight>
            <div className="mt-8">
                <h2 className='text-5xl text-color font-bold  '>Sign up</h2>
                <p className='text-base text-color mt-4'>Let’s get you all st up so you can access your personal account.</p>
                <div className='mt-12'>
                    <div className='flex gap-5'>
                        <FormInput
                            name="first_name"
                            label="First Name"
                            value={first_name}
                            onChange={handleChange}
                            error={errors.first_name}
                        />
                        <FormInput
                            name="last_name"
                            label="Last Name"
                            value={last_name}
                            onChange={handleChange}
                            error={errors.password}
                        />
                    </div>
                    <div className='flex gap-5'>
                        <FormInput
                            name="email"
                            type="email"
                            label="Email"
                            value={email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <FormInputNumber
                            name="phone_number"
                            label="Phone Number"
                            value={phone_number}
                            onChange={handleChange}
                            maxLength={10}
                            error={errors.phone_number}
                        />
                    </div>
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={password}
                        onChange={handleChange}
                        error={errors.password}
                    />
                    <FormInput
                        name="confirm_password"
                        type="password"
                        label="Confirm Password"
                        value={confirm_password}
                        onChange={handleChange}
                        error={errors.confirm_password}
                    />
                    <div className="flex items-start">
                        <FormCheckbox
                            name="agree"
                            className={''}
                            value={agree}
                            onChange={handleChage2}
                            error={errors.agree}
                        />
                        <span className='text-color '>I agree to all the <span className='text-error hover:underline cursor-pointer'>Terms</span> and <span className='text-error hover:underline cursor-pointer'>Privacy Policies</span></span>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <Button color='primary' className='w-full rounded-md text-color font-semibold mb-4'>Create account</Button>
                <span className='text-color font-medium'>Already have an account? <Link href={'/login'} className='text-[#FF8682] font-semibold hover:underline cursor-pointer'>Login</Link></span>
            </div>
            <div className='grid grid-cols-3 items-center text-center mt-10'>
                <Divider className="" />
                <span className='text-color '>Or Register with</span>
                <Divider className="" />
            </div>
        </AuthLayout>
    )
}

export default Register
