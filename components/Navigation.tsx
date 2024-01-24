import Image from "next/image";

const Navigation = () => {
  return (
    <div className="fix right-[10px] top-[20%] w-fit h-screen">
      <div className="grid grid-cols-1 justify-evenly items-center gap-y-[50px]">
        <div className="col-span-1 flex justify-between hover:bg-primary-yellow">
          <p className="uppercase hidden hover:block text font-bold">Home</p>
          <Image width={24} height={24} src="/assets/svg/home.svg" alt="home-section" />
        </div>
        <div className="col-span-1 flex justify-between items-center hover:bg-primary-yellow">
          <p className="uppercase hidden hover:block font-bold hover:bg-primary-yellow">About</p>
          <Image width={24} height={24} src="/assets/svg/about.svg" alt="about-section" />
        </div>
        <div className="col-span-1 flex justify-between items-center hover:bg-primary-yellow">
          <p className="uppercase hidden hover:block font-bold hover:bg-primary-yellow">PortFolio</p>
          <Image width={24} height={24} src="/assets/svg/portfolio.svg" alt="portfolio-section" />
        </div>
        <div className="col-span-1 flex justify-between items-center hover:bg-primary-yellow">
          <p className="uppercase hidden hover:block font-bold hover:bg-primary-yellow">Contact</p>
          <Image className="text-white" width={24} height={24} src="/assets/svg/mail.svg" alt="contact-section" />
        </div>
        <div className="col-span-1 flex justify-between items-center hover:bg-primary-yellow">
          <p className="uppercase hidden hover:block font-bold hover:bg-primary-yellow">Blog</p>
          <Image width={24} height={24} src="/assets/svg/message.svg" alt="blog-section" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
