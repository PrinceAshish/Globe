'use client'
import {Autocomplete, AutocompleteItem, Button} from "@nextui-org/react";
import { IoSwapHorizontal } from "react-icons/io5";
import airports from '../Data/airports'
import { useState } from "react";


export function SelecteAirCity(props:any){
  const [fromCity,setFromCity] = useState<any>('')
  const [toCity,setToCity] = useState<any>('')

    return(
      <div className="flex justify-between">
        <Autocomplete 
        label="From"
        variant='bordered' 
        size="md"
        scrollShadowProps={{
          isEnabled: false
        }}
        selectedKey={fromCity}
        onSelectionChange={setFromCity}
        >
          {airports
            .filter((city) => toCity !== city.city_name)
            .map((city) => (
              <AutocompleteItem key={city.city_name} value={city.city_name}>
                {city.city_name}
              </AutocompleteItem>
            ))}
        </Autocomplete>
      <Button isIconOnly className="bg-[#8DD3BB] text-white mt-2" aria-label="switch">
        <IoSwapHorizontal style={{fontSize: '20px',fontWeight: 'bold' }} />
      </Button>
      <Autocomplete 
        label="To"
        variant='bordered' 
        size="md"
        scrollShadowProps={{
          isEnabled: false
        }}
        selectedKey={toCity}
        onSelectionChange={setToCity}
        >
        {airports
            .filter((city) => fromCity !== city.city_name)
            .map((city) => (
              <AutocompleteItem key={city.city_name} value={city.city_name}>
                {city.city_name}
              </AutocompleteItem>
            ))}
      </Autocomplete>
    </div>
    )
}