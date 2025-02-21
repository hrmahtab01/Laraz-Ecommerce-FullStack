import React, { useEffect, useState } from "react";
import Container from "../Layout/Container";
import Image from "../Layout/Image";
import axios from "axios";
import ProductSkeleton from "../Layout/ProductSkeleton";
import { useNavigate } from "react-router";

const Categoris = () => {
  const [allcategory, Setallcategory] = useState([]);
  const [loader, Setloader] = useState(false);
  const navigate = useNavigate();

  const fetchallcategory = () => {
    Setloader(true);
    axios
      .get("http://localhost:5000/api/v1/category/allcategory")
      .then((Response) => {
        Setallcategory(Response.data.data);
      })
      .catch((error) => {
        console.log(error);
        Setloader(false);
      });
  };

  useEffect(() => {
    fetchallcategory();

    Setloader(false);
  }, []);

  const handlescategoryproduct = (id) => {
    navigate(`/singlecategoryproduct/${id}`);
  };
  return (
    <section className="mt-[50px]">
      <Container>
        <div>
          <h2 className="text-xl mt-8 text-center lg:text-2xl font-bold text-primary font-Nunito mb-4">
            Categorys
          </h2>
          {loader ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
              {allcategory.map((item) => (
                <>
                  <div
                    onClick={() => handlescategoryproduct(item._id)}
                    key={item._id}
                    className="xl:w-[300px] mt-5 cursor-pointer border border-gray-500 p-3 rounded-xl gap-4"
                  >
                    <Image
                      className="w-full lg:h-[250px] object-contain"
                      src={item.image}
                      alt={item.name}
                    />
                    <h3 className="text-xl font-tirobangla  text-primary mt-2 text-center">
                      {item.name}
                    </h3>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Categoris;
