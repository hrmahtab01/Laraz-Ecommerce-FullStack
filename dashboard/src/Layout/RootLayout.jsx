import React from "react";
import Home from "../Pages/Home";
import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";

const RootLayout = () => {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
