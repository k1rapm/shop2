import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import GoogleIcon from "@mui/icons-material/Google";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useFormik } from "formik";
import { axiosRequest } from "../../utils/axiosRequest";
import { saveToken } from "../../utils/token";
import { Box, Drawer, List, Menu, MenuItem } from "@mui/material";
import img from "../../assets/img/Group 1116606595.png";

const Login = () => {
  let API = import.meta.env.VITE_APP_API_URL;

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async () => {
      try {
        let { data } = await axiosRequest.post(
          `${API}Account/login`,
          formik.values
        );
        if (data.statusCode == 200) {
          saveToken(data.data);
          navigate("/catalog");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <div className="flex border-b-[1px]  p-[30px_95px] gap-[148px] sm:p-[20px_20px]">
        <div className="hidden sm:flex sm:gap-[20px] sm:items-center">
          <div className="sm:flex sm:gap-[10px] sm:w-[250px] sm:items-center">
            <MenuIcon onClick={toggleDrawer(true)} />
            <img
              src={img}
              className="object-cover sm:w-[100px] sm:object-cover"
              alt=""
            />
          </div>
          <div className="sm:flex sm:items-center sm:gap-[5px]">
            <ShoppingCartIcon />
            <PermIdentityIcon sx={{ fontSize: "28px" }} />
          </div>
        </div>
        <div className="flex justify-between flex-1 sm:hidden">
          <img src={img} alt="" />
          <ul className="flex gap-10 justify-center items-center dark:bg-[#252525] dark:text-[white]">
            <li className="text-[16px] text-[#000] fotn-[Poppins] font-[400] not-italic hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              <Link to={"/catalog"}>Home</Link>
            </li>
            <li className="text-[16px] text-[#000] fotn-[Poppins] font-[400] not-italic hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              <Link to={"catalog/contact"}>Contact</Link>
            </li>
            <li className="text-[16px] text-[#000] fotn-[Poppins] font-[400] not-italic hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              <Link to={"catalog/about"}>About</Link>
            </li>
            <li className="text-[16px] text-[#000] fotn-[Poppins] font-[400] not-italic hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              <Link to={"catalog/sign up"}>Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-[24px] sm:hidden">
          <div className="flex rounded-[4px] justify-center items-center gap-[34px] p-[7px_12px_7px_20px] bg-[#F5F5F5] ">
            <input
              type="text"
              className="bg-[#F5F5F5] w-[190px] outline-none"
              placeholder="What are you looking for?"
            />
            <SearchIcon />
          </div>
          <div className="flex gap-[16px] items-center sm:hidden">
            <FavoriteBorderIcon />
            <Link to={"/catalog/shoppingcart"}>
              <ShoppingCartIcon sx={{ width: "30px", height: "30px" }} />
            </Link>
            <PermIdentityIcon
              onClick={handleClick}
              sx={{ fontSize: "28px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <div className="p-[50px] sm:p-[10px]">
        <h1 className="text-[40px] font-[400] text-center">
          Log in to Exclusive
        </h1>
        <h1 className="text-[18px] font-[400] pt-[10px] text-center">
          Enter your details below
        </h1>
        <div className="p-[10px] w-[500px] m-[auto] mt-[20px] rounded-lg sm:w-[100%]">
          <form onSubmit={formik.handleSubmit}>
            <input
              name="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
              className="w-[80%] sm:w-[90%] text-[20px] text-[gray] mt-[10px] outline-none block m-[auto] h-[60px] border-[2px] rounded-lg pl-[10px]"
              placeholder="Email or phone number"
              type="text"
            />
            <input
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-[80%] sm:w-[90%] text-[20px] text-[gray] mt-[10px] outline-none block m-[auto] h-[60px] border-[2px] rounded-lg pl-[10px]"
              placeholder="Password"
              type="password"
            />
            <button
              type="submit"
              className="w-[80%] cursor-pointer sm:w-[90%] text-[18px] font-[600] text-[white] block m-[auto] bg-[#DB4444] rounded-lg h-[60px] mt-[30px]"
            >
              Log In
            </button>
            <input
              value={"Forget Password?"}
              className="w-[80%] sm:w-[90%] text-[#DB4444] text-[18px] font-[600]  block m-[auto] bg-[transparent] border-[2px] rounded-lg h-[60px] mt-[10px]"
              type="button"
            />
          </form>
        </div>
      </div>
      <div className="pl-[100px] justify-between pr-[100px] flex pt-[30px] pb-[30px] bg-[black]  sm:p-[10px] sm:flex-wrap">
        <div className="w-[20%] text-[white] sm:w-[100%] p-[10px]">
          <h1 className="text-[20px] font-[600]">Exclusive</h1>
          <h1 className="text-[18px] font-[600] pt-[10px]">Subscribe</h1>
          <h1 className="text-[17px] font-[400] pt-[10px]">
            Get 10% off your first order
          </h1>
          <div className="flex border-[2px] rounded-lg bg-[black] p-[10px] mt-[10px]">
            <input
              placeholder="Enter your email"
              className="w-[80%] rounded-lg bg-[black] outline-none text-[18px]"
              type="text"
            />
            <SendIcon />
          </div>
        </div>
        <div className="text-[white] w-[19%] sm:w-[100%] sm:p-[10px] ">
          <h1 className="text-[20px] font-[600]">Support</h1>
          <h1 className="text-[18px] font-[600] pt-[10px] text-[#c4c2c2]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </h1>
          <h1 className="text-[17px] font-[600] pt-[10px] text-[#c4c2c2]">
            exclusive@gmail.com
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2]">
            +88015-88888-9999
          </h1>
        </div>
        <div className="text-[white] w-[19%] sm:w-[45%] sm:p-[10px]">
          <h1 className="text-[20px] font-[600]">Account</h1>
          <h1 className="text-[18px] font-[600] pt-[10px] text-[#c4c2c2]">
            My Account
          </h1>
          <h1 className="text-[17px] font-[600] pt-[10px] text-[#c4c2c2]">
            Cart
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            Wishlist
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            Shop
          </h1>
        </div>
        <div className="text-[white] w-[19%] sm:w-[45%] sm:p-[10px]">
          <h1 className="text-[20px] font-[600]">Quick Link</h1>
          <h1 className="text-[18px] font-[600] pt-[10px] text-[#c4c2c2]">
            Privacy Policy
          </h1>
          <h1 className="text-[17px] font-[600] pt-[10px] text-[#c4c2c2]">
            Terms Of Use
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            FAQ
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            Contact
          </h1>
        </div>
        <div className="text-[white] w-[15%] sm:w-[100%] p-[10px]">
          <h1 className="text-[20px] font-[600]">Social</h1>
          <div className="flex gap-[20px] mt-[10px]">
            <FacebookIcon sx={{ width: "30px", height: "30px" }} />
            <TwitterIcon sx={{ width: "30px", height: "30px" }} />
            <InstagramIcon sx={{ width: "30px", height: "30px" }} />
            <InstagramIcon sx={{ width: "30px", height: "30px" }} />
          </div>
        </div>
      </div>
      <div className="p-[20px] bg-[black] border-t-[1px] border-[gray]">
        <h1 className="text-[gray] text-center ">
          Copyright Rimel 2022. All right reserved
        </h1>
      </div>
    </div>
  );
};
export default Login;
