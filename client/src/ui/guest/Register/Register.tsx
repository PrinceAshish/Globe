'use client'

import { FormCheckbox } from '@/components/Form/FormCheckbox'
import { FormInput } from '@/components/Form/FormInput'
import { FormInputNumber } from '@/components/Form/FormInputNumber'
import AuthLayout from '@/ui/Layout/AuthLayout'
import { Button, Divider } from '@nextui-org/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRegistrationStore } from './useRegisterStore'
import { useRouter } from 'next/navigation';

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
    const saveUser = useRegistrationStore((state: any) => state.saveUser);
    const checkUserExist = useRegistrationStore((state: any) => state.checkUserExist);
    const checkUserExist2 = useRegistrationStore((state: any) => state.checkUserExist2);
    const UserExist = useRegistrationStore((state: any) => state.UserExist);

    const router = useRouter()

    const [formData, setFormdata] = useState(initialState)
    const [errors, setErrors] = useState<any>({})

    const handleChange = (e: any) => {
        let { name, value } = e.target;
        setFormdata((prevState) => ({ ...prevState, [name]: value }))
        setErrors((prevState: any) => ({ ...prevState, [name]: '' }))
    }
    const handleChage2 = (e: any) => {
        let value = e.target.checked
        setFormdata((prevState) => ({ ...prevState, agree: value }))
        setErrors((prevState: any) => ({ ...prevState, agree: '' }))
    }
    const handleUserExist = () => {
        let dataToSend = {
            email: formData.email,
        }
        checkUserExist(dataToSend, {
            success: ()=>{
                setErrors((prevState: any) => ({ ...prevState, email: 'User exist with this email' }))
            },
            error: () => {}
        })
    }
    const handleUserExist2 = () => {
        let dataToSend = {
            mobile_number: formData.phone_number,
        }
        checkUserExist2(dataToSend, {
            success: ()=>{
                setErrors((prevState: any) => ({ ...prevState, phone_number: 'User exist with this Mobile Number' }))
            },
            error: () => {}
        })
    }
    const isValid = () => {
        const errors: any = {};
        if (!formData.first_name) {
            errors.first_name = 'First Name is required';
        }
        if (!formData.last_name) {
            errors.last_name = 'Last Name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        }
        if (!formData.phone_number) {
            errors.phone_number = 'Moblie Number is required';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }
        if (!formData.confirm_password) {
            errors.confirm_password = 'Confirm Password is required';
        }
        if (formData.password !== formData.confirm_password) {
            errors.password = "Password Not Match";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }
    const handleSubmit = () => {
        if (isValid()) {
            const sendToData = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                mobile_number: phone_number,
                password: password
            }
            saveUser(sendToData, {
                success: () => {
                    router.push('/login')
                },
                error: () => { }
            });
        }
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
                            error={errors.last_name}
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
                            onBlur={handleUserExist}
                        />
                        <FormInputNumber
                            name="phone_number"
                            label="Phone Number"
                            value={phone_number}
                            onChange={handleChange}
                            maxLength={10}
                            error={errors.phone_number}
                            onBlur={handleUserExist2}
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
                <Button color='primary' className='w-full rounded-md text-color font-semibold mb-4' onClick={handleSubmit}>Create account</Button>
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
