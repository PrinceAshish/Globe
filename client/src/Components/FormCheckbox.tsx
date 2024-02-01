import { Checkbox } from "@nextui-org/react";

export function FormCheckbox(props: any) {
    const { value, onChange, error,title,className } = props;
    return (
        <div className={`mb-5 ${className}`}>
            <Checkbox
                isSelected={value}
                onChange={onChange}
                radius="sm"
                color="primary"
                {...props}
            >
                {title}
            </Checkbox>
            {error ? <p className="text-error">{error}</p>  : false}
        </div>
    )
}