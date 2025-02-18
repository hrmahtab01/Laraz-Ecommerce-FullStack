import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Container from "../Layout/Container";
import { Link } from "react-router";

const Cart = () => {
  const [increment, setIncrement] = useState(1);
  const [gameIncrement, setGameIncrement] = useState(2);
  const [coupon, setCoupon] = useState("");
  const [couponError, setCouponError] = useState("");

  const onePrice = 650;
  const twoPrice = 550;
  const monitorTotal = increment * onePrice;
  const gamepadTotal = gameIncrement * twoPrice;
  const totalPrice = monitorTotal + gamepadTotal;

  const handleIncrement = () => setIncrement((prev) => prev + 1);
  const handleDecrement = () =>
    increment > 1 && setIncrement((prev) => prev - 1);
  const handleGameIncrement = () => setGameIncrement((prev) => prev + 1);
  const handleGameDecrement = () =>
    gameIncrement > 1 && setGameIncrement((prev) => prev - 1);

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
    setCouponError("");
  };

  const handleApplyCoupon = () => {
    if (!coupon) setCouponError("Please enter a valid coupon code");
    else console.log("Coupon applied successfully");
  };

  return (
    <div className="pt-2 pb-20">
      <Container>
        <div className="text-sm text-gray-500">
          Home / <span className="text-black">Cart</span>
        </div>
        <div className="mt-10 space-y-10">
          <div className="hidden md:grid grid-cols-4 bg-white shadow p-4 rounded-md text-center font-semibold">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>

          {/* Product List */}
          {[
            {
              name: "LCD Monitor",
              price: onePrice,
              quantity: increment,
              setQuantity: setIncrement,
              img: "https://eplaza.waltonbd.com/image/cache/data/acc-monitor/ACC_Monitor_angle03_0-00-00-00_copy-220x220h.png",
            },
            {
              name: "H1 Gamepad",
              price: twoPrice,
              quantity: gameIncrement,
              setQuantity: setGameIncrement,
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFy-64JiaBHf4qNPtlww7Gzs-txPbkiT6oN4aI5IoGlg&s",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow p-4 rounded-md relative"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
                <p>{item.name}</p>
              </div>
              <p>${item.price}</p>
              <div className="flex items-center gap-2 border p-2 rounded-md">
                <GrFormPrevious
                  onClick={() =>
                    item.setQuantity((prev) => Math.max(1, prev - 1))
                  }
                  className="cursor-pointer"
                />
                <span>{item.quantity}</span>
                <GrFormNext
                  onClick={() => item.setQuantity((prev) => prev + 1)}
                  className="cursor-pointer"
                />
              </div>
              <p>${item.price * item.quantity}</p>
              <button className="absolute top-2 right-2 text-red-500">
                <RxCross2 />
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
              className="mt-2 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700"
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
