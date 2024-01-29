import { NAVIGATION_LIST } from "@/common/constant/data";
import { MenuItem } from "@/common/interface/DataInterface";
type SetTabType = React.Dispatch<React.SetStateAction<number>>;

const Navigation = ({tab,  setTab }: {tab: number, setTab: SetTabType }) => {
  const handleTab = (index: number) => {
    setTab(index);
  };
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="absolute right-[5%] top-[10%] w-fit  z-50"
    >
      <div className="grid grid-cols-1 justify-evenly items-center gap-y-[50px]">
        {NAVIGATION_LIST.map((menu: MenuItem, index: number) => {
          return (
            <div
              key={`menu-${index}`}
              className={`col-span-1 ${index == tab ? 'bg-primary-yellow' : ''} hover:bg-primary-yellow w-[50px] h-[50px] bg-primary-gray rounded-full relative flex justify-between items-center cursor-pointer`}
              onClick={() => {
                handleTab(index);
              }}
            >
              <p className="uppercase hidden p-3 text-white hover:block font-bold">
                {menu.title}
              </p>
              <div className="p-3 absolute rounded-full">{menu.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
