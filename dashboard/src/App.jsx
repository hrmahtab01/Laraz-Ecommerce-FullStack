import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import AddCategory from "./Pages/AddCategory";
import AllCategory from "./Pages/AllCategory";
import AddProduct from "./Pages/AddProduct";
import AllProduct from "./Pages/AllProduct";
import ProtectedRoute from "./Layout/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path="/addcategory" element={<AddCategory />} />
            <Route path="/allcategory" element={<AllCategory />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/allproduct" element={<AllProduct />} />
          </Route>
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
