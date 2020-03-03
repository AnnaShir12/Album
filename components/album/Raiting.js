import React from "react";
import Star from "./Star";
// import cn from "classnames";

function Raiting(props) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<Star key={i} active={i < props.value} />);
  }

  return <div className="Raiting">{stars}</div>;
}

export default Raiting;
