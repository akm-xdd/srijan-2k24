import React from 'react';
import Header from '../components/Header';

import Background from '../assets/Background.mp4';

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
                            <h1 className='font-dreamland xl:text-[200px] lg:text-[150px] md:text-[100px] sm:text-[75px] text-[75px] text-center text-white'>{day.title}</h1>
                            <p className='text-[#64B5F6] text-center font-black text-[0.8rem]'>Scroll Down</p>
                        </div>

                        <div className="timeline flex flex-col items-center justify-center h-fit pb-[80px] pt-10">
                            <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-40 pt-10 items-center justify-center px-10 mt-10 flex-row relative max-w-[1024px]">
                                {day.events.map((event, index) => {
                                    return (
                                        <>
                                            <div data-tilt className="w-fit relative scale-105">
                                                <div className="updown">
                                                    <div className="flex items-center justify-center w-full h-[22rem] xl:h-[30rem] rounded-sm bg-forest backdrop:blur-xl hover:-skew-x-6 skew-y-3 transition-all duration-300 ease-in-out">
                                                        <div className="w-full h-[22rem] xl:h-[30rem] rounded-sm  bg-gray hover:skew-x-6 hover:scale-105 transition-all duration-300 ease-in-out">
                                                            <span className="text-3xl font-clash font-semibold px-4 py-2 absolute left-[-2rem] top-4 bg-main_primary text-white bg-english">
                                                                {event.title}
                                                            </span>
                                                            <img
                                                                src={event.img}
                                                                alt={event.alt}
                                                                width={500}
                                                                height={500}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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