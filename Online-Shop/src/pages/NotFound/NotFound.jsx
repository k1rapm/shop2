import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-[150px]">
      <div className="text-center flex flex-col items-center gap-[80px]">
        <div className="flex items-center flex-col gap-[40px] ">
          <h1 className="text-[#000] text-[110px] font-[500] not-italic font-[Inter]">
            404 Not Found
          </h1>
          <p className="text-[16px] text-[#000] font-[Poppins] font-[400] not-italic">
            Your visited page not found. You may go home page.
          </p>
        </div>
        <Link to={"/catalog"}>
          <button className="p-[16px_48px] bg-[#DB4444] rounded-[4px] text-[#FAFAFA] text-[16px] font-[Poppins] font-[500] not-italic">
            Back to home page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
