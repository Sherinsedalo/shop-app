import { useState, useContext } from "react";
import "./ProductCard.css";
import { QuantityIndicator } from "../Quantity-Btns/QuantityIndicator";
import { CartContext } from "../../store-contexts/cart-context";

export function ProductCard({ product}) {

  const [showMore, setShowMore] = useState(false);
  const [quantity, setQuantity] = useState(0);
const {addToCart} = useContext(CartContext);

  const specifications = product.specifications.map((spec, index) => (
    <li key={index}>{spec}</li>
  ));
  
  const handleAddToBasket = () => {
    if (quantity > 0) {
      addToCart({...product, quantity});
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
        Add to cart - {product.price * quantity}€ HT
      </button>
      <QuantityIndicator quantity={quantity} setQuantity={setQuantity} />
    </article>
  );
}
