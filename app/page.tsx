"use client"
import HomePage from "@/components/HomePage";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import PortFolio from "@/components/PortFolio";
import React, {useState} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


const Home: React.FC = () => {
  AOS.init();
  const [tab, setTab] = useState<number>(0);
  return (
    <main className="w-full h-screen relative">
      <Navigation tab={tab} setTab={setTab}/>
      {tab == 0 ? (
        <HomePage />
      ) : tab == 1 ? (
        <About />
      ) : tab == 2 ? (
        <PortFolio />
      ) : (
        <Contact />
      )}
    </main>
  );
};

export default Home;
