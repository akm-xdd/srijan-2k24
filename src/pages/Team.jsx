import { useEffect, useState } from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import Header from "../components/Header";

function Team(props) {
    const [index, setIndex] = useState(0);
    const tabs = [
        {
            "name": "Coordinator",
            "sections": [
                {
                    "name": "ECA",
                    "members": [
                        {
                            "id": "1",
                            "name": "Manas Pratap Singh",
                            "post": "President",
                            "img": "https://media.licdn.com/dms/image/D4D03AQHcxNZTS0SayA/profile-displayphoto-shrink_400_400/0/1692589278326?e=1712793600&v=beta&t=g3whKa8omuBX6V9zBwXo1NKVntrxkVuvc6w1YrO-MHM",
                            "insta": "https://www.instagram.com/manaspsingh03",
                            "linkedin": "https://www.linkedin.com/in/manas-p-singh-150a14251"
                        },
                        {
                            "id": "2",
                            "name": "Naved",
                            "post": "Joint Secretary",
                            "img": "https://instagram.fpat3-1.fna.fbcdn.net/v/t51.2885-19/363766384_1284481645568172_8653948836160816345_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fpat3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=RrJNiS1UhXYAX_3EylE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfArhiB18Ki-JRzfny4AxvkqDlDe2EY0B_1j2N4Yf_HDrg&oe=65C92E5C&_nc_sid=8b3546",
                            "insta": "https://www.instagram.com/_draco_sycon"
                        },
                        {
                            "id": "3",
                            "name": "Aseem Parashar",
                            "post": "Social Media Coordinator",
                            "img": "https://media.licdn.com/dms/image/C4D03AQEOVR8rrEJW3Q/profile-displayphoto-shrink_400_400/0/1667929840317?e=1712793600&v=beta&t=YZNInmsNl_AI_IhOIdNLRRrmWzaGHYU3Oy5YbuWz0bg",
                            "insta": "https://www.instagram.com/theog_aseem_parashar",
                            "linkedin": "https://www.linkedin.com/in/aseem-parashar-214181255"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Design Team",
            "sections": [
                {
                    "name": "Designers",
                    "members": [
                        {
                            "id": "d1",
                            "name": "Shreyansh",
                            "post": "Design Lead Coordinator",
                            "img": "",
                            "insta": "https://www.instagram.com/sypher.in"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Web Team",
            "sections": [
                {
                    "name": "Developers",
                    "members": [
                        {
                            "id": "edwin",
                            "name": "Chiranjit",
                            "post": "Lead Developer",
                            "img": "https://scontent.fpat3-2.fna.fbcdn.net/v/t39.30808-1/415963231_2068391526829960_7111095191123791697_n.jpg?stp=dst-jpg_s320x320&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_ohc=UMhUFFUMnJMAX_dHxrv&_nc_ht=scontent.fpat3-2.fna&oh=00_AfCLGuKAWTLZD_6fnjHwZhwKmfYAE9Ku7z-Ci4AHPDPwJQ&oe=65C825AE",
                            "insta": "https://www.linkedin.com/im.chiranjit",
                            "linkedin": "https://www.linkedin.com/in/imchiranjit",
                            "github": "https://github.com/imchiranjit"
                        },
                        {
                            "id": "gladson",
                            "name": "Anand",
                            "post": "Lead Developer",
                            "img": "https://avatars.githubusercontent.com/u/110248822?v=4",
                            "insta": "https://www.instagram.com/akm.xdd",
                            "linkedin": "https://www.linkedin.com/in/akm-glhf",
                            "github": "https://github.com/akm-xdd"
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <>
            <Header />
            <div className="h-fit w-full bg-soothing_black">

                <main>
                    <div className='h-[15rem] z-20 md:h-[20rem] bg-[url("/banner.png")] object-fill text-white font-dreamland tracking-wide font-black flex flex-col items-center justify-center'>
                        <span className="text-[4rem] pt-12 md:pt-16 md:text-[6rem]">
                            SRIJAN '24
                        </span>
                        <span className="text-[2rem] tracking-wider">TEAM</span>
                    </div>

                    <div className="text-[.8rem] md:text-[1rem] p-8 font-semibold font-chakra flex gap-4 md:gap-12 items-center justify-center text-white">
                        {tabs.map((tab, i) => (
                            <span
                                key={i}
                                className="rounded-full px-4 py-[.3rem] hover:bg-white/20 transition-all duration-500 ease-in-out cursor-pointer"
                                style={{ border: index === i ? "1.75px solid #7cb342" : "1.75px solid transparent" }}
                                onClick={() => setIndex(i)}
                            >
                                {tab.name}
                            </span>
                        ))}
                    </div>

                    <div className="w-full h-fit pb-10 flex justify-center">
                        <div className="flex flex-col gap-10 px-4 lg:px-[6rem] md:pt-6 ">
                            {tabs[index].sections.map((section) => (
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
                                                <div className="flex flex-col p-2 bg-black bg-opacity-20 ">
                                                    <div>
                                                        <h1 className=" text-white font-chakra font-semibold text-[1.5rem] pt-4">
                                                            {member.name}
                                                        </h1>
                                                        <p className="text-white font-chakra font-medium text-[1rem]">
                                                            {member.post}
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-end pb-2">
                                                        <div
                                                            className={
                                                                member.github
                                                                    ? "flex justify-between w-20"
                                                                    : "flex justify-end"
                                                            }
                                                        >
                                                            {member.github && (
                                                                <a href={`${member.github}`} className="">
                                                                    <FaGithub
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
                </main>
                <footer />
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