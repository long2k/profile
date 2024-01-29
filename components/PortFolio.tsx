"use client";
import { PORTPOLIO_SHOW, TAB_VALUE } from "@/common/constant/data";
import {
  ProjectInterface,
  TabValueInterface,
} from "@/common/interface/DataInterface";
import React, { useState } from "react";
import Image from "next/image";
import ProjectDialog from "./shared/ProjectDialog";

const PortFolio = () => {
  const [filter, setFilter] = useState<string>("ALL");
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [dialogData, setDialogData] = useState<ProjectInterface>();
  const handleTab = (key: string) => {
    setFilter(key);
  };
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
      className="px-5 py-[20px]"
    >
      <div className="uppercase font-bold w-full py-[80px] text-4xl text-center">
        Get In{" "}
        <span className="text-primary-yellow font-bold uppercase">Touch</span>
      </div>
      <div>
        <div className="flex justify-center items-center gap-5 cursor-pointer">
          {TAB_VALUE.map((tab: TabValueInterface, index: number) => {
            return (
              <button
                onClick={() => {
                  handleTab(tab.key);
                }}
                className={`uppercase font-semibold hover:text-primary-yellow ${
                  filter === tab.key ? "text-primary-yellow" : ""
                }`}
                key={`${tab.title}`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 pt-7 sm:grid-cols-4 w-4/5 lg:grid-cols-3 gap-5">
            {PORTPOLIO_SHOW.map((data: ProjectInterface, index: number) => {
              return (
                (data.type == filter || filter == "ALL") && (
                  <div
                    className="col-span-1 sm:col-span-2 lg:col-span-1 relative cursor-pointer rounded-[10px]"
                    key={`project-image-${index}`}
                    onClick={() => {
                      setIsOpenPopup(true);
                      setDialogData(data);
                    }}
                  >
                    <div className="hover:bg-primary-yellow absolute w-full h-full top-0 left-0 rounded-[10px] hover:flex hidden justify-center items-center">
                      <div>{data.detail.project}</div>
                    </div>
                    <Image
                      width={150}
                      height={150}
                      className="w-full h-full rounded-[10px]"
                      src={data.src}
                      alt={"project-image-${index}"}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
      {isOpenPopup && dialogData && (
        <ProjectDialog project={dialogData} setIsOpenPopup={setIsOpenPopup} />
      )}
    </section>
  );
};

export default PortFolio;
