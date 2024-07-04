import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useState } from "react";
import { Box } from "@mui/material";
import img from "../assets/img/Group 1116606595.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Layout = () => {


  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <h1 className="text-[16px] text-[#000] fotn-[Poppins] font-[400] not-italic sm:p-[20px]">
          <Link to={"/catalog"}>Home</Link>
        </h1>
        <h1 className="text-[16px] text-[#000] fotn-[Poppins] font-[400] not-italic sm:p-[20px]">
          <Link to={"contact"}>Contact</Link>
        </h1>
        <h1 className="text-[16px] text-[#000] fotn-[Poppins] font-[400] not-italic sm:p-[20px]">
          <Link to={"about"}>About</Link>
        </h1>
        <h1 className="text-[16px] text-[#000] fotn-[Poppins] font-[400] not-italic sm:p-[20px]">
          <Link to={"sign up"}>Sign Up</Link>
        </h1>
      </List>
    </Box>
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="">
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

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

      <div className="flex border-b-[1px] sm:justify-center p-[30px_95px] gap-[148px] sm:p-[20px_20px]">
        <div className="hidden sm:flex  sm:gap-[20px] sm:items-center">
          <div className="sm:flex sm:gap-[10px] sm:w-[250px] sm:items-center">
            <MenuIcon onClick={toggleDrawer(true)} />
            <h1 className="text-[#000] text-[24px] font-[700]">Exclusive</h1>
            {/* <img
              src={img}
              className="object-cover sm:w-[100px] sm:object-cover"
              alt=""
            /> */}
          </div>
          <div className="sm:flex sm:items-center sm:gap-[5px]">
            <Link to={"/catalog/shoppingcart"}>
              <ShoppingCartIcon sx={{ fontSize: "25px", height: "30px" }} />
            </Link>
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
              <Link to={"sign up"}>Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-[24px] sm:hidden">
          <div className="flex rounded-[4px] justify-center items-center gap-[34px] p-[7px_12px_7px_20px] bg-[#F5F5F5] ">
            <input
              type="text"
              className="bg-[#F5F5F5] w-[190px] outline-none"
              placeholder="Search..."
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
      <Outlet />
      <footer className="bg-[#000] p-[30px_95px] flex flex-col items-center gap-[16px] sm:p-[32px_20px_24px_20px] sm:gap-[40px]">
        <div className="flex gap-[87px] sm:flex sm:flex-col sm:gap-[36px]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[24px]">
              <h1 className="text-[#FAFAFA] text-[24px] font-[700] font-[Inter] not-italic">
                Exclusive
              </h1>
              <h1 className="text-[#FAFAFA] text-[20px] font-[500] font-[Poppins] not-italic">
                Subscribe
              </h1>
              <h2 className="text-[#FAFAFA] text-[15px] fotn-[Poppins] font-[400] not-italic">
                Get 10% off your first order
              </h2>
            </div>
            <div className="p-[12px_0px_12px_16px] rounded-[4px] border-[1.5px] border-solid border-[#FAFAFA]">
              <input
                type="text"
                placeholder="Enter your email"
                className="outline-none bg-transparent text-[#FAFAFA] font-[Poppins] text-[16px] font-[400] not-italic"
              />
              <SendIcon sx={{ color: "white" }} />
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[#FAFAFA] text-[20px] fotn-[Poppins] font-[400] not-italic">
              Support
            </h1>
            <div className="flex flex-col gap-[16px]">
              <h1 className="text-[#FAFAFA] text-[15px] fotn-[Poppins] font-[400] not-italic">
                111 Bijoy sarani, Dhaka,
                <br /> DH 1515, Bangladesh.
              </h1>
              <h1 className="text-[#FAFAFA] text-[15px] fotn-[Poppins] font-[400] not-italic">
                exclusive@gmail.com
              </h1>
              <h1 className="text-[#FAFAFA] text-[15px] fotn-[Poppins] font-[400] not-italic">
                +88015-88888-9999
              </h1>
            </div>
          </div>
          <div className="flex gap-[87px] sm:flex sm:justify-center sm:items-start sm:gap-[87px]">
            <div className="flex flex-col gap-[24px]">
              <h1 className="text-[#FAFAFA] text-[20px] fotn-[Poppins] font-[400] not-italic">
                Account
              </h1>
              <div className="flex flex-col gap-[16px]">
                <h1 className="text-[#FAFAFA] text-[15px] fotn-[Poppins] font-[400] not-italic">
                  My Account
                </h1>
                <h1 className="text-[#FAFAFA] text-[15px] fotn-[Poppins] font-[400] not-italic">
                  Cart
                </h1>
                <h1 className="text-[#FAFAFA] text-[15px] fotn-[Poppins] font-[400] not-italic">
                  Wishlist
                </h1>
                <h1 className="text-[#FAFAFA] text-[15px] fotn-[Poppins] font-[400] not-italic">
                  Shop
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <h1 className="text-[#FAFAFA] text-[20px] fotn-[Poppins] font-[400] not-italic">
                Quick Link
              </h1>
              <div className="flex flex-col gap-[16px]">
                <h1 className="text-[#FAFAFA] text-[15px] fotn-[Poppins] font-[400] not-italic">
                  Privacy Policy
                </h1>
                <h1 className="text-[#FAFAFA] text-[15px] fotn-[Poppins] font-[400] not-italic">
                  {" "}
                  Terms Of Use
                </h1>
                <h1 className="text-[#FAFAFA] text-[15px] fotn-[Poppins] font-[400] not-italic">
                  FAQ
                </h1>
                <h1 className="text-[#FAFAFA] text-[15px] fotn-[Poppins] font-[400] not-italic">
                  Contact
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[#FAFAFA] text-[20px] fotn-[Poppins] font-[400] not-italic">
              Social
            </h1>
            <div className="flex gap-[24px]">
              <FacebookIcon sx={{ color: "white" }} />
              <TwitterIcon sx={{ color: "white" }} />
              <InstagramIcon sx={{ color: "white" }} />
              <LinkedInIcon sx={{ color: "white" }} />
            </div>
          </div>
        </div>
        <div className="border-t w-[114%] text-center pt-[20px] sm:w-[400px]">
          <h1 className="text-[var(--Primary,_#FFF)] text-[16px] font-[400] fotn-[Poppins] not-italic sm:w-[160px] sm:m-auto">
            Copyright Rimel 2022. All right reserved
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
