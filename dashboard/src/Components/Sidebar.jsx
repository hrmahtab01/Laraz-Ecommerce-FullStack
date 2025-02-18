import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { MdCategory } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RiProductHuntLine } from "react-icons/ri";
import { FaProductHunt } from "react-icons/fa6";
import { Link } from "react-router";

export default function Sidebar() {
  return (
    <Card className="h-[calc(100vh-0rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-black/20">
      <div className="mb-2 p-4">
        <Typography className="font-Tiro" variant="h5" color="blue-gray">
          E-Commerce Dashboard
        </Typography>
      </div>
      <List>
        <ListItem className="font-Tiro select-none">
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/">Dashboard</Link>
        </ListItem>
        <Link to={"/addcategory"}>
          <ListItem className="font-Tiro select-none">
            <ListItemPrefix>
              <MdCategory className="h-5 w-5" />
            </ListItemPrefix>
            Add Category
          </ListItem>
        </Link>
        <Link to={"/allcategory"}>
          <ListItem className="font-Tiro select-none">
            <ListItemPrefix>
              <BiSolidCategoryAlt className="h-5 w-5" />
            </ListItemPrefix>
            All Category
          </ListItem>
        </Link>
        <Link to={"/addproduct"}>
          <ListItem className="font-Tiro select-none">
            <ListItemPrefix>
              <RiProductHuntLine className="h-5 w-5" />
            </ListItemPrefix>
            Add Product
          </ListItem>
        </Link>
        <Link to={"/allproduct"}>
          <ListItem className="font-Tiro select-none">
            <ListItemPrefix>
              <FaProductHunt className="h-5 w-5" />
            </ListItemPrefix>
            All Product
          </ListItem>
        </Link>
        <ListItem className="font-Tiro select-none">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
