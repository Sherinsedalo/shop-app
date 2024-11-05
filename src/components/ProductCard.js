import { useState } from "react";
import "./ProductCard.css";

export function ProductCard({ product }) {
  const [showMore, setShowMore] = useState(false);

  function QuantityIndicator() {
    const [quantity, setQuantity] = useState(0);
    const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);
    const decrement = () =>
      setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));

    return (
      <div className="quantityBtnContainer">
        <button className="quantityBtnDecrement" onClick={decrement}>
          -
        </button>
        <span>{quantity}</span>
        <button className="quantityBtnincrement" onClick={increment}>
          +
        </button>
      </div>
    );
  }

  return (
    <article className="container">
      <img src={product.imageSrc} alt={product.title} />
      <h3 className="title">{product.title} </h3>
      <p className="description">{product.description}</p>
      <p className="specifications">
        Product details
        <button
          className="informationToggleBtn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "hide" : "show"}
        </button>
      </p>

      {showMore && (
        <ul className="specifications">
          <li>{product.specifications[0]}</li>
          <li>{product.specifications[1]}</li>
          <li>{product.specifications[2]}</li>
        </ul>
      )}

      <button className="purchaseBtn">
        Ajouter au panier - {product.price}€ HT
      </button>
      <QuantityIndicator />
    </article>
  );
}
