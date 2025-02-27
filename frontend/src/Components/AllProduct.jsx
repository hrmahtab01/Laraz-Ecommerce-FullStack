import React, { useEffect, useState } from "react";
import Product from "./Product";
import Paginate from "./Paginate";
import axios from "axios";
import { useSelector } from "react-redux";
import Categoryproduct from "./Categoryproduct";
import Container from "../Layout/Container";

const AllProduct = () => {
  const [allproduct, Setallproduct] = useState([]);
  const [loader, Setloader] = useState(false);
  const categoryid = useSelector((state) => state.categoryinfo.value);
  const [categorydata, setcategorydata] = useState([]);

  const fetchAllProduct = () => {
    Setloader(true);
    axios
      .get("http://localhost:5000/api/v1/product/allproduct")
      .then((response) => {
        Setallproduct(response.data.data);
        Setloader(false);
      })
      .catch((error) => {
        console.error(error);
        Setloader(false);
      });
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  const singleCategoryProductFetch = () => {
    if (!categoryid) {
      setcategorydata([]);
      return;
    }

    axios
      .get(`http://localhost:5000/api/v1/category/singlecategory/${categoryid}`)
      .then((response) => {
        console.log(response.data.data.product);

        setcategorydata(response.data.data.product);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    singleCategoryProductFetch();
  }, [categoryid]);

  return (
    <Container>
      <aside>
        {loader ? (
          <p className="text-center text-lg font-bold">Loading...</p>
        ) : categoryid && categorydata.length > 0 ? (
          <div className="mt-[50px]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {categorydata.map((item) => (
                <Categoryproduct key={item._id} products={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <Paginate allproduct={allproduct} itemsPerPage={8} />
          </div>
        )}
      </aside>
    </Container>
  );
};

export default AllProduct;
