import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Userlogininformation } from "../Slices/userSlice";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [passworderr, setpassworderr] = useState("");
  const [adminerr, setadminerr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandlepasswordCHange = (e) => {
    setpassword(e.target.value);
    setpassworderr("");
  };
  const Handleemailchange = (e) => {
    setemail(e.target.value);
    setemailerr("");
    setadminerr("");
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setemailerr("email is require");
    }
    if (!password) {
      setpassworderr("password is require");
    }
    axios
      .post(
        "http://localhost:4000/api/v1/auth/login",
        { email, password },
        { withCredentials: true }
      )
      .then((result) => {
        toast.success(result?.data?.message || "login successfully", {
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
        if (result.data.user.role === "admin") {
          setTimeout(() => {
            // localStorage.setItem("userdata", JSON.stringify(result.data.user))
            dispatch(Userlogininformation(result.data.user));
            Cookies.set(
              "user",
              String(result.data.user.role + result.data.user.id),
              { expires: 5 / 1440 }
            );
            navigate("/");
          }, 2500);
        } else {
          setadminerr("you are not valid ");
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data.error || "something went wrong", {
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
      });
  };
  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">
              Sign in
            </h2>
            <form onSubmit={HandleSubmit} className="mt-8 space-y-4">
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
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    onChange={Handleemailchange}
                    value={email}
                    name="email"
                    type="text"
                    required=""
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter your email"
                  />
                </div>
                {emailerr && (
                  <p className="text-sm font-semibold text-red-500 font-sans">
                    {emailerr}
                  </p>
                )}
                {adminerr && (
                  <p className="text-sm font-semibold text-red-500 font-sans">
                    {adminerr}
                  </p>
                )}
              </div>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    onChange={HandlepasswordCHange}
                    value={password}
                    name="password"
                    type="password"
                    required=""
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                {passworderr && (
                  <p className="text-sm font-semibold text-red-500 font-sans">
                    {passworderr}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="jajvascript:void(0);"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">
                Don't have an account?{" "}
                <a
                  href="javascript:void(0);"
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Register here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
