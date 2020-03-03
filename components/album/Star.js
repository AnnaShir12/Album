import React from "react";
import cn from "classnames";
// import "./Star.css";

function Star({ active }) {
  return <div className={cn("Star", { active })}></div>;
}

export default Star;
