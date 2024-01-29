import React from "react";
import { ProjectInterface } from "@/common/interface/DataInterface";
import CloseIcon from "@/common/svg/CloseIcon";
import Image from "next/image";

type SetIsOpenPopupType = React.Dispatch<React.SetStateAction<boolean>>;

const ProjectDialog = ({
  setIsOpenPopup,
  project,
}: {
  setIsOpenPopup: SetIsOpenPopupType;
  project: ProjectInterface;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-primary-gray p-8 rounded relative shadow-md">
        <button
          className="absolute top-[5%] right-[5%] sm:top-[-10%] sm:right-[-10%]"
          onClick={() => setIsOpenPopup(false)}
        >
          <CloseIcon width="32" height="32" style="fill-white" />
        </button>
        <div className="uppercase font-bold w-full py-[30px] text-2xl text-primary-yellow text-center">
          Project Infomation
        </div>
        <div className="pb-5">
          <div className="grid grid-cols-2 text-base">
            <div className="col-span-2 sm:col-span-1 flex items-center  gap-2">
              <div className="font-light">Project:</div>
              <div>{project.detail.project}</div>
            </div>
            <div className="col-span-2 sm:col-span-1 flex gap-2">
              <div className="font-light">Technique:</div>
              <div>{project.detail.tech}</div>
            </div>
            <div className="col-span-2 flex gap-2">
              <div className="font-light">Description:</div>
              <div>{project.detail.description}</div>
            </div>
          </div>
          <div className="pt-5 flex justify-center items-center">
            <Image
              alt={`project-detail`}
              width={400}
              height={400}
              src={project?.src}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDialog;
