"use client";
import { NAVIGATION_LIST } from "@/common/constant/data";
import { MenuItem } from "@/common/interface/DataInterface";

type SetTabType = React.Dispatch<React.SetStateAction<number>>;

const Navigation = ({ tab, setTab }: { tab: number; setTab: SetTabType }) => (
  <nav className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-[200] flex flex-col items-center">
    {NAVIGATION_LIST.map((menu: MenuItem, index: number) => (
      <div key={`nav-${index}`} className="flex flex-col items-center">

        {/* Connector line — yellow when this tab or earlier is active */}
        {index > 0 && (
          <div
            className="w-px transition-all duration-500"
            style={{
              height: "20px",
              background: index <= tab
                ? "rgba(255,180,0,0.45)"
                : "rgba(255,255,255,0.06)",
            }}
          />
        )}

        {/* Nav button */}
        <button
          onClick={() => setTab(index)}
          aria-label={menu.title}
          className={`float-element relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
            tab === index
              ? "border-2 border-primary-yellow/80 bg-primary-yellow/10 shadow-[0_0_22px_rgba(255,180,0,0.4),0_0_8px_rgba(255,180,0,0.15)]"
              : "border border-[#282828] bg-[#181818] hover:border-white/20 hover:bg-[#212121]"
          }`}
        >
          {/* Ping ring on active item */}
          {tab === index && (
            <span className="absolute inset-0 rounded-full border-2 border-primary-yellow/25 animate-ping" />
          )}

          {/* Icon */}
          <span className="relative z-10 flex items-center justify-center w-5 h-5">
            {menu.icon}
          </span>

          {/* Tooltip — shown via .float-element:hover .nav-tooltip CSS */}
          <span className="nav-tooltip">{menu.title}</span>
        </button>
      </div>
    ))}
  </nav>
);

export default Navigation;
