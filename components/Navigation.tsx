import { NAVIGATION_LIST } from "@/common/constant/data";
import { MenuItem } from "@/common/interface/DataInterface";
type SetTabType = React.Dispatch<React.SetStateAction<number>>;

const Navigation = ({ tab, setTab }: { tab: number; setTab: SetTabType }) => {
  const handleTab = (index: number) => {
    setTab(index);
  };
  return (
    <div className="floating-container hover:h-[350px] z-[200] w-[100px] h-[100px] fixed bottom-[10%] right-[5%]">
      <div className="absolute w-[65px] h-[65px] bg-[#2cb3f0] bottom-0 right-0 rounded-[100px] text-center text-white leading-[65px] text-[23px] hover:cursor-pointer hover:transition-all hover:shadow-[0_10px_25px_-5px_rgba(44, 179, 240, 0.6)]">+</div>
      <div className="element-container flex flex-col items-center justify-center pl-[20px]">
        {NAVIGATION_LIST.map((menu: MenuItem, index: number) => {
          let style = "";
          switch (index) {
            case 0: 
                style = "bg-[#42a5f5] shadow-[0_20px_20px_-10px_rgba(66, 165, 245, 0.5)]"
                break;
            case 1 :
                style = "bg-[#4caf50] shadow-[0_20px_20px_-10px_rgba(76, 175, 80, 0.5)]"
                break;
            case 2 :
                style = "bg-[#ff9800] shadow-[0_20px_20px_-10px_rgba(255, 152, 0, 0.5)]"
                break;
            case 3 :
                style = "bg-[#42a5f5] shadow-[0_20px_20px_-10px_rgba(66, 165, 245, 0.5)]"
                break;
            default: 
                // do nothing
                break;
          }

          return (
            <div
              key={`menu-${index}`}
              className={`col-span-1 ${
                index == tab ? "bg-primary-yellow" : ""
              } ${style} float-element relative block rounded-[100px] w-[50px] h-[50px] mt-[15px] text-white hover:cursor-pointer opacity-0`}
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
