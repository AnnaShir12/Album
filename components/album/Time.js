import React from "react";

function Time() {
  return (
    <small className="text-muted">
      {new Date().getMinutes() + " " + "min"}
    </small>
  );
}

export default Time;
