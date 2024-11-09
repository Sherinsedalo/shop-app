import "./App.css";
import { ProductList } from "./components/ProductList.js";
import { ProductCard } from "./components/ProductCard.js";
import products from "./data";
function App() {
  return (
    <div className="App">
      <ProductList>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductList>
    </div>
  );
}

export default App;
