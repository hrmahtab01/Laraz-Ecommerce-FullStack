import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import About from "./Components/About";
import Shop from "./Pages/Shop";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Singlecategoryproducts from "./Components/Singlecategoryproducts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/singlecategoryproduct/:id"
            element={<Singlecategoryproducts />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
