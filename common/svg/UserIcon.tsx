import React from "react";
import SvgInterface from "../interface/SvgInterface";

const UserIcon = (props: SvgInterface) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      className={props.style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z" />
    </svg>
  );
};

export default UserIcon;
