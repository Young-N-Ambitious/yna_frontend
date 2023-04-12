import React from "react";

const ColoredLine = ({ color, width, height }) => (
  <hr
    style={{
      display: "block",
      color: color,
      backgroundColor: color,
      height: height,
      margin: "auto",
      // textAlign: "center",
      width: width,
    }}
  />
);

export default ColoredLine;
