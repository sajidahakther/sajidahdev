import React, { useEffect } from "react";
import gsap from "gsap";
import "./home.sass";

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".reveal", 2, {
      y: 100,
      opacity: 0,
      ease: "power4.out",
      delay: 0.5,
      skewY: 5,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);
  return (
    <div className="home" id="home">
      <h1>
        <div className="reveal">Sajidah </div>
        <div className="reveal"> Akther</div>
      </h1>
    </div>
  );
};

export default Home;
