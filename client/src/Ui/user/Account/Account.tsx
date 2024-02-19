import { Button, Card, CardBody } from "@nextui-org/react"
import { MdEdit } from "react-icons/md"

const EachRow = ({ title, value, isEdit }:any) => {
    return (
        <div className="flex justify-between items-center">
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
    return (
        <div className="mt-6">
            <h2 className="text-3xl font-bold text-black">Account</h2>
            <Card className="rounded-sm shadow-md">
                <CardBody>
                    <EachRow title={'Name'} value={'Ashish'} isEdit />
                </CardBody>
            </Card>
        </div>
    )
}
