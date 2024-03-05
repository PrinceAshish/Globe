import { BiRupee } from "react-icons/bi"

export const currencyFormater = (value: any) => {
    return (
        <div className="flex space-x-2 items-center">
            <BiRupee />
            {value}
        </div>
    )
}

export const NumberToTimeConverter = ({ selectedNumber }: any) => {
    // Assuming selectedNumber is in minutes
    const convertToTime = (number: any) => {
        const hours = Math.floor(number / 60);
        const minutes = number % 60;

        // Determine AM or PM
        const period = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour format
        const formattedHours = hours % 12 || 12;

        // Format the time
        const formattedTime = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;

        return formattedTime;
    };

    return (
        <div>
            <p>{convertToTime(selectedNumber)}</p>
        </div>
    );
};