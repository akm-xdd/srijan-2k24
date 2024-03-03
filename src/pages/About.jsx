import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About(props) {
  return (
    <>
      <Header />
      <div className="h-fit relative pt-4 px-2 xl:px-20 bg-soothing_black">
        <div className="about flex flex-wrap text-white tracking-wide xl:tracking-[.5rem]  text-[2.7rem] sm:text-[4.3rem] md:text-[6rem] lg:text-[5.5rem] xl:text-[6.7rem]  leading-[3rem] md:leading-[5rem] font-clash font-bold mt-16">
          <span>You might be</span>
          <span>Thinking what is</span>
          <span
            // ref={trigger}
            className="text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[12.5rem] md:mt-4 lg:mt-12"
          >
            <span className="text-main_primary font-dreamland">SRIJAN</span>
          </span>
          <span className="text-[3.7rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem] md:mt-4 lg:mt-8">
            ?
          </span>
        </div>
        <div className="font-chakra text-base py-8 leading-[5px] xl:mt-4">
          <span
            // ref={aboutdarpan}
            className="text-base font-medium text-white xl:text-xl"
          >
            <b>SRIJAN'24</b> the annual cultural fest organized by
            Bhaskaracharya College of Applied Sciences, is an exiting event that
            celebrates the technical expertise and artistic talents of aspiring
            students. The event brings together participants from across the
            state, making it one of the most prestigious event of it's kind. The{" "}
            <b>two-day</b> mega event is a visual treat for attendees,
            transporting them to another world with a variety of captivity
            performances by aspiring students and artists. From technical
            competitions to cultural events <b>SRIJAN'24</b> offers a diverse
            range of activities that cater to everyone's interests.
          </span>
        </div>
        <div className="absolute font-clash font-bold text-white">
          <span className="flex gap-6 text-[3.3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]">
            About <a href={"https://bcasdu.in/"}>BCAS</a>{" "}
          </span>
        </div>
        <div
          // ref={aboutaec}
          className="flex flex-col mt-8 lg:flex-row items-center gap-8 py-8"
        >
          <p className="text-white text-base xl:text-xl font-chakra font-medium">
            <b>Bhaskaracharya College of Applied Sciences (BCAS) </b>
            is a constituent public college of the University of Delhi and one
            of the top ranked colleges in India. It is popularly known as
            <b> BCAS</b>. Established in 1995, it offers undergraduate courses
            in various disciplines of sciences and applied sciences. Ranked 22nd
            among colleges in all over India by the National Institutional
            Ranking Framework (NIRF) in 2023, the institution has produced
            distinguished alumni in the field of science. It has been honoured
            with 'Star College' status by the Ministry of Science and Technology
            (Government of India). The college is located in Dwarka, New Delhi.
          </p>

          <iframe
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width={360}
            src="https://maps.google.com/maps?q=Bhaskaracharya+College+Of+Applied+Sciences&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="abvideo w-[22rem] h-[20rem] md:w-[24rem] xl:w-[28rem] xl:h-[18rem] object-cover rounded-2xl border border-gray/50"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
