import React from "react";
import Container from "../Layout/Container";
import ShopSidebar from "../Components/ShopSidebar";
import AllProduct from "../Components/AllProduct";

const Shop = () => {
  return (
    <section className="mt-10 ">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-3">
            <ShopSidebar />
          </div>
          <div className="col-span-12 lg:col-span-9 lg:ml-3 mt-5 lg:mt-0 ">
            <AllProduct />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
