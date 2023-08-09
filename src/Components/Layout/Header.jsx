import Cart from "../Cart/Cart";

import "./header.scss";

const Header = (props) => {
  return (
    <div className="header-container">
      <header className="header-links">
        <h2>Meals</h2>
        <Cart onShow={props.onShow}></Cart>
      </header>
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1601972602288-3be527b4f18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="img-header"
        ></img>
      </div>
      <div className="adds-container">
        <h2 className="add-title">Delicious food, Delivered to you</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p style={{ paddingLeft: 30, paddingRight: 30 }}>
          All our meals are cooked with high quality ingredients, just in-time
          and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
};

export default Header;
