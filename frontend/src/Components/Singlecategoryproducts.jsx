import React, { useEffect, useState } from "react";

import axios from "axios";
import Container from "../Layout/Container";
import { useParams } from "react-router";

import Paginate from "./Paginate";
import Categoryproduct from "./Categoryproduct";

const Singlecategoryproducts = () => {
  const [allproduct, Setallproduct] = useState([]);
  const { id } = useParams();
  const [categoryname, Setcategoryname] = useState({});

  const fetchallproduct = () => {
    axios
      .get(`http://localhost:5000/api/v1/category/singlecategory/${id}`)
      .then((Response) => {
        Setcategoryname(Response.data.data);

        Setallproduct(Response.data.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(allproduct);

  useEffect(() => {
    fetchallproduct();
  }, []);

  return (
    <div className="mt-[50px]">
      <Container>
        <p className="text-2xl text-primaryColor font-medium font-Nunito mb-3">
          Categoryname {categoryname.name}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {allproduct.map((item) => (
            <Categoryproduct key={item._id} products={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Singlecategoryproducts;
