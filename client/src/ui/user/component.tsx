import { Button, Divider } from "@nextui-org/react"
import Image from "next/image"
import { BiTrash } from "react-icons/bi";
import { BsPlusCircleDotted } from "react-icons/bs";

export const EachFlight = ({tickets}: any) => {
    const EachDetails = ({ title, value, icons }: any) => {
        let path: string;
        switch (icons) {
            case 'date':
                path = '/Images/Icons/calendar_primary.svg'
                break;
            case 'clock':
                path = '/Images/Icons/timmer_primary.svg'
                break;
            case 'gate':
                path = '/Images/Icons/gate_primary.svg'
                break;
            case 'seat':
                path = '/Images/Icons/seat_primary.svg'
                break;
            default:
                path = '/Images/Icons/date_primary.svg'
                break;
        }
        return (
            <div className="flex ">
                <div className="bg-[#EBF6F2] p-1 h-fit">
                    <Image src={path} alt="icons" width={22} height={22} />
                </div>
                <div className="flex flex-col ml-1">
                    <span className="text-color text-sm ">{title}</span>
                    <span className="text-color text-sm font-semibold">{value}</span>
                </div>
            </div>
        )
    }
    // console.log(tickets)
    return (
        <div className='grid grid-cols-4'>
            <div className="flex col-span-3">
                {/* Image */}
                <img src="https://s3-alpha-sig.figma.com/img/5043/9fed/0f6d702c22dd1831e67b0be86ea8547a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4-GZNHPy4xm3pcLsUlCOJ6Udl-l25L7vKrkCJg2qprCXGBFvFec2IHCEU-9hw5wZWmptMHv4xUijJsiea73-JrW723hXVFrgEMHqACy9W8OsixyatZPwrlx3CrAzPoOJi~2lGuo7e6s~8wdoDUi7zL~38xNSNHu3gRSkA92YTZP2QRoIqKnB5yPJg0Im0G2CSMv5mJ3VcBsALcCsgWh3ihkJgK4F5OugOXwlVKQ8x~yD23MV4QVoUV91el52tZ8rjRqVhCZxNTwhKLCS1hRF2m2y8r8P1N6Gzbuwl3gzYlu4kgH2PKdXKeSlUfF2R5-zldOS8MPCRas0oSeghHEbA__" alt="logo" className='w-20 h-20 border-primary border py-3 px-1 rounded-lg' />
                {/* Flight from */}
                <div className="flex items-center gap-x-4 ml-6 ">
                    <div>
                        <h6 className='text-color text-base'>Newark(EWR)</h6>
                        <h4 className='text-color text-lg font-semibold'>12:00 pm</h4>
                    </div>
                    <span className='font-semibold'>---</span>
                    <div>
                        <h6 className='text-color text-base'>Newark(EWR)</h6>
                        <h4 className='text-color text-lg font-semibold'>6:00 pm</h4>
                    </div>
                </div>
                <Divider orientation='vertical' className='bg-primary h-14 my-auto ml-5' />
                {/* Flight details  */}
                <div className="grid grid-cols-2 ml-5  w-1/4">
                    <EachDetails title={'Date'} value={'12-11-24'} icons={'date'} />
                    <EachDetails title={'Gate'} value={'A12'} icons={'gate'} />
                    <EachDetails title={'Flight time'} value={'12:30'} icons={'clock'} />
                    <EachDetails title={'Seat no.'} value={'128'} icons={'seat'} />
                </div>
            </div>
            <div className="col-span-1 flex items-center justify-center">
                <Button className="rounded-sm bg-primary text-color font-semibold">Download Ticket</Button>
            </div>

        </div>
    )
}
export const EachHotel = ({ title, value, icons }: any) => {
    const EachDetails = ({ title, value, icons }: any) => {
        let path: string;
        switch (icons) {
            case 'date':
                path = '/Images/Icons/calendar_primary.svg'
                break;
            case 'clock':
                path = '/Images/Icons/timmer_primary.svg'
                break;
            case 'gate':
                path = '/Images/Icons/gate_primary.svg'
                break;
            case 'seat':
                path = '/Images/Icons/seat_primary.svg'
                break;
            default:
                path = '/Images/Icons/date_primary.svg'
                break;
        }
        return (
            <div className="flex ">
                <div className="bg-[#EBF6F2] p-1 h-fit">
                    <Image src={path} alt="icons" width={22} height={22} />
                </div>
                <div className="flex flex-col ml-1">
                    <span className="text-color text-sm ">{title}</span>
                    <span className="text-color text-sm font-semibold">{value}</span>
                </div>
            </div>
        )
    }
    return (
        <div className='grid grid-cols-4'>
            <div className="flex col-span-3">
                {/* Image */}
                <img src="https://s3-alpha-sig.figma.com/img/a8f8/a3bd/0fbb63b80b094364944041f8aa0cad46?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pXZMxW~j2Y0AfzIL6Dw95YSObOMUZyU47VTWn~h848cdVfAs8z8cF3xq2aA0z6x6Uw9TUJkZiPEhXvIJklY4yh7wlTsFpCrcnwY8a7nW8-~vMnW9p4-NDRQxwYMI0TPviplEywE5d2KlNnFJUtkeDuse4Qel1gbLl0UWulTnzZsaSqcEunnQwaUV7ngdM1BWvmxpfTWtvb-zkrcGH-NIMX7yZdayFg2Hm-bZrztyGc5u5iFzRodMpDlvaDRMenaAiuH2sneUUec-zkbpYHbME1yk1n0S2hubKVLZMDgxVRCUeVVC~PMRcRRAsauRJS7Oaop2NFkgF8vub2H1zmhNWg__" alt="logo" className='w-20 h-20 border-primary border py-3 px-1 rounded-lg' />
                {/* Flight from */}
                <div className="flex items-center gap-x-4 ml-6 ">
                    <div>
                        <h6 className='text-color text-base'>Check-In</h6>
                        <h4 className='text-color text-lg font-semibold'>Thur, Dec 8</h4>
                    </div>
                    <span className='font-semibold'>---</span>
                    <div>
                        <h6 className='text-color text-base'>Check Out</h6>
                        <h4 className='text-color text-lg font-semibold'>Fri, Dec 9</h4>
                    </div>
                </div>
                <Divider orientation='vertical' className='bg-primary h-14 my-auto ml-5' />
                {/* Flight details  */}
                <div className="grid grid-cols-2 ml-5  w-1/3">
                    <EachDetails title={'Check-In time'} value={'12:00 pm'} icons={'clock'} />
                    <EachDetails title={'Room no.'} value={'203'} icons={'gate'} />
                    <EachDetails title={'Check-In out'} value={'11:30 am'} icons={'clock'} />
                </div>
            </div>
            <div className="col-span-1 flex items-center justify-center">
                <Button className="rounded-sm bg-primary text-color font-semibold">Download Invoice</Button>
            </div>

        </div>
    )
}

export const CardWithData = () => {
    return (
        <div className="bg-primary h-52 w-96 rounded-2xl flex flex-col justify-between p-4">
            <div className="flex justify-between items-center">
                <div className="text-color font-semibold text-xl ">
                    <h4>**** **** ****</h4>
                    <h4>4369</h4>
                </div>
                <div>
                    <BiTrash size={20} />
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div className="text-color font-semibold text-xl ">
                    <h4 className="text-base font-normal">Valid Thru</h4>
                    <h4>02/27</h4>
                </div>
                <div>
                    <Image src={'Images/Icons/visa_card.svg'} alt="card" width={51} height={32} />
                </div>
            </div>
        </div>
    )
}

export const AddCard = () => {
    return (
        <div className="border-dashed border-2 border-primary w-96 h-52 flex justify-center items-center rounded-2xl cursor-pointer">
            <div className="flex flex-col items-center">
                <Image src={'Images/Icons/Add_circle.svg'} alt="card" width={64} height={64} />
                <h3 className="text-color text-sm font-medium">Add a new card</h3>
            </div>
        </div>
    )
}