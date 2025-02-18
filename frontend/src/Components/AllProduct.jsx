import React from "react";
import Product from "./Product";
import Paginate from "./Paginate";

const AllProduct = () => {
  return (
    <aside>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
        <Paginate itemsPerPage={6}/>
      </div>
    </aside>
  );
};

export default AllProduct;
