import React from "react";

import { MdDone } from "react-icons/md";
import Container from "../Layout/Container";

const Checkout = () => {
  return (
    <div className="pt-[80px] pb-[140px]">
      <Container>
        <div>
          <p className="text-[14px] text-primaryColor/50 font-normal font-Nunito leading-[21px]">
            Accout / My account / Product / View cart /{" "}
            <span className="text-primaryColor">CheckOut</span>{" "}
          </p>
          <div className=" mt-[80px] gap-[173px] md:flex grid grid-cols-1">
            <div>
              <h2 className="text-4xl text-primaryColor font-medium font-inter leading-[31px]">
                Billing Details
              </h2>
              <div className="w-[470px] h-[814px]">
                <div className="mt-[48px]">
                  <p className="text-base text-primaryColor/40 font-normal font-Nunito">
                    First Name<span className="text-ThirdColor">*</span>
                  </p>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-Nunito pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <p className="text-base text-primaryColor/40 font-normal font-Nunito">
                    Company Name
                  </p>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-Nunito pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <p className="text-base text-primaryColor/40 font-normal font-Nunito">
                    Street Address
                  </p>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-Nunito pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <p className="text-base text-primaryColor/40 font-normal font-Nunito">
                    Apartment, floor, etc. (optional)
                  </p>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-Nunito pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <p className="text-base text-primaryColor/40 font-normal font-Nunito">
                    Town/City<span className="text-ThirdColor">*</span>
                  </p>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-Nunito pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <p className="text-base text-primaryColor/40 font-normal font-Nunito">
                    Phone Number<span className="text-ThirdColor">*</span>
                  </p>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-Nunito pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="mt-[32px]">
                  <p className="text-base text-primaryColor/40 font-normal font-Nunito">
                    Email Address<span className="text-ThirdColor">*</span>
                  </p>
                  <input
                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] text-base text-primaryColor font-normal font-Nunito pl-5 mt-2"
                    type="text"
                  />
                </div>
                <div className="flex mt-6 gap-4">
                  <div className="w-[24px] h-[24px] bg-ThirdColor rounded-[4px] flex justify-center items-center">
                    <MdDone className="text-Secondary text-[14px]" />
                  </div>
                  <p className="text-base text-primaryColor font-normal font-Nunito">
                    Save this information for faster check-out next time
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[527px] h-[600px] mt-[80px]">
              <div>
                <div className="flex justify-between items-center w-[422px] h-[54px]">
                  <div className="flex gap-6 items-center ">
                    <img
                      className="w-[49px] h-[42px]"
                      src="https://eplaza.waltonbd.com/image/cache/data/acc-monitor/ACC_Monitor_angle03_0-00-00-00_copy-220x220h.png"
                      alt="monitorImage"
                    />
                    <p className="text-base text-primaryColor font-normal font-Nunito">
                      LCD Monitor
                    </p>
                  </div>
                  <p className="text-base text-primaryColor font-normal font-Nunito">
                    $650
                  </p>
                </div>
                <div className="flex justify-between items-center mt-[32px] w-[422px] h-[54px]">
                  <div className="flex gap-6 items-center">
                    <img
                      className="w-[49px] h-[42px]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFy-64JiaBHf4qNPtlww7Gzs-txPbkiT6oN4aI5IoGlg&s"
                      alt="GamingImage"
                    />
                    <p className="text-base text-primaryColor font-normal font-Nunito">
                      H1 Gamepad
                    </p>
                  </div>
                  <p className="text-base text-primaryColor font-normal font-Nunito">
                    $1100
                  </p>
                </div>
                <div className="mt-[32px]">
                  <div className="flex justify-between border-b pt-[24px] pb-[16px] border-primaryColor w-[422px]">
                    <p className="text-base  text-primaryColor font-normal font-Nunito">
                      Subtotal:
                    </p>
                    <p className="text-base  text-primaryColor font-normal font-Nunito">
                      $1750
                    </p>
                  </div>
                  <div className="flex justify-between border-b pt-[24px] pb-[16px] border-primaryColor w-[422px]">
                    <p className="text-base  text-primaryColor font-normal font-Nunito">
                      Shipping:
                    </p>
                    <p className="text-base  text-primaryColor font-normal font-Nunito">
                      Free
                    </p>
                  </div>
                  <div className="flex justify-between pt-[16px] pb-[16px] w-[422px] ">
                    <p className="text-base  text-primaryColor font-normal font-Nunito">
                      Total:
                    </p>
                    <p className="text-base  text-primaryColor font-normal font-Nunito">
                      $1750
                    </p>
                  </div>
                </div>
                <div className="mt-[32px] flex gap-[155px]">
                  <div className="flex gap-4">
                    <input
                      className="w-[24px] h-[24px] bg-primaryColor active:bg-primaryColor"
                      type="radio"
                    />
                    <p className="text-base text-primaryColor font-normal font-Nunito">
                      Bank
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <img
                      className="w-[42px] h-[28px]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6g7yjR8QrKmX5nE29j1xwcHbRqU_DUkHWd4jI7aMN_Vu32GLgh56vG1c&s"
                      alt="BkashImage"
                    />
                    <img
                      className="w-[42px] h-[28px]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlLQ570tYriFev_vd83l_HwbyI6KYkXHCSgexJcY6uP7SCXI0qWppE9g&s"
                      alt="Visaimage"
                    />
                    <img
                      className="w-[42px] h-[28px]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMP4-wxGtDMemcwkXOriHwvxtBtHc_k8nktIG_2qZlw&s"
                      alt="MastercardImage"
                    />
                    <img
                      className="w-[42px] h-[28px]"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdKCbUasrDfz_EhGuyl3a6E1zPUDNOPOirtrix9pTUQ&s"
                      alt="NagadImage"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-[32px]">
                  <input
                    className="w-[24px] circle h-[24px] bg-primaryColor checked:bg-primary focus:bg-primary"
                    type="radio"
                  />
                  <p className="text-base text-primaryColor font-normal font-Nunito">
                    Cash on delivery
                  </p>
                </div>
                <div className="md:flex gap-4 mt-[32px] grid grid-cols-1">
                  <input
                    className="w-[300px] h-[56px] border border-primaryColor rounded-[4px] outline-none placeholder:text-base placeholder:text-primaryColor/40  placeholder:font-normal placeholder:font-Nunito pl-6 text-base text-primaryColor font-normal font-Nunito"
                    type="text"
                    placeholder="Coupon Code"
                  />
                  <button className="w-[211px] h-[56px] bg-ThirdColor text-base text-Secondary font-medium font-Nunito rounded-[4px]">
                    Apply Coupon
                  </button>
                </div>
                <button className="w-[211px] h-[56px] bg-ThirdColor text-base text-Secondary font-medium font-Nunito rounded-[4px] mt-[32px]">
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
