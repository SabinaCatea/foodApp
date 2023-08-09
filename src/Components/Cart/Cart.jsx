import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cart.scss";

const Cart = (props) => {
  return (
    <button className="card-container" onClick={props.onShow}>
      <ShoppingCartIcon />
      <span className="cart-button">Your Cart</span>
      <span className="items-count">1</span>
    </button>
  );
};
export default Cart;
