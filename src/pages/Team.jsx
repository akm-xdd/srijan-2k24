import { useEffect, useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Team(props) {
    const [index, setIndex] = useState(0);
    const [data, setData] = useState({
        tabs: [],
        loaded: false,
    });

    useEffect(() => {
        // setData({
        //     tabs: [],
        //     loaded: false,
        // });
        fetch(`https://storage.googleapis.com/srijan-2k24.appspot.com/teams.json?v=${Date.now()}`)
            .then((res) => res.json())
            .then((json) => {
                setData({
                    tabs: json,
                    loaded: true,
                });
            });
    }, []);

    return (
        <>
            <Header />
            <div className="h-fit w-full bg-soothing_black">
                <main>
                    <div className='h-[15rem] z-20 md:h-[20rem] bg-[url("/assets/banner.png")] object-fill text-white font-dreamland tracking-wide font-black flex flex-col items-center justify-center'>
                        <span className="text-[4rem] pt-12 md:pt-16 md:text-[6rem]">
                            SRIJAN '24
                        </span>
                        <span className="text-[2rem] tracking-wider">TEAM</span>
                    </div>

                    {
                        data.loaded && (
                            <>
                                <div className="text-[.8rem] md:text-[1rem] p-8 font-semibold font-chakra flex gap-4 md:gap-12 items-center justify-center text-white">
                                    {data.tabs.map((tab, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full px-4 py-[.3rem] text-center hover:bg-white/20 transition-all duration-500 ease-in-out cursor-pointer"
                                            style={{
                                                border:
                                                    index === i
                                                        ? "1.75px solid #7cb342"
                                                        : "1.75px solid transparent",
                                            }}
                                            onClick={() => setIndex(i)}
                                        >
                                            {tab.name}
                                        </span>
                                    ))}
                                </div>

                                <div className="w-full h-fit pb-10 flex justify-center">
                                    <div className="flex flex-col gap-10 px-4 lg:px-[6rem] md:pt-6 ">
                                        {data.tabs[index].sections.map((section) => (
                                            <div key={section.id}>
                                                <h1 className="text-white font-clash uppercase font-semibold text-4xl py-4 pb-8">
                                                    {section.name}
                                                </h1>

                                                <div className="flex flex-wrap justify-evenly gap-16 w-fit h-fit pt-6 rounded-sm">
                                                    {section.members.map((member) => (
                                                        <div
                                                            key={member.id}
                                                            className=" shadow-2xl hover:shadow-main_primary transition-all duration-500 ease-in-out"
                                                        >
                                                            <div>
                                                                <img
                                                                    src={member.img}
                                                                    alt={member.name}
                                                                    width={300}
                                                                    height={300}
                                                                    className="object-cover w-[20rem] h-[22rem]"
                                                                />
                                                            </div>
                                                            <div className="flex flex-col px-6 py-2 bg-black bg-opacity-20 ">
                                                                <div>
                                                                    <h1 className=" text-white font-chakra font-semibold text-[1.5rem] pt-4">
                                                                        {member.name}
                                                                    </h1>
                                                                    <p className="text-white font-chakra font-medium text-[1rem]">
                                                                        {member.post}
                                                                    </p>
                                                                </div>
                                                                <div className="flex justify-end pb-2">
                                                                    <div className={"flex justify-between gap-2"}>
                                                                        {member.website && (
                                                                            <a href={`${member.website}`} className="">
                                                                                <FaGlobe
                                                                                    size="2rem"
                                                                                    className="text-white hover:text-main_primary transition-all duration-500 ease-in-out"
                                                                                />
                                                                            </a>
                                                                        )}
                                                                        {member.github && (
                                                                            <a href={`${member.github}`} className="">
                                                                                <FaGithub
                                                                                    size="2rem"
                                                                                    className="text-white hover:text-main_primary transition-all duration-500 ease-in-out"
                                                                                />
                                                                            </a>
                                                                        )}
                                                                        {member.linkedin && (
                                                                            <a href={`${member.linkedin}`} className="">
                                                                                <FaLinkedin
                                                                                    size="2rem"
                                                                                    className="text-white hover:text-main_primary transition-all duration-500 ease-in-out"
                                                                                />
                                                                            </a>
                                                                        )}
                                                                        <a href={`${member.insta}`} className="">
                                                                            <FaInstagram
                                                                                size="2rem"
                                                                                className="text-white hover:text-main_primary transition-all duration-500 ease-in-out"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )
                    }
                    {
                        !data.loaded && (
                            <div className="h-[100vh] w-full flex items-center justify-center">
                                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                            </div>
                        )
                    }
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Team;

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "/teams.json");
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData,
    };
}
