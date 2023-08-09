import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Modal from "./Components/Cart/Modal";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  // const totalAmountHandler = (amount) => {
  //   setTotal((prevState) => prevState + amount);
  //   console.log("total", total);
  // };
  return (
    <>
      {showModal && <Modal onClose={hideModalHandler}></Modal>}
      <Header onShow={showModalHandler}></Header>
      <Meals></Meals>
    </>
  );
}

export default App;
