import Image from "next/image";
import HomePage from "@/components/HomePage";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import PortFolio from "@/components/PortFolio";

const  Home: React.FC = () =>  {
  return (
    <main className="w-full h-screen relative">
      {/* <Navigation /> */}
      {/* <HomePage /> */}
      <PortFolio />
    </main>
  );
}

export default Home;