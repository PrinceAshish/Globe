import {Input} from "@nextui-org/react";
import { forwardRef } from "react";

export const FormInput = forwardRef((props:any) => {
    const {value,onChange,error,className,ref} = props;
    return(
        <Input
        {...props}
        variant="bordered"
        ref={ref}
        // labelPlacement={'outside'}
        size="md"
        radius="sm"
        value={value}
        onChange={onChange}
        isInvalid={error ? true: false}
        errorMessage={error}
        className={`mb-5 rounded ${className}`}
        />
    )
})