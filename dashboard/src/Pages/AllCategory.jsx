// src/components/Categories.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Categories = () => {
  const [allcategory, Setallcategory] = useState([]);
  const [loading, Setloading] = useState(true);
  const [updatemodal, setupdatemodal] = useState(false);
  const [updateid, setupdateid] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updateImage, setUpdateImage] = useState(null);

  useEffect(() => {
    const allcate = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/category/allcategory"
        );
        Setallcategory(data.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
      Setloading(false);
    };
    allcate();
  }, []);

  const handleDelete = async (id) => {
    const token = Cookies.get("token");
    try {
      await axios.delete(
        `http://localhost:4000/api/v1/category/deletecategory/${id}`,
        {
          withCredentials: true,
          headers: { Cookie: `token=${token}` },
        }
      );
      toast.success("Category Deleted Successfully", {
        theme: "light",
        transition: Bounce,
      });
      Setallcategory(allcategory.filter((category) => category._id !== id));
    } catch (error) {
      toast.error(error?.response?.data.error || "Something went wrong", {
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleupdatecategory = (category) => {
    setupdateid(category._id);
    setUpdateName(category.name);
    setUpdateDescription(category.description);
    setupdatemodal(true);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    const data = new FormData();
    data.append("name", updateName);
    data.append("description", updateDescription);
    if (updateImage) data.append("image", updateImage);

    try {
      const response = await axios.patch(
        `http://localhost:4000/api/v1/category/updatecategory/${updateid}`,
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            Cookie: `token=${token}`,
          },
        }
      );
      toast.success(
        response?.data?.message || "Category Updated Successfully",
        { theme: "light", transition: Bounce }
      );

      Setallcategory(
        allcategory.map((category) =>
          category._id === updateid
            ? {
                ...category,
                name: updateName,
                description: updateDescription,
                image: updateImage
                  ? URL.createObjectURL(updateImage)
                  : category.image,
              }
            : category
        )
      );
      setupdatemodal(false);
    } catch (error) {
      toast.error(error?.response?.data.error || "Something went wrong", {
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        transition={Bounce}
      />

      <h1 className="text-3xl font-bold mb-8 text-center">Categories</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading categories...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {allcategory.map((category) => (
            <div
              key={category._id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-700">{category.description}</p>
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => handleDelete(category._id)}
                  className="text-red-500 bg-gray-200 py-2 px-4 rounded-md font-semibold"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleupdatecategory(category)}
                  className="text-white bg-blue-500 py-2 px-4 rounded-md font-semibold"
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {updatemodal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4 text-center">
              Update Category
            </h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">
                  Category Name
                </label>
                <input
                  type="text"
                  value={updateName}
                  onChange={(e) => setUpdateName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Description</label>
                <input
                  type="text"
                  value={updateDescription}
                  onChange={(e) => setUpdateDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">
                  Category Image
                </label>
                <input
                  type="file"
                  onChange={(e) => setUpdateImage(e.target.files[0])}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setupdatemodal(false)}
                  className="bg-gray-400 text-white py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
