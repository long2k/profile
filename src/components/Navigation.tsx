import React from "react";
import Image from "next/image";
import { Menu } from "@/common/constant/constant";

interface MenuItem {
  name: string;
  src: string;
}

const Navigation = () => {
  return (
    <div className="w-full h-full">
      <div>
        {Menu.map((item: MenuItem, idx: number) => {
          return (
            <div key={`menu-${idx}`} className="flex text-white">
              <div>
                <Image width={24} height={24} src={item.src} alt={item.name} />
              </div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
