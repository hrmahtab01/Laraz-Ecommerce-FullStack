import React from "react";
import Header from "../Components/Header";

import { Outlet } from "react-router";
import  { EcommerceNavbar } from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <EcommerceNavbar/>
      <Outlet />
      <Footer/>
     
    </div>
  );
};

export default RootLayout;
