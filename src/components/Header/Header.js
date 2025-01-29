import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../store-contexts/cart-context";
import "./Header.css";


export function Header() {
  const { getQuantityTotal } = useContext(CartContext);

  return (
    <header className="header">
      <Link to={"/home"}> Home</Link>
      <h1>Welcome to the shop!</h1>
      <Link to={"/basket"}>
        <div className="quantityTotal">{getQuantityTotal()}</div>
        <FaShoppingCart className="cartIcon" />
      </Link>
    </header>
  );
}
