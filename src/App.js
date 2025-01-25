import { ProductList } from "./components/Products/ProductList.js";
import { ProductCard } from "./components/Products/ProductCard.js";
import { ShoppingBasket } from "./components/Cart/ShoppingBasket.js";

import products from "./data";
import "./App.css";
import { BasketItem } from "./components/Cart/BasketItem.js";
import { CartProvider } from "./store-contexts/cart-context.js";
import { Header } from "./components/Header/Header";

function App() {
  const { basket, addToBasket, updatedBasketQuantity, total } = BasketItem();
  return (
    <CartProvider value={{ basket, addToBasket, updatedBasketQuantity, total }}>
      <div className="App">
        <Header />
        <ProductList>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToBasket={addToBasket}
            />
          ))}
        </ProductList>

        {/* <ShoppingBasket
        basket={basket}
        setBasketQuantity={updatedBasketQuantity}
        total={total}
      />   */}
      </div>
    </CartProvider>
  );
}

export default App;
