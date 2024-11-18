import { QuantityIndicator } from "./QuantityIndicator";
import "./ShoppingBasket.css";

export function ShoppingBasket({ basket, setBasketQuantity }) {
  const total = basket.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="shoppingBasket">
      <h2>Shopping Basket</h2>

      {basket.length === 0 ? (
        <p>Votre panier est vide</p>
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
