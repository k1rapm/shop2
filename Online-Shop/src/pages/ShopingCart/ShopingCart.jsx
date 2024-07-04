import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton } from "@mui/material";
import {
  clearCart,
  deleteCart,
  getCart,
  increase,
  reduce,
} from "../../reduser/counter";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ShopingCart = () => {
  const dispatch = useDispatch();

  const imgUrl = import.meta.env.VITE_APP_FILES_URL;

  const [avarages, setAvarages] = useState(0);

  const Cart = useSelector((state) => state.product.Cart);
  console.log(Cart);

  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    let total = 0;
    Cart?.forEach((el) => {
      total += el.product.price * el.quantity;
    });
    setAvarages(total);
    dispatch(getCart());
  }, [avarages]);

  return (
    <div>
      <div className="pl-[100px] pr-[100px] pt-[30px] pb-[30px] sm:p-[10px]">
        <h1 className="text-[20px]">
          <span className="text-[gray]">Home /</span> Cart
        </h1>
        <table className="w-[100%]">
          <thead className="h-[60px]">
            <tr>
              <th className=" text-[17px] text-[gray] text-start">Product</th>
              <th className=" text-[17px] text-[gray] text-start">Price</th>
              <th className=" text-[17px] text-[gray] text-start">Quantity</th>
              <th className=" text-[17px] text-[gray] text-start">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {Cart?.map((el) => {
              return (
                <tr className="shadow-[0px_2px_16px_0px_rgba(0,_0,_0,_0.08)]  rounded-[4px] p-[20px_32px]">
                  <td className="w-[25%] h-[100px]">
                    <div className="flex w-[90%] m-[auto] items-center gap-[20px] p-[20px  ]">
                      <img
                        className="w-[70px] h-[70px] object-cover rounded-lg"
                        src={`${imgUrl}${el.product?.image}`}
                        alt="picture"
                      />
                      <h1 className="text-[18px] sm:hidden">
                        {el.product?.productName}
                      </h1>
                    </div>
                  </td>
                  <td className="text-start text-[18px]">
                    ${el.product?.price}
                  </td>
                  <td>
                    <div className="flex items-center gap-[20px]">
                      <h1>{el?.quantity}</h1>
                      <div className="">
                        <ArrowDropUpIcon
                          onClick={() => dispatch(increase(el.id))}
                          sx={{ display: "block", cursor: "pointer" }}
                        />
                        <ArrowDropDownIcon onClick={() => dispatch(reduce(el.id))} sx={{ cursor: "pointer" }} />
                      </div>
                    </div>
                  </td>
                  <td className="text-start text-[18px] font-[400]">
                    <h1>{el.product?.price * el?.quantity}$</h1>
                  </td>
                  <td>
                    <IconButton onClick={() => dispatch(deleteCart(el?.id))}>
                      <HighlightOffIcon
                        sx={{ marginLeft: "00px", color: "red" }}
                      />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-between items-center pt-[10px] pb-[10px] mt-[20px] sm:flex-wrap">
          <Link to={"/catalog"}>
            <button className="border-[2px] text-[18px] sm:w-[150px] border-[black] w-[200px] h-[50px] rounded-[5px]">
              Return To Shop
            </button>
          </Link>
          <div className="flex gap-[30px] sm:flex-wrap sm:items-center">
            <button className="border-[2px] sm:block sm:m-[auto] sm:w-[150px]  text-[18px] border-[black] w-[200px] h-[50px] rounded-[5px]">
              Update Cart
            </button>
            <button
              onClick={() => dispatch(clearCart())}
              className="border-[2px] sm:block sm:m-[auto] sm:mt-[10px] text-[18px] border-[red] text-[red] w-[200px] h-[50px] rounded-[5px]"
            >
              Remove all
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-[20px] sm:flex-wrap">
          <div className="flex gap-[30px] w-[38%] sm:w-[100%]">
            <button className="border-[2px] border-[black] text-[18px] w-[250px] h-[50px] rounded-[5px]">
              Coupon Code
            </button>
            <button className="border-[2px] border-[red] text-[18px] text-[red] w-[150px] h-[50px] rounded-[5px]">
              Apply
            </button>
          </div>
          <div className="w-[35%] border-[2px] border-[black] bg-[whitesmoke] rounded-md p-[20px] sm:w-[100%] sm:mt-[20px]">
            <h1 className="text-[20px] font-[500]">Cart Total</h1>
            <div className="flex justify-between items-center mt-[10px]">
              <h1 className="text-[18px] font-[500]">Subtotal:</h1>
              <h1 className="text-[18px] font-[500]">$1750</h1>
            </div>
            <div className="flex justify-between items-center border-b-[2px] pb-[15px] border-[black]">
              <h1 className="text-[18px] font-[500]">Shipping:</h1>
              <h1 className="text-[18px] font-[500]">free</h1>
            </div>
            <div className="flex justify-between items-center pt-[10px]">
              <h1 className="text-[20px] font-[500]">Total:</h1>
              <h1 className="text-[20px] font-[500]">{avarages / 10}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopingCart;
