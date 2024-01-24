import Image from "next/image";
import HomePage from "@/components/HomePage";
import Navigation from "@/components/Navigation";

const  Home: React.FC = () =>  {
  return (
    <main className="w-full h-full relative">
      <Navigation />
      <HomePage />
    </main>
  );
}

export default Home;