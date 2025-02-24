import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { userlogininfo } from "../Slices/UserSilce";
import { Slide, toast, ToastContainer } from "react-toastify";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [loader, setLoader] = useState(false);

  const HandleEmailchange = (e) => {
    setEmail(e.target.value);
  };

  const HandlePasswordchange = (e) => {
    setPassword(e.target.value);
  };

  const HandleLogin = (e) => {
    setLoader(true);
    e.preventDefault();

    if (email && password) {
      axios
        .post("http://localhost:5000/api/v1/auth/login", { email, password })
        .then((result) => {
          toast.success(result?.data?.message || "Login successfully", {
            position: "top-left",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });

          dispatch(userlogininfo(result.data.user));
          localStorage.setItem("user", JSON.stringify(result.data.user));
          Cookies.set("token", result.data.token, { expires: 7 });
          setTimeout(() => {
            setLoader(false);
            navigate("/");
          }, 2500);
        })
        .catch((error) => {
          toast.error(error?.response?.data.error || "Something went wrong", {
            position: "top-left",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
          setTimeout(() => {
            setLoader(false);
          }, 2500);
        });
    }
  };
  return (
    <section className="grid text-center h-screen items-center p-8">
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Log In
        </Typography>
        <Typography className="mb-16 text-black font-normal font-Nunito text-[18px]">
          Enter your email and password to Log in
        </Typography>
        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-black font-Nunito"
              >
                Your Email
              </Typography>
            </label>
            <Input
              onChange={HandleEmailchange}
              value={email}
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-red-500 border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-black font-Nunito"
              >
                Password
              </Typography>
            </label>
            <Input
              onChange={HandlePasswordchange}
              value={password}
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-red-500 border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
          </div>
          {loader ? (
            <div className="flex justify-center ml-12 " role="status">
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
            <Button
              onClick={HandleLogin}
              type="submit"
              color="gray"
              size="lg"
              className="mt-6 bg-primary hover:bg-black duration-300"
              fullWidth
            >
              sign in
            </Button>
          )}
          <div className="!mt-4 flex justify-end">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              Forgot password
            </Typography>
          </div>

          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal font-Nunito"
          >
            Not registered?{" "}
            <Link to={"/signup"}>
              <a className="font-medium text-black font-Nunito">
                Create account
              </a>
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default Login;
