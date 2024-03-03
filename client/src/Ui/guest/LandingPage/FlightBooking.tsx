'use client'
import { FormDate } from '@/components/Form/FormDate';
import { FormInput } from '@/components/Form/FormInput'
import { SelecteAirCity } from '@/components/SelecteAirCity';
import { Button, Select, SelectItem, Selection } from '@nextui-org/react';
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';

const plan: any[] = [
  { label: 'One Way', value: '0' },
  { label: 'return', value: '1' },
]

const Class: any[] = [
  { label: 'Economy Class', value: '0' },
  { label: 'Business Class', value: '1' },
  { label: 'First Class', value: '2' },
]

const intialState = {
  from_city: '',
  to_city: '',
  trip_way: '1',
  trip_class: '1',
  start_date: '',
  end_date: '',
}


function FlightBooking() {
  const [formData, setFormData] = React.useState(intialState);
  const [errors, setErrors] = React.useState<any>({});


  const handleChange = (value: any, name: any) => {
    console.log(name)
    console.log(value)
    let _value = value;
    value === null ? _value = '' : false
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState: any) => ({ ...prevState, [name]: '' }));
  }
  console.log(formData);
  const { trip_class, trip_way, start_date, end_date } = formData;
  return (
    <div>
      <div className="grid grid-cols-5 gap-x-4 mt-8">
        <div className='col-span-3'>
          <SelecteAirCity formData={formData} setFormData={setFormData} handleChange={handleChange} errors={errors} />
        </div>
        <div className='col-span-1'>
          <Select
            label="Trip"
            className="max-w-xs"
            variant='bordered'
            selectedKeys={trip_way}
            onChange={(e) => handleChange(e.target.value, 'trip_way')}
          >
            {plan.map((d) => (
              <SelectItem key={d.value} value={d.value}>
                {d.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className='col-span-1'>
          <Select
            label="Class"
            className="max-w-xs"
            variant='bordered'
            selectedKeys={trip_class}
            onChange={(e) => handleChange(e.target.value, 'trip_class')}
          >
            {Class.map((d) => (
              <SelectItem key={d.value} value={d.value}>
                {d.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <div className='flex justify-between  mt-7'>
        <div className='w-full grid grid-cols-3 space-x-5'>
          <FormDate
            name='start_date'
            label={'Departure Date'}
            value={start_date}
            onChange={handleChange}
          />
          {trip_way === '1' ? <FormDate
            name='end_date'
            label={'Return Date'}
            value={end_date}
            onChange={handleChange}
          /> : false}
        </div>
        <Button className="bg-[#8DD3BB] text-white mt-2 rounded" aria-label="switch">
          Serach
          <BiSearch style={{ fontSize: '20px', fontWeight: 'bold' }} />
        </Button>
      </div>
    </div>
  )
}

export default FlightBooking
