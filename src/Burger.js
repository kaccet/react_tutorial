import React, { useState } from "react";
import "./App.css";
import "./Burger.css";
import Title from "./Title";
import Control from "./Control";
import axios from "axios";

function Burger() {
  const [ingredients, setIngredients] = useState([]);

  const [yuuuuwe, setYuuuuwe] = useState([]);

  const addIngredient = (item) => {
    const array = [...ingredients];
    array.push(item);
    setIngredients(array);
  };

  const hahaha = async () => {
    const res = await axios.get("https://dummyjson.com/products/2");
    console.log(res.data);
    setYuuuuwe(res.data);
  };

  const remove = (item) => {
    const array = [...ingredients];
    const found = array.findIndex((e) => e === item);

    if (found >= 0) {
      array.splice(found, 1);
      setIngredients(array);
    }
  };
  const removeByIndex = (idx) => {
    const array = [...ingredients];
    array.splice(idx, 1);
    setIngredients(array);
  };
  return (
    <div className="App">
      {yuuuuwe != undefined ? (
        <div>
          <h1>{yuuuuwe.title}</h1>
          <img src={yuuuuwe.thumbnail} />
        </div>
      ) : (
        <></>
      )}
      <header className="App-header">
        <Title title={yuuuuwe.title} description={yuuuuwe.description} />
        <div className="burger">
          <div className="breadTop" />
          {ingredients.map((item, i) => (
            <div
              className={item}
              key={i}
              onClick={() => {
                removeByIndex(i);
              }}
            ></div>
          ))}
          <div className="breadBottom" />
          <Control addIngredient={addIngredient} remove={remove} />
        </div>
        <button
          onClick={() => {
            hahaha();
          }}
        >
          naxios
        </button>
      </header>
    </div>
  );
}
export default Burger;
