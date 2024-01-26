'use client'
import { Input } from "@nextui-org/react";
import Datepicker from "react-tailwindcss-datepicker";
import { FormInput } from "./FormInput";

export function FormDate(props:any){
    const {value,onChange} = props;
    const minDate = new Date()
    const maxDate = new Date()
    maxDate.setMonth(minDate.getMonth() + 3);
    return(<div className="">
        <FormInput
        value={value.startDate}
        /> 
        </div>
    )
}
