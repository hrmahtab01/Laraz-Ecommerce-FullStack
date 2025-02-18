import React, { useEffect, useState } from "react";
import Product from "./Product";
import Paginate from "./Paginate";
import axios from "axios";

const AllProduct = () => {
  const [allproduct, Setallproduct] = useState([]);
  const [loader, Setloader] = useState(false);

  const fetchallproduct = () => {
    Setloader(true);
    axios
      .get("http://localhost:5000/api/v1/product/allproduct")
      .then((Response) => {
        Setallproduct(Response.data.data);
      })
      .catch((error) => {
        console.log(error);
        Setloader(false);
      });
  };

  useEffect(() => {
    fetchallproduct();

    Setloader(false);
  }, []);

  return (
    <aside>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
        <Paginate allproduct={allproduct} itemsPerPage={6} />
      </div>
    </aside>
  );
};

export default AllProduct;
