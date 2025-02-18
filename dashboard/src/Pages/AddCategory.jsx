import axios from "axios";
import React, { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import { TbUrgent } from "react-icons/tb";

// Define the AddCategory component
const AddCategory = () => {
  const [name, Setname] = useState("");
  const [description, Setdescription] = useState("");

  const [image, Setimage] = useState("");
  const [existcate, setexistcate] = useState("");
  const [loader, setloader] = useState(false);

  let HandlenameChange = (e) => {
    Setname(e.target.value);
    setexistcate("");
  };

  const HandleSubmit = (e) => {
    const token = Cookies.get("token");
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    if (image) {
      data.append("image", image);
    }

    setloader(true);
    axios
      .post("http://localhost:4000/api/v1/category/createcategory", data, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Cookie: `token = ${token}`,
        },
      })
      .then((result) => {
        toast.success(result?.data?.message || "Category Added Successfully", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setTimeout(() => {
          setloader(false);
        }, 2500);
      })
      .catch((err) => {
        toast.error(err?.response?.data.error || "something went wrong", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setTimeout(() => {
          setloader(false);
        }, 2500);
        setexistcate(err.response.data.error);
        console.log(err);
      });
  };
  return (
    <form
      onSubmit={HandleSubmit}
      className="w-full mx-auto p-6 border border-gray-300 rounded-lg bg-gray-50"
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Add Category
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={HandlenameChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter category name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => Setdescription(e.target.value)}
          name="description"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter category description"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Category Image
        </label>
        <input
          type="file"
          onChange={(e) => Setimage(e.target.files[0])}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter category image "
        />
      </div>
      {loader ? (
        <div className="flex justify-center" role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Category
        </button>
      )}
    </form>
  );
};

export default AddCategory;
