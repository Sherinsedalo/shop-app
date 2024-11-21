import { ProductList } from "./components/ProductList.js";
import { ProductCard } from "./components/ProductCard.js";
import { ShoppingBasket } from "./components/ShoppingBasket.js";
import { Link } from "react-router-dom";
import products from "./data";
import "./App.css";
import { BasketItem } from "./components/BasketItem.js";


function App() {
  const { basket, addToBasket, updatedBasketQuantity, total } = BasketItem();
  return (
    <div className="App">
      <Link to={"/home"}> Home</Link>
      <ProductList>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToBasket={addToBasket}
          />
        ))}
      </ProductList>
      <ShoppingBasket
        basket={basket}
        setBasketQuantity={updatedBasketQuantity}
        total={total}
      />
    </div>
  );
}

export default App;
