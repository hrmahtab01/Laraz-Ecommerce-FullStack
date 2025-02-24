import React, { useEffect, useState } from "react";

import { MdDone } from "react-icons/md";
import Container from "../Layout/Container";
import axios from "axios";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [allcartitem, setAllcartitem] = useState([]);
  const data = useSelector((state) => state.userinfo.value);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [paymentmethod, Setpaymentmethod] = useState("COD");

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
  }, []);

  const totalPrice = allcartitem.reduce(
    (acc, item) => acc + item.products?.discountprice * item.quantity,
    0
  );

  const cart = allcartitem.map((item) => {
    return {
      productid: item.products._id,
      quantity: item.quantity,
    };
  });

  const Handleplaceorder = () => {
    axios
      .post("http://localhost:5000/api/v1/order/addtoorder", {
        user: data.id,
        name,
        email,
        phone,
        address,
        city,
        paymentmethod: paymentmethod,
        cartitem: cart,
        totalprice: totalPrice,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(paymentmethod);

  return (
    <div className="pt-[80px] pb-[140px]">
      <Container>
        <div>
          <p className="text-[14px] text-primaryColor/50 font-normal font-Nunito leading-[21px]">
            Accout / My account / Product / View cart /{" "}
            <span className="text-primaryColor">CheckOut</span>{" "}
          </p>
          <div className=" md:mt-[80px] mt-[40px] gap-[173px] md:flex grid grid-cols-1">
            <div>
              <h2 className="text-4xl text-primaryColor font-medium font-inter leading-[31px]">
                Billing Details
              </h2>
              <div className="w-[470px] h-[614px]">
                <div className="mt-[48px]">
                  <p className="text-base text-primaryColor/40 font-normal font-Nunito">
                    Name<span className="text-ThirdColor">*</span>
                  </p>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-Nunito pl-5 mt-2"
                    type="text"
                  />
                </div>

                <div className="mt-[32px]">
                  <p className="text-base text-primaryColor/40 font-normal font-Nunito">
                    Address
                  </p>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-Nunito pl-5 mt-2"
                    type="text"
                  />
                </div>

                <div className="mt-[32px]">
                  <p className="text-base text-primaryColor/40 font-normal font-Nunito">
                    Town/City<span className="text-ThirdColor">*</span>
                  </p>
                  <input
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-Nunito pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <p className="text-base text-primaryColor/40 font-normal font-Nunito">
                    Phone Number<span className="text-ThirdColor">*</span>
                  </p>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-Nunito pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <p className="text-base text-primaryColor/40 font-normal font-Nunito">
                    Email Address<span className="text-ThirdColor">*</span>
                  </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-[50px]  focus:border-t-teal-500 bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-Nunito pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="flex mt-6 gap-4">
                  <label className="flex items-center gap-4 mt-6">
                    <input type="checkbox" className="w-[24px] h-[24px]" />
                    <span className="text-base text-primaryColor font-normal font-Nunito">
                      Save this information for faster check-out next time
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="w-[527px] h-[600px] ">
              <div>
                {allcartitem.map((item) => (
                  <>
                    <div className="flex justify-between items-center w-[350px] md:w-[422px] h-[54px]">
                      <div className="flex gap-6 items-center ">
                        <img
                          className="w-[49px] h-[42px] object-cover"
                          src={item?.products?.image[0] || ""}
                          alt="monitorImage"
                        />
                        <p className="text-base text-primaryColor font-normal font-Nunito">
                          {item?.products?.name}
                        </p>
                      </div>
                      <p className="text-base text-primaryColor font-normal font-Nunito">
                        {item?.products?.discountprice}
                      </p>
                    </div>
                  </>
                ))}

                <div className="mt-[32px]">
                  <div className="flex justify-between border-b pt-[24px] pb-[16px] border-primaryColor w-[350px] md:w-[422px]">
                    <p className="text-base  text-primaryColor font-normal font-Nunito">
                      Subtotal:
                    </p>
                    <p className="text-base  text-primaryColor font-normal font-Nunito">
                      {totalPrice}
                    </p>
                  </div>
                  <div className="flex justify-between border-b pt-[24px] pb-[16px] border-primaryColor w-[350px] md:w-[422px]">
                    <p className="text-base  text-primaryColor font-normal font-Nunito">
                      Shipping:
                    </p>
                    <p className="text-base  text-primaryColor font-normal font-Nunito">
                      Free
                    </p>
                  </div>
                  <div className="flex justify-between pt-[16px] pb-[16px] w-[350px] md:w-[422px] ">
                    <p className="text-base  text-primaryColor font-normal font-Nunito">
                      Total:
                    </p>
                    <p className="text-base  text-primaryColor font-normal font-Nunito">
                      {totalPrice}
                    </p>
                  </div>
                </div>
                <div className="mt-[32px] flex flex-col gap-4">
                  <label className="flex items-center gap-4">
                    <input
                      onChange={(e) => Setpaymentmethod(e.target.value)}
                      type="radio"
                      name="paymentMethod"
                      value="Online"
                      className="w-[24px] h-[24px]"
                    />
                    <span className="text-base text-primaryColor font-normal font-Nunito">
                      Online
                    </span>
                  </label>

                  <label className="flex items-center gap-4">
                    <input
                      onChange={(e) => Setpaymentmethod(e.target.value)}
                      type="radio"
                      name="paymentMethod"
                      defaultChecked
                      value="COD"
                      className="w-[24px] h-[24px]"
                    />
                    <span className="text-base text-primaryColor font-normal font-Nunito">
                      Cash on Delivery
                    </span>
                  </label>
                </div>
                <div className="md:flex gap-4 mt-[32px] grid grid-cols-1">
                  <input
                    className="w-[300px] h-[56px] border border-primaryColor rounded-[4px] outline-none placeholder:text-base placeholder:text-primaryColor/40  placeholder:font-normal placeholder:font-Nunito pl-6 text-base text-primaryColor font-normal font-Nunito"
                    type="text"
                    placeholder="Coupon Code"
                  />
                  <button className="w-[211px] h-[56px] bg-primary text-base text-white hover:bg-black duration-300 font-medium font-Nunito rounded-[4px]">
                    Apply Coupon
                  </button>
                </div>
                <button
                  onClick={Handleplaceorder}
                  className="md:w-[211px] w-full h-[56px] bg-primary text-base text-white font-medium hover:bg-black duration-300 font-Nunito rounded-[4px] mt-[32px]"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
