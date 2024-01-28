import DownloadIcon from "@/common/svg/DownloadIcon";
import BagIcon from "@/common/svg/BagIcon";
import Progress from "./shared/Progress";
import { MY_SKILL } from "@/common/constant/data";
import { SkillIntefece } from "@/common/interface/DataInterface"

const About = () => {
  return (
    <section className="text-white container mx-auto">
      <div>
        <div className="uppercase font-bold w-full py-[80px] text-4xl text-center">
          About{" "}
          <span className="text-primary-yellow font-bold uppercase">Me</span>
        </div>
        <div className="uppercase text-left lg:text-center font-semibold mb-3 pl-2 text-2xl">
          Personal infos
        </div>
        <div className="w-full sm:hidden mb-3 flex justify-center items-center">
          <div className="bg-avatar bg-cover bg-center bg-no-repeat border-[4px] border-[#252525] rounded-full w-[230px] h-[230px] " />
        </div>
        <div className="grid grid-cols-2 my-[55px]">
          <div className="lg:col-span-1 col-span-2 grid grid-cols-2 pt-[15px] items-center justify-items-center">
            <div className="col-span-1 flex flex-col gap-y-5">
              <div>
                <div className="text-gray-400 text-base">First Name:</div>
                <div className="text-white text-base">Kojo</div>
              </div>
              <div>
                <div className="text-gray-400 text-base">Age:</div>
                <div className="text-white text-base">24 Years</div>
              </div>
              <div>
                <div className="text-gray-400 text-base">Freelance:</div>
                <div className="text-green-500 text-base">Available</div>
              </div>
              <div>
                <div className="text-gray-400 text-base">Phone:</div>
                <div className="text-white text-base">+84332477490</div>
              </div>
              <div>
                <div className="text-gray-400 text-base">Skype:</div>
                <div className="text-white text-base">Kojo777</div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-5">
              <div>
                <div className="text-gray-400 text-base">Last Name:</div>
                <div className="text-white text-base">Truong</div>
              </div>
              <div>
                <div className="text-gray-400 text-base">Nationality:</div>
                <div className="text-white text-base">VietNam</div>
              </div>
              <div>
                <div className="text-gray-400 text-base">Address:</div>
                <div className="text-white text-base">HaNoi</div>
              </div>
              <div>
                <div className="text-gray-400 text-base">Email:</div>
                <div className="text-white text-sm">longtq777@gmail.com</div>
              </div>
              <div>
                <div className="text-gray-400 text-base">Languages:</div>
                <div className="text-white text-base">Vietnamese, English</div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="lg:block flex justify-center items-center pt-5">
                <button className="text-[15px] font-semibold bg-transparent text-center rounded-[25px] leading-[1.4] p-[12px] border-2 border-amber-500">
                  <div className="flex gap-x-[15px] items-center">
                    <div className="font-bold">Download My CV</div>
                    <div className="">
                      <DownloadIcon width="24" height="24" style="fill-white" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 col-span-2 grid grid-cols-2 gap-5 justify-items-center pt-5">
            <div className="col-span-1 border-2 border-primary-gray min-w-[150px] h-fit p-5">
              <div className="uppercase font-semibold text-lg text-primary-yellow">
                2.5
              </div>
              <div className="uppercase text-white">Years Of</div>
              <div className="uppercase text-white">Experience</div>
            </div>
            <div className="col-span-1 border-2 border-primary-gray min-w-[150px] h-fit p-5">
              <div className="uppercase font-semibold text-lg text-primary-yellow">
                97
              </div>
              <div className="uppercase text-white">Completed</div>
              <div className="uppercase text-white">Project</div>
            </div>
            <div className="col-span-1 border-2 border-primary-gray min-w-[150px] h-fit p-5">
              <div className="uppercase font-semibold text-lg text-primary-yellow">
                81
              </div>
              <div className="uppercase text-white">Happy</div>
              <div className="uppercase text-white">Customers</div>
            </div>
            <div className="col-span-1 border-2 border-primary-gray min-w-[150px] h-fit p-5">
              <div className="uppercase font-semibold text-lg text-primary-yellow">
                53
              </div>
              <div className="uppercase text-white">Awards</div>
              <div className="uppercase text-white">won</div>
            </div>
          </div>
        </div>
{/*=========================================================START MY SKILL SECTION===================================================================== */}
        <div>
          <div className="uppercase text-left lg:text-center font-semibold mb-3 pl-2 text-2xl">
            My Skill
          </div>
          <div className="grid grid-cols-4 justify-items-center items-center">
            {
                MY_SKILL.map((item: SkillIntefece, index:number) => {
                  return (
                    <div key={`my-skill-${index}`} className="lg:col-span-1 col-span-2 flex flex-col items-center">
                        <Progress percentage={item.percentage} width={90} height={200} />
                      <div className="text-center">{item.title}</div>
                    </div>
                  )
                } )
            }
          </div>
        </div>

{/*=========================================================END MY SKILL SECTION========================================================================= */}
{/*=========================================================START EXPERIENCE & EDUCTION SECTION========================================================== */}
        <hr className="border border-[#252525] my-[55px]" />
        <div>
          <div className="uppercase text-left lg:text-center font-semibold mb-3 pl-2 text-2xl">
            Experience & Education
          </div>
          <div className="grid grid-cols-2 justify-items-center">
            <div className="lg:col-span-1 pl-2 col-span-2 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div className="relative">
                  <div className="bg-primary-yellow p-2 rounded-full">
                    <BagIcon width="24" height="24" style="fill-white" />
                  </div>
                  <div className="square"></div>
                </div>
                <div className="flex flex-col gap-y-[5px] pb-[20px]">
                  <div className="text-sm bg-primary-gray rounded-[10px] py-[3px] px-[15px] w-fit text-center">
                    2021 - 2022
                  </div>
                  <div className="text-xl uppercase">Backend Developer</div>
                  <div className="text-base text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                    laboreadipisicing elit
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="relative">
                  <div className="bg-primary-yellow p-2 rounded-full">
                    <BagIcon width="24" height="24" style="fill-white" />
                  </div>
                  <div className="square"></div>
                </div>
                <div className="flex flex-col gap-y-[5px]  pb-[20px]">
                  <div className="text-sm bg-primary-gray rounded-[10px] py-[3px] px-[15px] w-fit text-center">
                    2022 - Present
                  </div>
                  <div className="text-xl uppercase">FullStack Developer</div>
                  <div className="text-base text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                    laboreadipisicing elit
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 lg:pl-0 pl-2 col-span-2">
              <div className="flex items-start gap-5 relative">
                <div className="relative">
                  <div className="bg-primary-yellow p-2 rounded-full">
                    <BagIcon width="24" height="24" style="fill-white" />
                  </div>
                  <div className="square"></div>
                </div>

                <div className="flex flex-col gap-y-[5px] pb-[20px]">
                  <div className="text-sm bg-primary-gray rounded-[10px] py-[3px] px-[15px] w-fit text-center">
                    2018 - 2023
                  </div>
                  <div className="text-xl uppercase">Backend Developer</div>
                  <div className="text-base text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                    laboreadipisicing elit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/*=========================================================END EXPERIENCE & EDUCTION SECTION========================================================== */}
      </div>
    </section>
  );
};

export default About;
