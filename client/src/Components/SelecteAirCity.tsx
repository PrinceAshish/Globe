'use client'
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
import { IoSwapHorizontal } from "react-icons/io5";
import airports from '../data/airports'
import { useState } from "react";


export function SelecteAirCity(props: any) {
  const {formData, handleChange,setFormData}= props;
  const {from_city,to_city}  = formData;
  
  const handleSwitch = () => {
    
    setFormData((prevState:any) => ({ ...prevState, to_city: from_city }));
    setFormData((prevState:any) => ({ ...prevState, from_city: to_city }));
  }
  
  return (
    <div className="grid grid-cols-11 gap-x-2">
      <div className="col-span-5">
        <Autocomplete
          label="From"
          variant='bordered'
          size="md"
          scrollShadowProps={{
            isEnabled: false
          }}
          selectedKey={from_city}
          onSelectionChange={(value)=>handleChange(value,'from_city')}
        >
          {airports
            .filter((city) => to_city !== city.city_name)
            .map((city) => (
              <AutocompleteItem key={city.city_name} value={city.city_name}>
                {city.city_name}
              </AutocompleteItem>
            ))}
        </Autocomplete>
      </div>
      <div className="col-span-1 mx-auto">
        <Button isIconOnly className="bg-[#8DD3BB] text-white mt-2 rounded-full" aria-label="switch" onClick={handleSwitch}>
          <IoSwapHorizontal style={{ fontSize: '20px', fontWeight: 'bold' }} />
        </Button>
      </div>
      <div className="col-span-5">
        <Autocomplete
          label="To"
          variant='bordered'
          size="md"
          scrollShadowProps={{
            isEnabled: false
          }}
          selectedKey={to_city}
          onSelectionChange={(value)=>handleChange(value,'to_city')}
        >
          {airports
            .filter((city) => from_city !== city.city_name)
            .map((city) => (
              <AutocompleteItem key={city.city_name} value={city.city_name}>
                {city.city_name}
              </AutocompleteItem>
            ))}
        </Autocomplete>
      </div>
    </div>
  )
}