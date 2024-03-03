import { useEffect, useState } from 'react';
import "./Timeline.css";
import EventCard from './EventCard';

function Timeline(props) {

    const [data, setData] = useState({
        events: [],
        loaded: false,
    });

    useEffect(() => {
        fetch(`https://storage.googleapis.com/srijan-2k24.appspot.com/events.json?v=${Date.now()}`)
            .then((res) => res.json())
            .then((json) => {
                setData({
                    events: json,
                    loaded: true,
                });
            });
    }, []);

    return (
        <div className="timeline flex flex-col items-center justify-center h-fit pb-[80px] pt-10">
            <h1 className="text-[2.7rem] leading-10 text-center md:text-[4rem] text-english font-clash font-bold tracking-wider">
                EVENTS
            </h1>
            <div className="flex flex-wrap gap-12 md:gap-20 lg:gap-32 pt-10 items-center justify-center px-10 mt-10 flex-row relative">

                {data.loaded && data.events.map((event, index) => (
                    <a href={event.link} key={index}>
                        <EventCard title={event.title} img={event.img} />
                    </a>
                ))}

                {
                    !data.loaded && (
                        <div className="flex justify-center items-center h-[75vh]">
                            <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-[#7cb342]"></div>
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default Timeline;