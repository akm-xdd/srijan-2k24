import React, { useEffect, useState } from "react";
import "./Sponsors.css";

export default function Sponsors() {
  const [animationSetUp, setAnimationSetUp] = useState(false);

  const [data, setData] = useState({
    partners: [],
    loaded: false,
  });

  useEffect(() => {
    fetch(`https://storage.googleapis.com/srijan-2k24.appspot.com/partners.json?v=${Date.now()}`)
      .then((res) => res.json())
      .then((json) => {
        setData({
          partners: json,
          loaded: true,
        });
      });
  }, []);

  useEffect(() => {
    if (!animationSetUp && data.loaded && data.partners.length > 0) {
      const scrollers = document.querySelectorAll(".scroller");

      // If a user hasn't opted in for reduced motion, then we add the animation
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
        setAnimationSetUp(true); // Set animation setup flag to true once done
      }

      function onclick(e) {
        e.target.hasAttribute("link") && window.open(e.target.getAttribute("link"), "_blank");
      };

      function addAnimation() {
        scrollers.forEach((scroller) => {
          scroller.setAttribute("data-animated", true);

          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            duplicatedItem.onclick = onclick;
            item.onclick = onclick;
            scrollerInner.appendChild(duplicatedItem);
          });
        });
      }
    }
  }, [animationSetUp, data]); // Only run the effect when animationSetUp changes

  return (
    <>
      {data.loaded && data.partners.length > 0 && (
        <>
          <div className="bg-gray-900">
            <h1 className="xl:text-[55px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[30px] text-center uppercase font-bold ">Our Partners</h1>
            <div className="scroller" data-direction="left" data-speed="slow">
              <div className="scroller__inner ">
                {
                  data.partners.map((partner, index) => (
                    <img
                      src={partner.img}
                      alt={partner.alt}
                      key={index}
                      link={partner.link}
                      style={{
                        width: partner.width ? 'auto' : '',
                        height: partner.height ? 'auto' : '',
                      }}
                       />
                  ))
                }
              </div>
            </div>
          </div>
        </>
      )}
      {
        (!data.loaded || data.partners.length == 0) && (
          <div />
        )
      }
    </>
  );
}
