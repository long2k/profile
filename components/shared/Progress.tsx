import React from "react";

const Circle = ({colour,  percentage }: {colour: string,  percentage: number }) => {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100;
  return (
    <circle
      r={r}
      cx={50}
      cy={50}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"0.5rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};


const Progress = ({ percentage, width, height }: {percentage: number, width: number, height: number}) => {
  return (
    <svg width={width} height={height}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="lightgrey" percentage={0} />
        <Circle colour="#ffb400" percentage={percentage} />
      </g>
      <text
        x="55%"
        y="75%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"1.2em"}
        fill="#ffffff"
      >
        {percentage.toFixed(0)}%
      </text>
    </svg>
  );
};



export default Progress;
