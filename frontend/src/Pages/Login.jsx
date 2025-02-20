import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { userlogininfo } from "../Slices/UserSilce";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const HandleEmailchange = (e) => {
    setEmail(e.target.value);
  };

  const HandlePasswordchange = (e) => {
    setPassword(e.target.value);
  };

  const HandleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      axios
        .post("http://localhost:5000/api/v1/auth/login", { email, password })
        .then((result) => {
          console.log(result);

          dispatch(userlogininfo(result.data.user));
          localStorage.setItem("user", JSON.stringify(result.data.user));
          Cookies.set("token", result.data.token, { expires: 7 });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <section className="grid text-center h-screen items-center p-8">
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
