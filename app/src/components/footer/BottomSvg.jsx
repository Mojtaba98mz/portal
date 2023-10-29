import * as React from "react";
const SVGComponent = (props) => (
    <svg
      viewBox="0 0 1920 520"
      width="100%"
      fill="white"
      preserveAspectRatio="none"
      style={{ maxHeight:"150px" }}
      {...props}
    >
      <title>{"Section Divider"}</title>
      <path d="M1920,0,1262.91,410.4a556.46,556.46,0,0,1-605.82,0L0,0V520H1920Z" />
    </svg>
);
export default SVGComponent;
