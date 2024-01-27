import React from 'react';
import './Sponsors.css';
import logo1 from '../assets/logos/1.svg';
import logo2 from '../assets/logos/2.svg';
import logo3 from '../assets/logos/3.svg';
import logo4 from '../assets/logos/4.svg';
import logo5 from '../assets/logos/5.svg';
import logo6 from '../assets/logos/6.svg';
import logo7 from '../assets/logos/7.svg';

export default function Sponsors() {
  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
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

  return (
    <>
      <div className="scroller" data-direction="left" data-speed="fast">
        <div className="scroller__inner">
          <img src={logo1} alt='logo1' />
          <img src={logo2} alt='logo2' />
          <img src={logo3} alt='logo3' />
          <img src={logo4} alt='logo4' />
          <img src={logo5} alt='logo5' />
          <img src={logo6} alt='logo6' />
          <img src={logo7} alt='logo7' />
        </div>
      </div>
    </>
  );
}
