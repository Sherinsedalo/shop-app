import { ProductList } from "./components/Products/ProductList.js";
import { ProductCard } from "./components/Products/ProductCard.js";

import products from "./data";
import "./App.css";
import { CartProvider } from "./store-contexts/cart-context.js";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <ProductList>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductList>
      </div>
    </CartProvider>
  );
}

export default App;
