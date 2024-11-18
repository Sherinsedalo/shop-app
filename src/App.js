import { useState } from "react";
import { ProductList } from "./components/ProductList.js";
import { ProductCard } from "./components/ProductCard.js";
import { ShoppingBasket } from "./components/ShoppingBasket.js";
import {Link} from 'react-router-dom';
import products from "./data";
import "./App.css";

function App() {
  const [basket, setBasket] = useState([]);
  const addToBasket = (product, quantity) => {
    setBasket((prevBasket) => {
      const existingProductIndex = prevBasket.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        const updatedBasket = [...prevBasket];
        updatedBasket[existingProductIndex].quantity += quantity;
        return updatedBasket;
      } else {
        return [...prevBasket, { ...product, quantity }];
      }
    });
  };

  const updatedBasketQuantity = (itemIndex, newQuantity) => {
    setBasket((prevBasket) => {
      const updatedBasket = [...prevBasket];
      updatedBasket[itemIndex] = {
        ...updatedBasket[itemIndex],
        quantity: newQuantity,
      };
      return updatedBasket;
    });
  };

  return (
  
    <div className="App">
        <Link to={'/home'}> Home</Link>
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
      />
    </div>
  );
}

export default App;
