import { ProductList } from "./components/Products/ProductList.js";
import { ProductCard } from "./components/Products/ProductCard.js";
import products from "./data";
import "./App.css";

import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </div>
  );
}

export default App;
