import SvgInterface from "../interface/SvgInterface";

const MapIcon = (props: SvgInterface) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      className={props.style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6.88199L2 3.38199V16.618L9 20.118L15 17.118L22 20.618V7.38199L15 3.88199L9 6.88199ZM15 15L9 18V8.99999L15 5.99999V15Z"

      />
    </svg>
  );
};

export default MapIcon;