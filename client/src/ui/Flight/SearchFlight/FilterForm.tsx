'use client'

import { NumberToTimeConverter, currencyFormater } from '@/utills/commonFunction';
import { Accordion, AccordionItem, Checkbox, Divider, Slider, SliderValue } from '@nextui-org/react'
import React, { useState } from 'react'

const intialState = {
  price_range: [1000, 6000],
  time_range: [0, 700],
  rating: '',
  AirLines: [
    { label: 'Emirated', ischecked: false },
    { label: 'Fly Dubai', ischecked: false },
    { label: 'Qatar', ischecked: false },
    { label: 'Etihad', ischecked: false },
  ],
  sort_by: [
    { label: 'Cheapest', ischecked: false },
    { label: 'Expensive', ischecked: false },
    { label: 'Best Rated', ischecked: false },
    { label: 'Quickest', ischecked: false },
  ]
}
export default function FilterForm() {
  const [formData, setFormData] = useState(intialState)
  // const [value, setValue] = React.useState<any>([1000, 6000]);
  // const [time, setTime] = React.useState<any>([0, 700]);
  // const [selectedRating, SetselectedRating] = React.useState('');
  const data = ['0+', '1+', '2+', '3+', '4+']
  const handleAirLinesChange = (e: any, index: any) => {
    const updatedAirLines = [...formData.AirLines];
    updatedAirLines[index].ischecked = e;
    setFormData((prevState) => ({ ...prevState, AirLines: updatedAirLines }));
  }
  const handleSortByChange = (e: any, index: any) => {
    const updatedSortBy = [...formData.sort_by];
    updatedSortBy[index].ischecked = e;
    setFormData((prevState) => ({ ...prevState, sort_by: updatedSortBy }));
  }

  const handleChange = (value:any,name:any)=>{
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  return (
    <div className='col-span-2'>
      <h2 className='text-xl font-semibold'>Filters</h2>
      <div className='px-2'>
        <div>
          <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Price">
              <Slider
                label=""
                size="sm"
                formatOptions={{ style: "currency", currency: "USD" }}
                step={100}
                maxValue={50000}
                minValue={1000}
                value={formData.price_range}
                onChange={(value)=> handleChange(value,'price_range')}
                className="max-w-md"
              />
              <div className='flex justify-between'>
                <span>{currencyFormater(formData.price_range[0])}</span>
                <span>{currencyFormater(formData.price_range[1])}</span>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <Divider className='mt-2' />
        {/* 1/2 done */}
        <div>
          <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Departure Time">
              <Slider
                label=""
                size="sm"
                step={10}
                maxValue={1430}
                minValue={0}
                value={formData.time_range}
                onChange={(value)=>handleChange(value,'time_range')}
                className="max-w-md"
              />
              <div className='flex justify-between '>
                <span><NumberToTimeConverter selectedNumber={formData.time_range[0]} /></span>
                <span><NumberToTimeConverter selectedNumber={formData.time_range[1]} /></span>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <Divider className='mt-2' />
        {/* done */}
        <div className=''>
          <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Rating">
              <div className='flex gap-x-3'>
                {data.map((d,index) => (
                  <div key={index} className={`border-primary border w-10 h-8 grid place-items-center font-semibold rounded cursor-pointer ${formData.rating === d ? 'text-white bg-primary' : 'text-color'}`} onClick={() => handleChange(d,'rating')}>
                    {d}
                  </div>
                ))}
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <Divider className='mt-2' />
        {/* done */}
        <div className=''>
          <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Airlines">
              <div className='flex flex-col gap-y-2'>
                {formData.AirLines.map((data, index) => (
                  <Checkbox key={index} isSelected={data.ischecked} onValueChange={(e) => handleAirLinesChange(e, index)}>
                    {data.label}
                  </Checkbox>
                ))}
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <Divider className='mt-2' />
        {/* done */}
        <div className=''>
          <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Accordion 1" title="Sort By">
              <div className='flex flex-col gap-y-2'>
                {formData.sort_by.map((data, index) => (
                  <Checkbox key={index} isSelected={data.ischecked} onValueChange={(e) => handleSortByChange(e, index)}>
                    {data.label}
                  </Checkbox>
                ))}
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}


