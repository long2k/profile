import SvgInterface from "@/common/interface/SvgInterface";

const BagIcon = (props: SvgInterface) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      className={props.style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 20H6V10C6 9.73478 6.10536 9.48043 6.29289 9.29289C6.48043 9.10536 6.73478 9 7 9H19V7C19 6.73478 18.8946 6.48043 18.7071 6.29289C18.5196 6.10536 18.2652 6 18 6H14.949C14.697 3.756 12.81 2 10.5 2C8.19 2 6.303 3.756 6.051 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20ZM10.5 4C11.707 4 12.718 4.86 12.95 6H8.05C8.282 4.86 9.293 4 10.5 4Z"
      />
      <path
        d="M21 11H9C8.73478 11 8.48043 11.1054 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12V20C8 20.5304 8.21071 21.0391 8.58579 21.4142C8.96086 21.7893 9.46957 22 10 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11ZM15 18C12.243 18 10 15.757 10 13H12C12 14.654 13.346 16 15 16C16.654 16 18 14.654 18 13H20C20 15.757 17.757 18 15 18Z"

      />
    </svg>
  );
};

export default BagIcon;
