import React from "react";
import SvgInterface from "../interface/SvgInterface";

const DownloadIcon = (props: SvgInterface) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      className={props.style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.706 5.292L18.707 2.293C18.6143 2.19996 18.5041 2.12617 18.3828 2.07589C18.2614 2.0256 18.1313 1.99981 18 2H6C5.86866 1.99981 5.73857 2.0256 5.61724 2.07589C5.4959 2.12617 5.38571 2.19996 5.293 2.293L2.294 5.292C2.20057 5.38468 2.12647 5.49498 2.076 5.61652C2.02553 5.73805 1.9997 5.8684 2 6V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V6C22.0003 5.8684 21.9745 5.73805 21.924 5.61652C21.8735 5.49498 21.7994 5.38468 21.706 5.292ZM6.414 4H17.586L18.586 5H5.414L6.414 4ZM4 19V7H20L20.002 19H4Z"
        
      />
      <path d="M14 9H10V12H7L12 17L17 12H14V9Z" />
    </svg>
  );
};

export default DownloadIcon;
