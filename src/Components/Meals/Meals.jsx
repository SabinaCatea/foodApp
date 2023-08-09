import { useContext } from "react";
import { CartContext } from "../Store/CartContext";
import Meal from "./Meal";

import "./meals.scss";

const Meals = () => {
  const { meals } = useContext(CartContext);

  return (
    <div className="meal-list">
      <div className="meal-container">
        {meals.map((meal) => {
          return (
            <Meal
              id={meal.id}
              totalAmount="w"
              name={meal.name}
              description={meal.description}
              price={meal.price}
            ></Meal>
          );
        })}
      </div>
    </div>
  );
};

export default Meals;
