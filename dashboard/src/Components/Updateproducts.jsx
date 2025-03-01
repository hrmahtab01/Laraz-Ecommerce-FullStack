import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Updateproducts = ({ item, setProductUpdatemodal }) => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    image: [],
    category: "",
    discountPrice: "",
    sellingPrice: "",
    productStock: "",
  });

  useEffect(() => {
    if (item) {
      setFormData({
        productName: item.name || "",
        description: item.description || "",
        image: item.image || [],
        category: item.category || "",
        discountPrice: item.discountprice || "",
        sellingPrice: item.sellingprice || "",
        productStock: item.stock || "",
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: Array.from(e.target.files),
    }));
  };

  const handleSubmit = (e) => {
    const token = Cookies.get("token");
    e.preventDefault();
    axios
      .patch(
        `http://localhost:5000/api/v1/product/updateproduct/${item._id}`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            Cookies: `token = ${token}`,
          },
        }
      )
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlecross = () => {
    setProductUpdatemodal(false);
  };
  return (
    <div className="py-5 px-7 bg-white shadow-lg rounded-lg z-auto">
      <h1 className="text-2xl font-semibold text-teal-500 text-center">
        Update Product
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter product description"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image
          </label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {formData.image.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.image.map((img, index) => (
                <img
                  key={index}
                  src={typeof img === "string" ? img : URL.createObjectURL(img)}
                  alt={`product-preview-${index}`}
                  className="w-16 h-16 object-cover rounded"
                />
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select category</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
            <option value="Beauty">Beauty</option>
            <option value="Sports">Sports</option>
            <option value="Automotive">Automotive</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Selling Price
          </label>
          <input
            type="text"
            name="sellingPrice"
            value={formData.sellingPrice}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter selling price"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Discount Price
          </label>
          <input
            type="text"
            name="discountPrice"
            value={formData.discountPrice}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter discount price"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Stock
          </label>
          <input
            type="number"
            name="productStock"
            value={formData.productStock}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter product stock"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="submit"
            className=" bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
          >
            Update Product
          </button>
          <button
            className="py-3 px-3 bg-red-500 text-white duration-300 hover:bg-gradient-to-tr rounded-md from-red-800 to-teal-600 "
            onClick={handlecross}
          >
            Cancel{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Updateproducts;
