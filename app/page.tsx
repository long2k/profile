"use client";
import HomePage from "@/components/HomePage";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import PortFolio from "@/components/PortFolio";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  const [tab, setTab] = useState<number>(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 80,
    });
  }, []);

  /* Lock body scroll only on the Home tab so the hero always fills the screen */
  useEffect(() => {
    document.body.style.overflow = tab === 0 ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [tab]);

  return (
    <main className={`w-full h-screen relative ${tab === 0 ? "overflow-hidden" : ""}`}>
      <Navigation tab={tab} setTab={setTab} />
      {/* key={tab} triggers remount → runs page-enter animation on every switch */}
      <div key={tab} className="page-enter">
        {tab === 0 ? (
          <HomePage setTab={setTab} />
        ) : tab === 1 ? (
          <About />
        ) : (
          <PortFolio />
        )}
      </div>
    </main>
  );
};

export default Home;
