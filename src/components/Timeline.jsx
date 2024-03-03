import React from 'react';
import "./Timeline.css";
import EventCard from './EventCard';

function Timeline(props) {
    return (
        <div className="timeline flex flex-col items-center justify-center h-fit pb-[80px] pt-10">
            <h1 className="text-[2.7rem] leading-10 text-center md:text-[4rem] text-english font-clash font-bold tracking-wider">
            EVENTS
          </h1>
            <div className="flex flex-wrap gap-12 md:gap-20 lg:gap-32 pt-10 items-center justify-center px-10 mt-10 flex-row relative">

                {/* <div style={{
                    height: "90%",
                    position: "absolute",
                    width: "25px",
                    backgroundColor: "white",
                    borderRadius: "25px"
                }} /> */}

                <EventCard title="Zami-Parasti" img="/assets/events/zami-parasti.jpg" />
                <EventCard title="Yogasana" img="/assets/events/yogasana.jpg" />

            </div>
        </div>
    );
}

export default Timeline;