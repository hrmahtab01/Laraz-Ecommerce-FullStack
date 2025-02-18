import { Typography } from "@material-tailwind/react";
import Container from "../Layout/Container";

export default function Footer() {
  return (
    <footer className="w-full bg-white p-8 mt-4">
      <Container>
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 cursor-pointer py-1.5 lg:text-3xl text-xl  font-bold font-anekbangla text-primary "
          >
            Laraz
          </Typography>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal font-Nunito transition-colors hover:text-primary focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>

            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal font-Nunito transition-colors hover:text-primary focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal font-Nunito transition-colors hover:text-primary focus:text-blue-500"
              >
                Shop
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; 2024 Mahtab Creator Of Laraz
        </Typography>
      </Container>
    </footer>
  );
}
