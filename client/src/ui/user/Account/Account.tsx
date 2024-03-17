import { UseLoginStore } from "@/ui/guest/Login/UseLoginStore"
import { Button, Card, CardBody } from "@nextui-org/react"
import { MdEdit } from "react-icons/md"

const EachRow = ({ title, value, isEdit }:any) => {
    return (
        <div className="flex justify-between items-center mb-6">
            <div>
                <h5 className="text-color text-sm">{title}</h5>
                <h5 className="text-color font-semibold text-xl">{value}</h5>
            </div>
            <div>
                {isEdit ? <Button variant="bordered" color="primary" className="rounded-md" >
                    <MdEdit size={20} /> Change
                </Button> : false}
            </div>
        </div>
    )
}
export default function Account() {
    const customerData = UseLoginStore((state: any) => state.customerData)
    return (
        <div className="mt-6">
            <h2 className="text-3xl font-bold text-black mb-3">Account</h2>
            <Card className="rounded-sm shadow-md">
                <CardBody>
                    <EachRow title={'Name'} value={customerData.first_name + ' ' + customerData.last_name} isEdit />
                    <EachRow title={'Email'} value={customerData.email} isEdit />
                    <EachRow title={'Password'} value={'******'} isEdit />
                    <EachRow title={'Phone number'} value={'+91 '+customerData.mobile_number } isEdit />
                    <EachRow title={'Address'} value={customerData.address || '-----'} isEdit />
                </CardBody>
            </Card>
        </div>
    )
}
