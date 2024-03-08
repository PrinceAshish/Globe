'use client'

import { FormCheckbox } from '@/components/Form/FormCheckbox'
import { FormDate } from '@/components/Form/FormDate'
import { FormInput } from '@/components/Form/FormInput'
import { FormInputNumber } from '@/components/Form/FormInputNumber'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import React, { useState } from 'react'
import { FaCcVisa } from 'react-icons/fa'

const initialState = {
    card_number: '',
    card_owner_name: '',
    cvv: '',
    exp_date: '',
    save_info: false,
}
export default function AddCardModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <div className='border-dashed border-primary border-3 grid place-items-center h-40 cursor-pointer ' onClick={onOpen}>
                <div className='flex flex-col items-center gap-y-2'>
                    <div className='border-primary border rounded-full grid place-items-center text-4xl text-primary w-12 h-12'>
                        +
                    </div>
                    <h2 className='text-color text-sm font-medium'>Add a new card</h2>
                </div>
            </div>
            <ModalForm isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    )
}

const ModalForm = ({ isOpen, onOpenChange }: any) => {
    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState<any>({})
    const handleChange = (e: any) => {
        let { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }))
        setErrors((prevState: any) => ({ ...prevState, [name]: '' }))
    }
    const handleChange2 = (e: any) => {
        let { checked } = e.target;
        setFormData((prevState) => ({ ...prevState, save_info: checked }))
        setErrors((prevState: any) => ({ ...prevState, save_info: '' }))
    }
    const handleDateChange = (value: any, name: any) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        setErrors((prevState: any) => ({ ...prevState, [name]: '' }));
    }
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
            size='lg'
            className='pb-10'
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-color font-bold text-3xl">Add a new Card</ModalHeader>
                        <ModalBody>
                            <FormInputNumber
                                label="Card Number"
                                // placeholder="4242 4242 4242"
                                name="card_number"
                                value={formData.card_number}
                                onChange={handleChange}
                                error={errors.card_number}
                                endContent={
                                    <FaCcVisa className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                maxLength={12}
                            />
                            <div className='flex gap-x-4'>
                                <FormInputNumber
                                    label="CCV"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    error={errors.cvv}
                                    maxLength={3}
                                />
                                <FormDate
                                    label="Exp. Date"
                                    name="exp_date"
                                    value={formData.exp_date}
                                    onChange={handleDateChange}
                                    error={errors.exp_date}
                                />
                            </div>
                            <FormInput
                                label="Name on Card"
                                name="card_owner_naem"
                                value={formData.card_owner_name}
                                onChange={handleChange}
                                error={errors.card_owner_namne}
                            />
                            <FormCheckbox
                                name="save_info"
                                value={formData.save_info}
                                onChange={handleChange2}
                                error={errors.save_info}
                                title={'Securely save my information for 1-click checkout'}
                            />
                            <Button className='bg-primary w-full rounded text-color font-semibold'>
                                Add Card
                            </Button>
                            <span className='text-center text-xs text-color'>
                                By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.
                            </span>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}


