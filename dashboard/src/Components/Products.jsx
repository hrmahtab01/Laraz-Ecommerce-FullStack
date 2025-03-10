import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Cookies from "js-cookie";
import Updateproducts from "./Updateproducts";

const Products = ({ item }) => {
  const [productUpdatemodal, setProductUpdatemodal] = useState(false);
  const handleDeleteproduct = (id) => {
    const token = Cookies.get("token");
    console.log(id);

    axios
      .delete(`http://localhost:5000/api/v1/product/deleteproduct/${id} `, {
        withCredentials: true,
        headers: { Cookie: `token=${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateproduct = (item) => {
    setProductUpdatemodal(true);
  };

  const classes = "p-4 border-b border-blue-gray-50";
  return (
    <div className="z-50">
      <tr
        className="lg:flex items-center justify-between gap-4"
        key={item._id || index}
      >
        <td className={classes}>
          <div className="flex items-center gap-3">
            <Avatar
              src={item.image[0]}
              alt={item.name || "Product Image"}
              size="md"
              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
            />
          </div>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {item.name}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {item.description || "No description available"}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            BDT {item.sellingprice || "N/A"}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {item.category || "Uncategorized"}
          </Typography>
        </td>
        <td className={`${classes} flex items-center gap-2`}>
          <Tooltip content="Edit Product">
            <IconButton
              onClick={() => handleUpdateproduct(item)}
              variant="text"
            >
              <PencilIcon className="h-4 w-4" />
            </IconButton>
          </Tooltip>
          <MdDelete
            onClick={() => handleDeleteproduct(item._id)}
            className="text-base font-semibold font-sans text-red-500 cursor-pointer"
          />
        </td>
      </tr>
      {productUpdatemodal && (
        <div className="w-full h-screen z-50 bg-black/40 absolute top-0 left-0 ">
          <h1>corss</h1>
          <Updateproducts
            item={item}
            setProductUpdatemodal={setProductUpdatemodal}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
