"use client";
import { PORTPOLIO_SHOW, TAB_VALUE } from "@/common/constant/data";
import {
  DetailProjectInterface,
  ProjectInterface,
  TabValueInterface,
} from "@/common/interface/DataInterface";
import React, { useState } from "react";
import Image from "next/image";
import ProjectDialog from "./shared/ProjectDialog";

const PortFolio = () => {
  const [filter, setFilter] = useState<string>("ALL");
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false)
  const [dialogData, setDialogData] = useState<DetailProjectInterface>()
  const handleTab = (key: string) => {
    setFilter(key);
  };
  return (
    <section className="px-5">
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
                className={`uppercase font-semibold hover:text-primary-yellow ${filter === tab.key ? 'text-primary-yellow': ''}`}
                key={`${tab.title}`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 pt-7 sm:grid-cols-4 lg:grid-cols-3 gap-5">
          {PORTPOLIO_SHOW.map((data: ProjectInterface, index: number) => {
            return (
              (data.type == filter || filter == "ALL") && (
                <div
                  className="col-span-1 sm:col-span-2 lg:col-span-1 "
                  key={`project-image-${index}`}
                >
                  <Image
                    width={300}
                    height={300}
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
      {isOpenPopup && <ProjectDialog />}
    </section>
  );
};

export default PortFolio;
