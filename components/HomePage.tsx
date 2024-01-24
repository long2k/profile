import React from "react";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <section>
        <div className="bg-[#ffb400] fixed h-[200%] w-[100%] left-[-83%] rotate-[-15deg] top-[-50%]"></div>
      <div className="grid grid-cols-12 w-full h-[100vh] items-center">
        <div className="col-span-4 box rounded-[30px] fixed top-[40px] left-[40px] bg-avatar bg-top bg-no-repeat bg-cover left-[40px] top-[40px] z-50 lg:block hidden h-[90%] w-[30%]"></div>

        <div className="col-span-12 flex justify-end lg:pr-[10%]">
          <div className="max-w-[600px] pl-[70px]">
            <div className="uppercase lg:text-left text-center text-primary-yellow text-4xl leading-[62px] font-bold">
              - I&apos;m KOJO TRUONG.<br/> <span className="text-white">WEB DEVELOPER</span>  
            </div>
            <div className="text-base leading-[35px] lg:text-left text-center">
              I&apos;m a Tunisian based web designer &amp; front‑end developer
              focused on crafting clean &amp; user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </div>
            <div>
              <button className="text-[15px] font-semibold bg-transparent text-center rounded-[25px] leading-[1.4] py-[30px] px-[16px] border-2 border-amber-500">
                <div>
                  <p>More About Me</p>
                  <Image width={94} height={94} src="" alt="fa-regular fa-circle-right" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
