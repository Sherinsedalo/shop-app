import { useState } from "react";
import { ProductList } from "./components/ProductList.js";
import { ProductCard } from "./components/ProductCard.js";
import { ShoppingBasket } from "./components/ShoppingBasket.js";
import products from "./data";
import "./App.css";

function App() {
  const [basket, setBasket] = useState([]);
  const addToBasket = (product, quantity) => {
    setBasket((prevBasket) => [...prevBasket, { ...product, quantity }]);
  };
  return (
    <div className="App">
      <ProductList>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            addToBasket={addToBasket}
          />
        ))}
      </ProductList>
      <ShoppingBasket basket={basket} />
    </div>
  );
}

export default App;
