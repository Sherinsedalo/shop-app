import { useState } from "react";

export function BasketItem() {
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

  const total = basket.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return { basket, addToBasket, updatedBasketQuantity, total };
}
