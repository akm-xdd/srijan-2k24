import React from 'react';
import Header from '../components/Header';

import Background from '../assets/Background.mp4';
import EventCard from '../components/EventCard';

function Events(props) {

    const DAYS = [
        {
            title: "Day 1",
            events: [
                {
                    title: "Cheif Guest",
                    img: "https://www.darpan23.live/_next/image?url=%2Fchef.jpg&w=1080&q=100",
                },
                {
                    title: "Talk Show",
                    img: "https://www.darpan23.live/_next/image?url=%2Ftalk-2.png&w=828&q=100",
                },
                {
                    title: "Spire Talk",
                    img: "https://www.darpan23.live/_next/image?url=%2Fspire2.png&w=640&q=100",
                },
                {
                    title: "DJ Night",
                    img: "https://www.darpan23.live/_next/image?url=%2Fdj.jpg&w=640&q=100",
                },
                {
                    title: "Pro Show",
                    img: "https://www.darpan23.live/_next/image?url=%2Fpro.jpg&w=640&q=100"
                }
            ]
        },
        {
            title: "Day 2",
            events: [
                {
                    title: "Cheif Guest",
                    img: "https://www.darpan23.live/_next/image?url=%2Fchef.jpg&w=1080&q=100",
                },
                {
                    title: "Talk Show",
                    img: "https://www.darpan23.live/_next/image?url=%2Ftalk-2.png&w=828&q=100",
                },
                {
                    title: "Spire Talk",
                    img: "https://www.darpan23.live/_next/image?url=%2Fspire2.png&w=640&q=100",
                },
                {
                    title: "DJ Night",
                    img: "https://www.darpan23.live/_next/image?url=%2Fdj.jpg&w=640&q=100",
                },
                {
                    title: "Pro Show",
                    img: "https://www.darpan23.live/_next/image?url=%2Fpro.jpg&w=640&q=100"
                }
            ]
        },
    ]

    return (
        <>
            <Header />

            {DAYS.map((day, index) => {

                return (
                    <>
                        <div className="container min-w-full min-h-screen flex flex-col justify-center items-center relative">
                            <div className="backdrop bg-gray-200 absolute left-0 right-0 top-0 bottom-0 z-[-1]">
                                <video src={Background} autoPlay loop muted className="w-full h-full object-cover brightness-[20%]" />
                            </div>
                            <h1 className='font-dreamland xl:text-[240px] lg:text-[180px] md:text-[160px] sm:text-[120px] text-[120px] text-center text-white'>{day.title}</h1>
                            <p className='text-main_primary text-center font-black text-[0.8rem]'>Scroll Down</p>
                        </div>

                        <div className="timeline flex flex-col items-center justify-center h-fit pb-[80px] pt-10 bg-[#263238]">
                            <div className="flex flex-wrap gap-12 md:gap-20 lg:gap-32 pt-10 items-center justify-center px-10 mt-10 flex-row relative max-w-[1024px]">
                                {day.events.map((event, index) => {
                                    return (
                                        <>
                                            <EventCard title={event.title} img={event.img} />
                                        </>
                                    )
                                })}
                            </div>
                        </div>

                    </>
                )

            })}
        </>
    );
}

export default Events;