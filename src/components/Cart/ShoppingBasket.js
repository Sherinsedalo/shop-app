import { QuantityIndicator } from "../Quantity-Btns/QuantityIndicator";
import "./ShoppingBasket.css";
import { Link } from "react-router-dom";

export function ShoppingBasket({ basket, setBasketQuantity, total }) {
  return (
    <div className="shoppingBasket">
      <h2>Shopping Basket</h2>

      {basket.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <>
          <ul>
            {basket.map((item, index) => (
              <li key={item.id}>
                <QuantityIndicator
                  quantity={item.quantity}
                  setQuantity={(newQuantity) =>
                    setBasketQuantity(index, newQuantity)
                  }
                />
                {item.title} x {item.price} € = {item.price * item.quantity} €
              </li>
            ))}
          </ul>
          <h3>To pay: {total} €HT</h3>
        </>
      )}
    </div>
  );
}
