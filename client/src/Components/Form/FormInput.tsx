import {Input} from "@nextui-org/react";

export function FormInput(props:any){
    const {value,onChange,error,className} = props;
    return(
        <Input
        {...props}
        variant="bordered"
        // labelPlacement={'outside'}
        size="md"
        radius="sm"
        value={value}
        onChange={onChange}
        isInvalid={error ? true: false}
        errorMessage={error}
        className={`mb-5 ${className}`}
        />
    )
}