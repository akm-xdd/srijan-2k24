import React from 'react';
import "./Timeline.css";
import EventCard from './EventCard';

function Timeline(props) {
    return (
        <div className="timeline flex flex-col items-center justify-center h-fit pb-[80px] pt-10">
            <h1 className="text-[2.7rem] leading-10 text-center md:text-[4rem] text-english font-clash font-bold tracking-wider">
            TIMELINE
          </h1>
            <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-40 pt-10 items-center justify-center px-10 mt-10 flex-row relative">

                {/* <div style={{
                    height: "90%",
                    position: "absolute",
                    width: "25px",
                    backgroundColor: "white",
                    borderRadius: "25px"
                }} /> */}

                <EventCard title="Day 1" img="https://www.darpan23.live/_next/image?url=%2Fchef.jpg&w=1080&q=100" />
                <EventCard title="Day 2" img="https://www.darpan23.live/_next/image?url=%2Ftalk-2.png&w=828&q=100" />

            </div>
        </div>
    );
}

export default Timeline;