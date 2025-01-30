import "./QuantityIndicator.css";

export function QuantityIndicator({ quantity, setQuantity }) {
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(Math.max(0, quantity - 1));

  return (
    <div className="quantityBtnContainer ">
      <button onClick={decrement} className="quantityBtnDecrement">
        -
      </button>
      <span>{quantity}</span>
      <button onClick={increment} className="quantityBtnincrement">
        +
      </button>
    </div>
  );
}
