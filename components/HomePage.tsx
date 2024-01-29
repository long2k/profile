import React from "react";
import Image from "next/image";
import ArrowCircleIcon from "@/common/svg/ArrowCircleIcon";

const HomePage: React.FC = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="w-full h-screen overflow-hidden"
    >
      <div className="bg-[#ffb400] fixed lg:block hidden h-[200%] w-[100%] left-[-83%] rotate-[-15deg] top-[-50%]"></div>
      <div className="">
        <div className="box rounded-[30px] fixed top-[40px] left-[40px] bg-avatar bg-top bg-no-repeat bg-cover left-[40px] top-[40px] z-50 lg:block hidden h-[90%] w-[30%]"></div>
        <div className="flex justify-center lg:justify-end items-center h-screen w-full pr-0 lg:pr-[10%]">
          <div className="max-w-[600px] px-[10px] lg:pl-[70px]">
            <div className="w-full lg:hidden mb-3 flex justify-center items-center">
              <div className="bg-avatar bg-cover bg-center bg-no-repeat border-[4px] border-[#252525] rounded-full w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] " />
            </div>
            <div className="uppercase lg:text-left text-center text-primary-yellow text-4xl leading-[62px] font-bold">
              <span className="lg:block hidden">-</span> I&apos;m KOJO TRUONG.
              <br /> <span className="text-white">WEB DEVELOPER</span>
            </div>
            <div className="text-base leading-[35px] lg:text-left text-center">
              I&apos;m a Tunisian based web designer &amp; front‑end developer
              focused on crafting clean &amp; user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </div>
            <div className="lg:block flex justify-center items-center pt-5">
              <button className="text-[15px] font-semibold bg-transparent text-center rounded-[25px] leading-[1.4] p-[12px] border-2 border-amber-500">
                <div className="flex gap-x-[15px] items-center">
                  <div className="font-bold">More About Me</div>
                  <div className="">
                    <ArrowCircleIcon
                      width="24"
                      height="24"
                      style="fill-white"
                    />
                  </div>
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
