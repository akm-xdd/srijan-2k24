import React from 'react';

function EventCard(props) {
    const title = props.title ? props.title : ""
    const image = props.img ? props.img : ""

    return (
        <div data-tilt className="w-fit relative scale-105">
            <div className="updown">
                <div className="flex items-center justify-center w-full h-[22rem] xl:h-[24rem] rounded-sm bg-forest backdrop:blur-xl hover:-skew-x-6 skew-y-3 transition-all duration-300 ease-in-out">
                    <div className="w-full h-[22rem] xl:h-[24rem] rounded-sm  bg-gray hover:skew-x-6 hover:scale-105 transition-all duration-300 ease-in-out">
                        <span className="text-3xl font-clash font-semibold px-4 py-2 absolute left-[-2rem] top-4 bg-main_primary text-white bg-english max-w-[200px]">
                            {title}
                        </span>
                        <img
                            src={image}
                            alt={title}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;