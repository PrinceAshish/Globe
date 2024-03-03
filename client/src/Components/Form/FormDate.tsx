'use client'

import { useEffect, useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import moment from 'moment';
import 'react-day-picker/dist/style.css';
import { FormInput } from './FormInput';

export function FormDate(props: any) {
    const { label,name,value, onChange } = props;
    const [isPopperOpen, setIsPopperOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const minDate = new Date()
    const maxDate = new Date()
    maxDate.setMonth(minDate.getMonth() + 6);
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    const handleClick = (e: any) => {
        console.log('sss')
        if (inputRef.current && inputRef.current.contains(e.target)) {
            setIsPopperOpen(true)
            console.log('Clicked inside your element!');
        } else {
            setIsPopperOpen(false)
            console.log('Clicked outside your element!');
        }
    }

    const handleDatePicker = (date: any) => {
        let newDate = moment(date).format('DD-MM-YYYY')
        console.log(newDate)
        onChange(newDate,name)
        setIsPopperOpen(!isPopperOpen)
    }

    return (<div>
        <div ref={inputRef} className={'max-w-80 '}>
            <FormInput
                label={label}
                value={value}
                isReadOnly={true}
                placeholder="DD-MM-YYYY"
            // error={errors.email}
            />
        </div>
        {isPopperOpen ?
            <div className='relative z-50 bg-white border-1 w-80 '>
                <DayPicker
                    initialFocus={isPopperOpen}
                    // mode="single"
                    mode="single"
                    selected={value}
                    onSelect={handleDatePicker}
                    modifiersClassNames={{
                        selected: 'my-selected',
                        today: 'my-today'
                    }}
                    fromDate={minDate}
                    toDate={maxDate}
                />
            </div>
            : false}
    </div>
    )
}


