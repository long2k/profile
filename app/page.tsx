import Image from "next/image";
import HomePage from "@/components/HomePage";
import Navigation from "@/components/Navigation";
import About from "@/components/About";

const  Home: React.FC = () =>  {
  return (
    <main className="w-full h-screen relative">
      {/* <Navigation /> */}
      {/* <HomePage /> */}
      <About />
    </main>
  );
}

export default Home;