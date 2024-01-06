import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Components/HomePage";
import AccountBanner from "./Components/AccountBanner";
import ProductPage from "./Components/ProductPage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RegisterPage from "./Components/RegisterPage";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import { CartProvider } from "./Context/CartContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/E-Commerce-Web-React/" element={<Layout />}>
      <Route index exact="true" element={<HomePage />} />
      <Route path="login" exact element={<AccountBanner />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="products/:productId" element={<ProductDetails />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
