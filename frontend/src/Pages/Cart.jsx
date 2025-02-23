import React, { useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Container from "../Layout/Container";
import { Link } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [coupon, setCoupon] = useState("");
  const [couponError, setCouponError] = useState("");
  const [allcartitem, setAllcartitem] = useState([]);
  const data = useSelector((state) => state.userinfo.value);

  const totalPrice = allcartitem.reduce(
    (acc, item) => acc + item.products?.discountprice * item.quantity,
    0
  );

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
    setCouponError("");
  };

  const handleApplyCoupon = () => {
    if (!coupon) setCouponError("Please enter a valid coupon code");
    else console.log("Coupon applied successfully");
  };

  const fethcartitem = () => {
    axios
      .get(`http://localhost:5000/api/v1/cart/getcart/${data.id}`)
      .then((result) => {
        setAllcartitem(result.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fethcartitem();
  }, [allcartitem]);

  const Handleincrement = (item) => {
    axios
      .patch(`http://localhost:5000/api/v1/cart/incrementcart/${item._id}`)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Handledecrement = (item) => {
    axios
      .patch(`http://localhost:5000/api/v1/cart/decrementcart/${item._id}`)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const HandleDeleteproduct = (item) => {
    axios
      .delete(`http://localhost:5000/api/v1/cart/deletecart/${item._id}`)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pt-2 pb-20">
      <Container>
        <div className="text-sm text-gray-500">
          Home / <span className="text-black">Cart</span>
        </div>
        <div className="mt-10 space-y-10">
          <div className="hidden md:grid grid-cols-4 text-center bg-white shadow p-4 rounded-md  font-semibold">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>

          {/* Product List */}
          {allcartitem.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:grid grid-cols-4 place-items-center  bg-white shadow p-4 rounded-md relative"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.products?.image[0]}
                  alt={item.products?.name}
                  className="w-16 h-16 object-contain"
                />
                <p>{item.products?.name}</p>
              </div>
              <p>${item.products?.discountprice}</p>
              <div className="flex items-center gap-2 border p-2 max-w-fit  rounded-md">
                <GrFormPrevious
                  onClick={() => Handledecrement(item)}
                  className="cursor-pointer"
                />
                <span>{item.quantity}</span>
                <GrFormNext
                  className="cursor-pointer"
                  onClick={() => Handleincrement(item)}
                />
              </div>
              <p className="text-base  ">
                {item.products?.discountprice * item?.quantity}
              </p>
              <button
                onClick={() => HandleDeleteproduct(item)}
                className="absolute text-xl top-8 right-2 text-red-500"
              >
                <MdDelete />
              </button>
            </div>
          ))}
        </div>

        {/* Coupon and Cart Total */}
        <div className="mt-10 flex flex-col md:flex-row gap-10">
          <div className="flex flex-col items-center md:items-start">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={handleCouponChange}
              className={`border ${
                couponError ? "border-red-500" : "border-gray-400"
              } rounded-md p-2 w-72`}
            />
            <button
              onClick={handleApplyCoupon}
              className="mt-2 bg-red-800  text-white px-6 py-2 rounded-md hover:bg-gradient-to-r from-pink-500 to-black fill-transparent duration-300  "
            >
              Apply Coupon
            </button>
            {couponError && (
              <p className="text-red-500 text-sm mt-1">{couponError}</p>
            )}
          </div>
          <div className="w-full md:w-96 border-2 border-gray-300 p-4 rounded-md">
            <h2 className="text-lg font-semibold">Cart Total</h2>
            <div className="flex justify-between mt-2 border-b pb-2">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex justify-between mt-2 border-b pb-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>Total:</p>
              <p>${totalPrice}</p>
            </div>
            <Link to="/checkout">
              <button className="mt-4 w-full bg-teal-500 text-white py-2 rounded-md hover:bg-black">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
