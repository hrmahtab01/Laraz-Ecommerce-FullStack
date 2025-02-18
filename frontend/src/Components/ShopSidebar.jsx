import React from "react";

const ShopSidebar = () => {
  return (
    <div>
      <div className="rounded-md shadow-md shadow-gray-400 p-3">
        <h2 className="mb-3 text-xl font-bold font-Nunito text-primary">
          Categoris
        </h2>
        <ul>
          <li className="font-Nunito text-lg text-black font-medium mt-1 cursor-pointer select-none hover:text-primary duration-300">
            T - Shirt
          </li>
          <li className="font-Nunito text-lg text-black font-medium mt-1 cursor-pointer select-none hover:text-primary duration-300">
            Shirt
          </li>
          <li className="font-Nunito text-lg text-black font-medium mt-1 cursor-pointer select-none hover:text-primary duration-300">
            Laptop
          </li>
          <li className="font-Nunito text-lg text-black font-medium mt-1 cursor-pointer select-none hover:text-primary duration-300">
            Desktop
          </li>
        </ul>
      </div>
      <div className="rounded-md shadow-md shadow-gray-400 p-3 mt-4">
        <h2 className="mb-3 text-xl font-bold font-Nunito text-primary">
          Price Filter
        </h2>
        <input className="w-full" color={"teal"} type="range" min={500} max={5000} />
      </div>
    </div>
  );
};

export default ShopSidebar;
