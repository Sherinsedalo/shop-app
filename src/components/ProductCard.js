import { useState } from "react";
import "./ProductCard.css";
import { QuantityIndicator } from "./QuantityIndicator";

export function ProductCard({ product, addToBasket }) {
  const [showMore, setShowMore] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const specifications = product.specifications.map((spec, index) => (
    <li key={index}>{spec}</li>
  ));
  const handleAddToBasket = () => {
    if (quantity > 0) {
      addToBasket(product, quantity);
      setQuantity(0);
    }
  };

  return (
    <article className="container">
      <img src={product.imageSrc} alt={product.title} />
      <h3 className="title">{product.title} </h3>
      <p className="description">{product.description}</p>
      <p className="specifications">
        Product details:
        <button
          className="informationToggleBtn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "hide" : "show"}
        </button>
      </p>

      {showMore && <ul className="specifications">{specifications}</ul>}

      <button className="purchaseBtn" onClick={handleAddToBasket}>
        Ajouter au panier - {product.price * quantity}€ HT
      </button>
      <QuantityIndicator quantity={quantity} setQuantity={setQuantity} />
    </article>
  );
}
