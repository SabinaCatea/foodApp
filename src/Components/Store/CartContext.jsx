import { createContext, useState } from "react";

const dummy_meals = [
  {
    id: 1,
    name: "Chicken",
    description: "The best chicken in the world",
    price: 22.67,
  },
  {
    id: 2,
    name: "Chicken2",
    description: "The best chicken in the world2",
    price: 22.69,
  },
  {
    id: 3,
    name: "Chicken3",
    description: "The best chicken in the world3",
    price: 22.9,
  },
  {
    id: 4,
    name: "Chicken4",
    description: "The best chicken in the world",
    price: 22.67,
  },
  {
    id: 5,
    name: "Chicken5",
    description: "The best chicken in the world",
    price: 22.67,
  },
];

export const CartContext = createContext({
  meals: [],
  setMeals: () => {},
  totalAmount: 0,
  setTotalAmount: () => {},
});

export const CartProvider = ({ children }) => {
  const [meals, setMeals] = useState(dummy_meals);
  const [totalAmount, setTotalAmount] = useState(0);

  const value = { meals, setMeals, totalAmount, setTotalAmount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
