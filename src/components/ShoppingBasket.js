import "./ShoppingBasket.css";

export function ShoppingBasket({ basket }) {
  const total = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="shoppingBasket">
      <h2>Shopping Basket</h2>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>
            {item.title} - {item.quantity} x {item.price} € = {item.price * item.quantity} €
          </li>
        ))}
      </ul>
      <h3>Total to pay: {total} €HT</h3>
    </div>
  );
}