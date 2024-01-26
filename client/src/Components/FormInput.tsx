import {Input} from "@nextui-org/react";

export function FormInput(props:any){
    const {value,onChange} = props;
    return(
        <Input
        label='From'
        type="date"
        variant="bordered"
        // isReadOnly
        size='md'
        color='default'
        radius='sm'
        // labelPlacement='outside'
        // description='this is input'
        // endContent
        // startContent
        // isClearable
        // isInvalid={true}
        // errorMessage="Please enter a valid email"
        value={value}
        onValueChange={onChange}
        className="max-w-xs"
        />
    )
}