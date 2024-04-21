import React, {useState, useEffect} from "react";


function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes().toString().padStart(2,0);
        const seconds = time.getSeconds().toString().padStart(2,0);
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2,0);

        return`${hours}:${minutes}:${seconds}${meridiem}`;
    }
    return(
        <div className="clock-container">
            <div className="clock">{formatTime()}</div>
            
        </div>
    );
}
export default DigitalClock

//DIGITAL CLOCK PROGRAM

// function updateClock(){

//     const now = new Date();
//     let hours = now.getHours();
//     const meridiem = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2,0);
//     const minutes = now.getMinutes().toString().padStart(2,0);;
//     const seconds = now.getSeconds().toString().padStart(2,0);
//     const timeString = `${hours}:${minutes}:${seconds}${meridiem}`;
//     document.getElementById("clock").textContent = timeString;
// }

// updateClock();

// setInterval(updateClock, 1000); //works like setTimeout() except calls a function repeatedly at a certain interval