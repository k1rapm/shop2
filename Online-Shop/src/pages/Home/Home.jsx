import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../App.css";
import { Autoplay, Pagination } from "swiper/modules";
import AppleIcon from "@mui/icons-material/Apple";
import Card from "../../components/Card/Card";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import Swipe from "../../components/Card/Swiper";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../reduser/counter";
import image6 from "../../assets/img/Services5.svg";
import image7 from "../../assets/img/Services6.svg";
import image8 from "../../assets/img/Services7.svg";
import Card2 from "../../components/Card/Card2";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export function Home() {
  const imgUrl = import.meta.env.VITE_APP_FILES_URL;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);
  console.log(product);
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="w-[90%] m-auto flex flex-col gap-[60px] sm:w-[390px] sm:gap-[40px]">
      <section className="flex pb-[20px] items-center gap-[40px] sm:inline-block">
        <div className="hidden sm:flex p-[0px_20px] sm:rounded-[4px] sm:border w-[300px] sm:m-auto sm:mt-[20px]">
          <div className="sm:p-[16px_0px]  sm:h-[56px] sm:flex  sm:justify-between">
            <input
              type="text"
              placeholder="Search..."
              className="sm:w-[240px] outline-none"
            />
            <SearchIcon />
          </div>
        </div>
        <div className="p-[40px_20px] border-r sm:border-hidden sm:w-[400px] w-[17%] flex flex-col gap-[16px] sm:flex sm:p-[20px] sm:items-start sm:gap-[8px] sm:content-center sm:flex-wrap sm:flex-row">
          <div className="flex justify-between items-center sm:bg-[#F5F5F5] sm:rounded-[4px]  sm:p-[12px_8px_12px_12px]">
            <h1 className="text-[#000] text-[16px] font-[Poppins] fotn-[400]">
              Woman’s Fashion
            </h1>
            <ChevronRightIcon />
          </div>
          <div className="flex justify-between items-center sm:bg-[#F5F5F5] sm:rounded-[4px]  sm:p-[12px_8px_12px_12px]">
            <h1 className="text-[#000] text-[16px] font-[Poppins] fotn-[400]">
              Men’s Fashion
            </h1>
            <ChevronRightIcon />
          </div>
          <h1 className="text-[#000] text-[16px] font-[Poppins] fotn-[400] sm:p-[12px_8px_12px_12px] sm:bg-[#F5F5F5] sm:rounded-[4px]">
            Electronics
          </h1>
          <h1 className="text-[#000] text-[16px] font-[Poppins] fotn-[400] sm:p-[12px_8px_12px_12px] sm:bg-[#F5F5F5] sm:rounded-[4px]">
            Home & Lifestyle
          </h1>
          <h1 className="text-[#000] text-[16px] font-[Poppins] fotn-[400] sm:p-[12px_8px_12px_12px] sm:bg-[#F5F5F5] sm:rounded-[4px]">
            Medicine
          </h1>
          <h1 className="text-[#000] text-[16px] font-[Poppins] fotn-[400] sm:p-[12px_8px_12px_12px] sm:bg-[#F5F5F5] sm:rounded-[4px]">
            Sports & Outdoor
          </h1>
          <h1 className="text-[#000] text-[16px] font-[Poppins] fotn-[400] sm:p-[12px_8px_12px_12px] sm:bg-[#F5F5F5] sm:rounded-[4px]">
            Baby’s & Toys
          </h1>
          <h1 className="text-[#000] text-[16px] font-[Poppins] fotn-[400] sm:p-[12px_8px_12px_12px] sm:bg-[#F5F5F5] sm:rounded-[4px]">
            Groceries & Pets
          </h1>
          <h1 className="text-[#000] text-[16px] font-[Poppins] fotn-[400] sm:p-[12px_8px_12px_12px] sm:bg-[#F5F5F5] sm:rounded-[4px]">
            Health & Beauty
          </h1>
        </div>
        <div>
          <Swiper
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="w-[1200px] h-[400px] sm:w-[400px] sm:h-[633px]"
          >
            <SwiperSlide className="bg-black sm:flex sm:p-[28px_16px] sm:flex-col sm:gap-[38px]">
              <div className="flex flex-col gap-[20px] items-start">
                <div className="flex gap-[24px] items-center">
                  <AppleIcon sx={{ color: "white", fontSize: "40px" }} />
                  <h1 className="text-[16px] text-[#FAFAFA] font-[400] not-italic font-[Poppins] ">
                    iPhone 14 Series
                  </h1>
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-[48px] text-start text-[#FAFAFA] font-[600] font-[Inter]">
                    Up to 10% <br /> off Voucher
                  </h1>
                  <h1 className="text-[#FAFAFA] text-[16px] font-[Poppins] font-[500] not-italic">
                    Shop Now
                  </h1>
                </div>
              </div>
              <div>
                <img
                  className="sm:h-[320px]"
                  src="src/assets/img/hero_endframe__cvklg0xk3w6e_large 2.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-black sm:flex sm:p-[28px_16px] sm:flex-col sm:gap-[38px]">
              <div className="flex flex-col gap-[20px] items-start">
                <div className="flex gap-[24px] items-center">
                  <AppleIcon sx={{ color: "white", fontSize: "40px" }} />
                  <h1 className="text-[16px] text-[#FAFAFA] font-[400] not-italic font-[Poppins] ">
                    iPhone 14 Series
                  </h1>
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-[48px] text-start text-[#FAFAFA] font-[600] font-[Inter]">
                    Up to 10% <br /> off Voucher
                  </h1>
                  <h1 className="text-[#FAFAFA] text-[16px] font-[Poppins] font-[500] not-italic">
                    Shop Now
                  </h1>
                </div>
              </div>
              <div>
                <img
                  className="sm:h-[320px]"
                  src="src/assets/img/hero_endframe__cvklg0xk3w6e_large 2.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-black sm:flex sm:p-[28px_16px] sm:flex-col sm:gap-[38px]">
              <div className="flex flex-col gap-[20px] items-start">
                <div className="flex gap-[24px] items-center">
                  <AppleIcon sx={{ color: "white", fontSize: "40px" }} />
                  <h1 className="text-[16px] text-[#FAFAFA] font-[400] not-italic font-[Poppins] ">
                    iPhone 14 Series
                  </h1>
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-[48px] text-start text-[#FAFAFA] font-[600] font-[Inter]">
                    Up to 10% <br /> off Voucher
                  </h1>
                  <h1 className="text-[#FAFAFA] text-[16px] font-[Poppins] font-[500] not-italic">
                    Shop Now
                  </h1>
                </div>
              </div>
              <div>
                <img
                  className="sm:h-[320px]"
                  src="src/assets/img/hero_endframe__cvklg0xk3w6e_large 2.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="flex flex-col gap-[32px] sm:p-[0px_20px] ">
        <div className="flex items-end gap-[87px] sm:flex-col sm:items-start sm:gap-[20px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[16px]">
              <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-[5px]"></div>
              <p className="text-[#DB4444] text-[20px]">Today’s</p>
            </div>
            <p className="text-[35px] font-bold">Flash Sales</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="flex flex-col">
              <p>Days</p>
              <p className="text-[40px] font-bold">03</p>
            </div>

            <p className="text-[35px] text-[#DB4444] font-bold">:</p>

            <div className="flex flex-col">
              <p>Hours</p>
              <p className="text-[40px] font-bold">23</p>
            </div>

            <p className="text-[35px] text-[#DB4444] font-bold">:</p>

            <div className="flex flex-col">
              <p>Minutes</p>
              <p className="text-[40px] font-bold">19</p>
            </div>

            <p className="text-[35px] text-[#DB4444] font-bold">:</p>

            <div className="flex flex-col">
              <p>Seconds</p>
              <p className="text-[40px] font-bold">56</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[70px] sm:flex sm:flex-col">
          {product?.slice(0, 4).map((el) => {
            return (
              <Card
                id={el.id}
                img={`${imgUrl}${el.image}`}
                discount={el.discountPrice}
                title={el.productName}
                price={el.price}
                initialPrice={"160"}
                stars={88}
              />
              
            );
          })}
        </div>
        <Link className="text-center" to={"products"}>

        </Link>
      </section>
      <hr className="w-[100%] h-[1px]" />

      <section className="flex flex-col gap-[32px] sm:hidden">
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[16px]">
            <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-[5px]"></div>
            <p className="text-[#DB4444] text-[20px]">Categories</p>
          </div>
          <p className="text-[35px] font-bold">Browse By Category</p>
        </div>
        <div className=" flex justify-between items-center">
          <div className="w-[15%] rounded-md p-[20px] flex flex-col gap-2 items-center border border-[gray] hover:text-[white] hover:bg-[#DB4444]">
            <PhoneAndroidOutlinedIcon sx={{ width: "70px", height: "70px" }} />
            <p className="text-[20px]">Phones</p>
          </div>
          <div className="w-[15%] rounded-md p-[20px] flex flex-col gap-2 items-center border border-[gray] hover:text-[white] hover:bg-[#DB4444]">
            <DesktopWindowsOutlinedIcon
              sx={{ width: "70px", height: "70px" }}
            />
            <p className="text-[20px]">Computers</p>
          </div>
          <div className="w-[15%] rounded-md p-[20px] flex flex-col gap-2 items-center border border-[gray] hover:text-[white] hover:bg-[#DB4444]">
            <WatchOutlinedIcon sx={{ width: "70px", height: "70px" }} />
            <p className="text-[20px]">SmartWatch </p>
          </div>
          <div className="w-[15%] rounded-md p-[20px] flex flex-col gap-2 items-center border border-[gray] hover:text-[white] hover:bg-[#DB4444]">
            <CameraAltOutlinedIcon sx={{ width: "70px", height: "70px" }} />
            <p className="text-[20px]">Camera</p>
          </div>
          <div className="w-[15%] rounded-md p-[20px] flex flex-col gap-2 items-center border border-[gray] hover:text-[white] hover:bg-[#DB4444]">
            <HeadsetOutlinedIcon sx={{ width: "70px", height: "70px" }} />
            <p className="text-[20px]">HeadPhones</p>
          </div>
          <div className="w-[15%] rounded-md p-[20px] flex flex-col gap-2 items-center border border-[gray] hover:text-[white] hover:bg-[#DB4444]">
            <VideogameAssetOutlinedIcon
              sx={{ width: "70px", height: "70px" }}
            />
            <p className="text-[20px]">Gaming</p>
          </div>
        </div>
      </section>
      <div>
        <Swipe />
      </div>

      <hr className="w-[100%] h-[1px]" />
      <section className="flex flex-col gap-[32px] sm:p-[0px_20px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[16px]">
            <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-[5px]"></div>
            <p className="text-[#DB4444] text-[20px]">This Month</p>
          </div>
          <div className="flex justify-between  sm:flex-col sm:items-start sm:gap-[10px]">
            <p className="text-[35px] font-bold sm:text-[28px] sm:font-[600]">
              Best Selling Products
            </p>
            <button
              onClick={() => navigate("wishlist")}
              className="bg-[#DB4444] text-[20px] text-white p-[16px_48px] rounded-md sm:p-[10px_24px]"
            >
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[30px] sm:flex sm:flex-col">
          {product?.slice(0, 4).map((el) => {
            return (
              <Card2
                id={el.id}
                img={`${imgUrl}${el.image}`}
                title={el.productName}
                price={el.price}
                initialPrice={"160"}
                stars={88}
              />
            );
          })}
        </div>
      </section>

      <section className="bg-[black] flex items-center justify-between p-[40px_40px] sm:flex sm:flex-col sm:items-start sm:gap-[30px]">
        <div className="flex flex-col gap-5 w-[40%] items-start">
          <p className="text-[#00FF66] text-[20px] sm:text-[16px]">
            Categories
          </p>
          <p className="text-[48px] text-white font-bold sm:text-[28px] sm:font-[600] sm:w-[300px]">
            Enhance Your Music Experience
          </p>
          <div className="flex gap-4 items-center">
            <div className="w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center  bg-white">
              <p className="font-[600]">23</p>
              <p>Hours</p>
            </div>
            <div className="w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center  bg-white">
              <p className="font-[600]">05</p>
              <p>Days</p>
            </div>
            <div className="w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center  bg-white">
              <p className="font-[600]">59</p>
              <p>Minutes</p>
            </div>
            <div className="w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center  bg-white">
              <p className="font-[600]">35</p>
              <p>Seconds</p>
            </div>
          </div>
          <button className="p-[10px_62px] rounded-md text-[20px] bg-[#00ff66] sm:text-[16px] sm:font-[500] ">
            Buy Now!
          </button>
        </div>
        <img
          src="../src/assets/img/kalonka.png"
          className="w-[50%] sm:w-[568px]"
          alt="picture"
        />
      </section>

      <section className="flex flex-col gap-[32px] sm:p-[0px_20px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[16px]">
            <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-[5px]"></div>
            <p className="text-[#DB4444] text-[20px]">Our Products</p>
          </div>
          <p className="text-[35px] font-bold sm:text-[28px]">
            Explore Our Products
          </p>
        </div>
        <div className="grid grid-rows-2 grid-cols-4 gap-[30px] sm:flex sm:flex-col ">
          {product?.slice(0, 8).map((el) => {
            return (
              <Card2
                id={el.id}
                img={`${imgUrl}${el.image}`}
                title={el.productName}
                price={el.price}
                initialPrice={"160"}
                stars={88}
              />
            );
          })}
        </div>
        <button className=" p-[10px_50px] bg-[#DB4444] text-white text-[20px] rounded-md m-[30px_auto_10px_auto]">
          View All Products
        </button>
      </section>

      {/* <section className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-[16px]">
            <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-[5px]"></div>
            <p className="text-[#DB4444] text-[20px]">Featured</p>
          </div>
          <p className="text-[35px] font-bold">New Arrival</p>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </section> */}

      <section className="">
        <div className="pl-[150px] pr-[150px] pt-[50px] pb-[50px] flex justify-between items-center gap-[88px] sm:gap-[48px] sm:flex-wrap sm:p-[10px]">
          <div className="w-[31%] sm:w-[80%] sm:m-[auto] sm:mt-[10px]">
            <img className="block m-[auto]" src={image6} alt="" />
            <h1 className="text-center text-[19px] font-[600] pt-[10px]">
              FREE AND FAST DELIVERY
            </h1>
            <h1 className="text-center pt-[10px] text-[17px] font-[400]">
              Free delivery for all orders over $140
            </h1>
          </div>
          <div className="w-[31%] sm:w-[80%] sm:m-[auto] sm:mt-[10px]">
            <img className="block m-[auto]" src={image7} alt="" />
            <h1 className="text-center text-[19px] font-[600] pt-[10px]">
              24/7 CUSTOMER SERVICE
            </h1>
            <h1 className="text-center pt-[10px] text-[17px] font-[400]">
              Friendly 24/7 customer support
            </h1>
          </div>
          <div className="w-[31%] sm:w-[80%] sm:m-[auto] sm:mt-[10px] sm:mb-[10px]">
            <img className="block m-[auto]" src={image8} alt="" />
            <h1 className="text-center text-[19px] font-[600] pt-[10px]">
              MONEY BACK GUARANTEE
            </h1>
            <h1 className="text-center pt-[10px] text-[17px] font-[400]">
              We reurn money within 30 days
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
