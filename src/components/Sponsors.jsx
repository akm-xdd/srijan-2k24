import React, { useEffect, useState } from "react";
import "./Sponsors.css";
// import logo1 from '../assets/assets/logos/1.svg';
// import logo2 from '../assets/assets/logos/2.svg';
// import logo3 from '../assets/assets/logos/3.svg';
// import logo4 from '../assets/assets/logos/4.svg';
// import logo5 from '../assets/assets/logos/5.svg';
// import logo6 from '../assets/assets/logos/6.svg';
// import logo7 from '../assets/assets/logos/7.svg';

export default function Sponsors() {
  const [animationSetUp, setAnimationSetUp] = useState(false);

  useEffect(() => {
    if (!animationSetUp) {
      const scrollers = document.querySelectorAll(".scroller");

      // If a user hasn't opted in for reduced motion, then we add the animation
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
        setAnimationSetUp(true); // Set animation setup flag to true once done
      }

      function addAnimation() {
        scrollers.forEach((scroller) => {
          scroller.setAttribute("data-animated", true);

          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        });
      }
    }
  }, [animationSetUp]); // Only run the effect when animationSetUp changes

  return (
    <>
      <div className="bg-gray-900">
        <h1 className="xl:text-[55px] lg:text-[50px] md:text-[40px] sm:text-[35px] text-[35px] text-center uppercase font-bold ">Our Sponsors</h1>
        <div className="scroller" data-direction="left" data-speed="slow">
          <div className="scroller__inner">
            <img src={"/assets/logos/1.svg"} alt="logo1" />
            <img src={"/assets/logos/2.svg"} alt="logo2" />
            <img src={"/assets/logos/3.svg"} alt="logo3" />
            <img src={"/assets/logos/4.svg"} alt="logo4" />
            <img src={"/assets/logos/5.svg"} alt="logo5" />
            <img src={"/assets/logos/6.svg"} alt="logo6" />
            <img src={"/assets/logos/7.svg"} alt="logo7" />
          </div>
        </div>
      </div>
    </>
  );
}
