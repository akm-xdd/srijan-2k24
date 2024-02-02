import React, { useState, useEffect } from 'react';

export default function Countdown({targetDate}) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Specify your target date here

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);

            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className=''>
            <div className="count-down font-bold text-center pt-4 mt-1" >
                <span className='xl:text-[55px] lg:text-[40px] md:text-[50px] sm:text-[35px] text-[35px]  bg-clip-text text-transparent bg-gradient-to-r from-[#ff6ead] to-[#4599ff] '>{days} days </span> 
                <span className='xl:text-[55px] lg:text-[40px] md:text-[50px] sm:text-[35px] text-[35px]  bg-clip-text text-transparent bg-gradient-to-r from-[#ff6ead] to-[#4599ff] '>{hours.toString().padStart(2, '0')} hours </span> 
                <span className='xl:text-[55px] lg:text-[40px] md:text-[50px] sm:text-[35px] text-[35px]  bg-clip-text text-transparent bg-gradient-to-r from-[#ff6ead] to-[#4599ff] '>{minutes.toString().padStart(2, '0')} mins </span> 
                <span className='xl:text-[55px] lg:text-[40px] md:text-[50px] sm:text-[35px] text-[35px]  bg-clip-text text-transparent bg-gradient-to-r from-[#ff6ead] to-[#4599ff] '>{seconds.toString().padStart(2, '0')} secs </span>
            </div>

        </div>
    );
};
