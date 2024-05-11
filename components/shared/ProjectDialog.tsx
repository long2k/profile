import React, { useEffect, useRef } from "react";
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
  const dialogRef = useRef(null)
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      //   setIsOpenPopup(false);
      // }
    };
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [dialogRef]);

  return (
    <div ref={dialogRef} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[500]">
      <div className="bg-primary-gray p-8 rounded relative shadow-md md:max-w-[460px] xl:max-w-[900px]">
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
          <div className="grid grid-cols-2 text-base gap-3">
            <div className="col-span-2 lg:col-span-1 grid grid-cols-4">
              <div className="sm:col-span-1 col-span-2 font-semibold">Project:</div>
              <div className="sm:col-span-3 col-span-2 font-light">{project.detail.project}</div>
            </div>
            <div className="col-span-2 lg:col-span-1 grid grid-cols-4">
              <div className="sm:col-span-1 col-span-2 font-semibold">Technique:</div>
              <div className="sm:col-span-3 col-span-2 font-light">{project.detail.tech}</div>
            </div>
            <div className="col-span-2 lg:col-span-1 grid grid-cols-4">
              <div className="sm:col-span-1 col-span-2 font-semibold">Role:</div>
              <div className="sm:col-span-3 col-span-2 font-light">{project.detail.role}</div>
            </div>
            <div className="col-span-2 lg:col-span-1 grid grid-cols-4">
              <div className="sm:col-span-1 col-span-2 font-semibold">Description:</div>
              <div className="sm:col-span-3 col-span-2 font-light">{project.detail.description}</div>
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
