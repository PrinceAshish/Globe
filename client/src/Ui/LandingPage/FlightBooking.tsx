'use client'
import { FormDate } from '@/Components/FormDate';
import { FormInput } from '@/Components/FormInput'
import { SelecteAirCity } from '@/Components/SelecteAirCity';
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Input, Popover, PopoverContent, PopoverTrigger, Select, SelectItem ,Selection, User} from '@nextui-org/react';
import React, { useState } from 'react'
import {animals} from '../../app/Landing/Component/data'

const plan: any[]=[
    {label: 'One Way',value:'0'},
    {label: 'return',value:'1'},
]

function FlightBooking() {
  const [value, setValue] = React.useState<string>('1');
  const [values, setValues] = React.useState<Selection>(new Set(["cat", "dog"]));
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [date, setDate] = useState({ 
    startDate: null ,
    endDate: null 
    })
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
    return (
    <div>
      <div className="flex mt-8">
        <SelecteAirCity/>
        <Select 
        label="Trip" 
        className="max-w-xs" 
        variant='bordered'
        selectedKeys={value}
        onChange={handleSelectionChange}
      >
        {plan.map((d) => (
          <SelectItem key={d.value} value={d.value}>
            {d.label}
          </SelectItem>
        ))}
      </Select>
      {/* <FormDate 
        value={date}
        onChange={(newDate:any)=>setDate(newDate)}
      /> */}
      </div>
    </div>
  )
}

export default FlightBooking
