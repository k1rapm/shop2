import { Rating } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postCart } from "../../reduser/counter";

const Card2 = ({ img, title, price, initialPrice, stars, id }) => {
  const dispatch = useDispatch()
  return (
    <div className="rounded-sm overflow-hidden flex flex-col gap-2">
      <div className="product bg-[#ccc] relative py-[20px] ">
        <Link to={`cart/${id}`}>
          <img
            src={img}
            className=" w-[100%] object-cover m-auto h-[250px] mix-blend-multiply rounded-[4px]"
            alt="picture"
          />
        </Link>

        <button onClick={() => dispatch(postCart(id))} className="cart absolute bottom-0 w-[100%] rounded-md text-white text-[20px] bg-black p-[6px_0] text-center hidden">
          Add To Cart
        </button>
      </div>
      <p className="text-[16px] font-[600]">{title}</p>
      <div className="flex gap-2 items-center ">
        <p className=" text-[#DB4444]">${price}</p>
        <del className="text-[gray]">${initialPrice}</del>
      </div>
      <div className=" flex gap-2">
        <div className="flex gap-1 items-center">
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
        <p>({stars})</p>
      </div>
    </div>
  );
};
export default Card2;
