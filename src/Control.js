import React from "react";
import "./Burger.css";

const BUTTONS = ["meat", "salad", "cheese", "tomato"];

function Control(props) {
  return (
    <div className="burger">
      {BUTTONS.map((item, idx) => (
        <div className="buttons" key={idx}>
          {item.toUpperCase()}
          <button
            onClick={() => {
              props.addIngredient(item);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              props.remove(item);
            }}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}

export default Control;
