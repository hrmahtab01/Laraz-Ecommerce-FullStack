import React, { useEffect, useState } from "react";
import axios from "axios";

const ShopSidebar = () => {
  const [allcategory, Setallcategory] = useState([]);

  const fetchallcategory = () => {
    axios
      .get("http://localhost:5000/api/v1/category/allcategory")
      .then((Response) => {
        Setallcategory(Response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchallcategory();
  }, []);
  return (
    <div>
      <div className="rounded-md shadow-md shadow-gray-400 p-3">
        <h2 className="mb-3 text-xl font-bold font-Nunito text-primary">
          Categoris
        </h2>
        <ul>
          {allcategory.map((item) => (
            <>
              <li
                key={item._id}
                className="font-Nunito text-lg text-black font-medium mt-1 cursor-pointer select-none hover:text-primary duration-300"
              >
                {item.name}
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="rounded-md shadow-md shadow-gray-400 p-3 mt-4">
        <h2 className="mb-3 text-xl font-bold font-Nunito text-primary">
          Price Filter
        </h2>
        <input
          className="w-full"
          color={"teal"}
          type="range"
          min={500}
          max={5000}
        />
      </div>
    </div>
  );
};

export default ShopSidebar;
