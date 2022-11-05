import React from "react";

function Title(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <span style={{ fontSize: "12px" }}>{props.description}</span>
    </div>
  );
}

export default Title;
