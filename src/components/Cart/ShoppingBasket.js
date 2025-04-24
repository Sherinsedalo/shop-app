import { QuantityIndicator } from "../Quantity-Btns/QuantityIndicator";
import "./ShoppingBasket.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../store-contexts/cart-context";

export function ShoppingBasket() {
  const { cartItems, getCartTotal, removeFromCart, clearCart, addToCart } =
    useContext(CartContext);

  const updateQuantity = (item, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(item);
    } else if (newQuantity > item.quantity) {
      addToCart({ ...item, quantity: newQuantity - item.quantity });
    } else {
      removeFromCart({ ...item, quantity: newQuantity - item.quantity });
    }
  };

  return (
    <div className="shoppingBasket">
      <div className="shoppingBasketHeader">
        <Link to="/shop" className="toShopBtn">
          Go back to the shop
        </Link>
      </div>
      <h1>Shopping Basket</h1>
      {cartItems.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <QuantityIndicator
                  quantity={item.quantity}
                  setQuantity={(newQuantity) =>
                    updateQuantity(item, newQuantity)
                  }
                />
                {item.title} x {item.price} € = {item.price * item.quantity} €
              </li>
            ))}
          </ul>

          <h3>To pay: {getCartTotal()} €HT</h3>
          <button onClick={clearCart} className="clearBtn">
            Empty cart
          </button>
        </>
      )}
    </div>
  );
}
