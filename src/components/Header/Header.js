import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <Link to={"/home"}> Home</Link>
      <h1>Welcome to the shop!</h1>
      <Link to={"/basket"}>
        {" "}
        <FaShoppingCart className="cartIcon" />
      </Link>
    </header>
  );
}
