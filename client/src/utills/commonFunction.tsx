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

export function convertTo12HourFormat(time24:string) {
    // Split the time string into hours and minutes
    var splitTime = time24.split(':');
    var hours = parseInt(splitTime[0]);
    var minutes = parseInt(splitTime[1]);

    // Determine whether it's AM or PM
    var period = (hours >= 12) ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours == 0) ? 12 : hours; // Handle midnight (00:00)

    // Pad single digit minutes with leading zero
    minutes = (minutes < 10) ? '0' + minutes : minutes as any;

    // Return the formatted time
    return hours + ':' + minutes + ' ' + period;
}
export function calculateTimeDifference(time1:string, time2:string) {
    // Split the time strings into hours and minutes
    var splitTime1 = time1.split(':');
    var splitTime2 = time2.split(':');
    
    // Parse hours and minutes
    var hours1 = parseInt(splitTime1[0]);
    var minutes1 = parseInt(splitTime1[1]);
    var hours2 = parseInt(splitTime2[0]);
    var minutes2 = parseInt(splitTime2[1]);
    
    // Calculate the time difference
    var totalMinutes1 = (hours1 * 60) + minutes1;
    var totalMinutes2 = (hours2 * 60) + minutes2;
    var difference = Math.abs(totalMinutes2 - totalMinutes1);
    
    // Calculate hours and minutes from the difference
    var hoursDiff = Math.floor(difference / 60);
    var minutesDiff = difference % 60;
    
    // Format the output
    var output = '';
    if (hoursDiff > 0) {
        output += hoursDiff + 'h ';
    }
    if (minutesDiff > 0) {
        output += minutesDiff + 'min';
    }
    
    return output;
}

export function getRandomNumber() {
    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}
export function formatDate(inputDate:any) {
    // Split the input date into day, month, and year
    var splitDate = inputDate.split('-');
    var day = parseInt(splitDate[0]);
    var month = parseInt(splitDate[1]) - 1; // Month is zero-based in JavaScript
    var year = parseInt(splitDate[2]);
    
    // Create a new Date object using the input date
    var formattedDate = new Date(year, month, day);
    
    // Define arrays for days and months
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Get the day of the week and month name
    var dayOfWeek = daysOfWeek[formattedDate.getDay()];
    var monthName = monthsOfYear[formattedDate.getMonth()];
    
    // Format the output
    var output = dayOfWeek + ', ' + monthName + ' ' + day;
    
    return output;
}