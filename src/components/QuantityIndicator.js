import "./QuantityIndicator.css";

export function QuantityIndicator({ quantity, setQuantity }) {
  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decrement = () =>
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));

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
