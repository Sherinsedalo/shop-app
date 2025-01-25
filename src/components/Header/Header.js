import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <Link to={"/home"}> Home</Link>
      <h1>Welcome to the shop!</h1>
      <Link to={"/shoppingBasket"}> Basket</Link>
    </header>
  );
}
