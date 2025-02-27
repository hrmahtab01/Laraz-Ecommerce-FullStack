import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { categoryinfo } from "../Slices/CategorySilce";

const ShopSidebar = () => {
  const [allcategory, Setallcategory] = useState([]);
  const [allproduct, Setallproduct] = useState([]);
  const [maxvalue, setMaxvalue] = useState();
  const dispatch = useDispatch();

  const fetchallproduct = () => {
    axios
      .get("http://localhost:5000/api/v1/product/allproduct")
      .then((Response) => {
        Setallproduct(Response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchallproduct();
  }, []);

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

  const HandlefilterPrice = (e) => {
    setMaxvalue(e.target.value);
    const filtered = allproduct.filter(
      (item) => item.sellingprice >= 0 && item.sellingprice <= maxvalue
    );
    console.log(filtered);
  };

  const handlecategoryproduct = (id) => {
    dispatch(categoryinfo(id));
    
  };
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
                onClick={() => handlecategoryproduct(item._id)}
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
        <label className="text-gray-600 font-Nunito font-semibold ">
          Price Range - <span className="text-primary">{maxvalue}</span>
        </label>
        <input
          onChange={HandlefilterPrice}
          className="w-full"
          color={"teal"}
          type="range"
          min={0}
          max={100000}
          defaultValue={100000}
        />
      </div>
    </div>
  );
};

export default ShopSidebar;
