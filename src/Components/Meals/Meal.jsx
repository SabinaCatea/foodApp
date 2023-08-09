import { useState, useEffect } from "react";

import "./meal.scss";

const Meal = ({ name, description, price }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  console.log("count", count);
  return (
    <div className="meal">
      <div className="details">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <p className="amount">${price}</p>
      </div>
      <div className="price">
        <label className="name">Amount</label>
        <input
          type="number"
          className="count"
          defaultValue="1"
          min="1"
          max="5"
          step="1"
        ></input>
        <br></br>
        <button className="add-button">
          <span onClick={decrement}>- </span>Add{" "}
          <span onClick={increment}>+</span>
        </button>
      </div>
    </div>
  );
};

export default Meal;
