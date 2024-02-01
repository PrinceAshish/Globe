import {Input} from "@nextui-org/react";

export function FormInput(props:any){
    const {value,onChange,error} = props;
    return(
        <Input
        variant="bordered"
        labelPlacement={'outside'}
        size="md"
        radius="sm"
        value={value}
        onChange={onChange}
        isInvalid={error ? true: false}
        errorMessage={error}
        {...props}
        className="mb-5"
        />
    )
}