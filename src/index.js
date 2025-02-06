import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NotFoundPage from "./pages/NotFoundPage";
import { CartProvider } from "./store-contexts/cart-context.js";
import { ShoppingBasket } from "./components/Cart/ShoppingBasket";
import { ShowsPage } from "./pages/ShowsPage";
import { ShowDetail } from "./components/api/showDetails.js";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/shop",
    element: <App />,
  },
  { path: "/basket", element: <ShoppingBasket /> },

  { path: "/shows", element: <ShowsPage /> },

  { path: "/show/:id", element: <ShowDetail /> },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
