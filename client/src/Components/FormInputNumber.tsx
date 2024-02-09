import {Input} from "@nextui-org/react";

export function FormInputNumber (props:any){
    const {value,onChange,error} = props;
    const handleInputChange = (e:any) => {
        const inputValue = e.target.value.replace(/\D/g, '');
        let data = {
            target: {
                name: props.name,
                value: inputValue,
            }
        }
        onChange(data);
    };
    return(
        <Input
        {...props}
        variant="bordered"
        // labelPlacement={'outside'}
        size="md"
        radius="sm"
        value={value}
        onChange={handleInputChange}
        isInvalid={error ? true: false}
        errorMessage={error}
        className="mb-5"
        />
    )
}

