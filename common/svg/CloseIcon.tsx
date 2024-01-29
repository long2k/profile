import React from "react";
import SvgInterface from "../interface/SvgInterface";

const CloseIcon = (props: SvgInterface) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      className={props.style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="#33363F" stroke-width="2" />
      <path
        d="M9.0001 14.9997L15.0001 8.99966"
        stroke="#33363F"
        stroke-width="2"
      />
      <path d="M15 15L9 9" stroke="#33363F" stroke-width="2" />
    </svg>
  );
};

export default CloseIcon;
