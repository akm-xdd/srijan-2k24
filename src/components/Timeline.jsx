import React from 'react';
import "./Timeline.css";

function Timeline(props) {
    return (
        <div className="flex flex-col items-center justify-center h-fit pb-[80px] bg-gradient-to-b from-transparent to-primary pt-10 bg-mint" style={{ backgroundColor: "#99ffcc" }}>
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



                <div data-tilt className="w-fit relative scale-105">
                    <div className="updown">
                        <div className="flex items-center justify-center w-full h-[22rem] xl:h-[30rem] rounded-sm bg-forest backdrop:blur-xl hover:-skew-x-6 skew-y-3 transition-all duration-300 ease-in-out">
                            <div className="w-full h-[22rem] xl:h-[30rem] rounded-sm  bg-gray hover:skew-x-6 hover:scale-105 transition-all duration-300 ease-in-out">
                                <span className="text-3xl font-clash font-semibold px-4 py-2 absolute left-[-2rem] top-4 bg-main_primary text-white bg-english">
                                    DAY 1
                                </span>
                                <img
                                    src="https://www.darpan23.live/_next/image?url=%2Fchef.jpg&w=1080&q=100"
                                    alt="talk show"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div data-tilt className="w-fit relative scale-105">
                    <div className="updown">
                        <div className="flex items-center justify-center w-full h-[22rem] xl:h-[30rem] rounded-sm bg-forest backdrop:blur-xl hover:-skew-x-6 skew-y-3 transition-all duration-300 ease-in-out">
                            <div className="w-full h-[22rem] xl:h-[30rem] rounded-sm  bg-gray hover:skew-x-6 hover:scale-105 transition-all duration-300 ease-in-out">
                                <span className="text-3xl font-clash font-semibold px-4 py-2 absolute left-[-2rem] top-4 bg-main_primary text-white bg-english">
                                    DAY 2
                                </span>
                                <img
                                    src="https://www.darpan23.live/_next/image?url=%2Ftalk-2.png&w=828&q=100"
                                    alt="talk show"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Timeline;