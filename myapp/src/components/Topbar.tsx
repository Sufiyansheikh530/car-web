"use clients"
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

const Topbar = () => {
    return(
        <div>
        <div className=" w-[1290px] h-[118px] rounded-md bg-[#FFFFFF]  p-[80px] font-semibold flex justify-between  items-center ">
            <p className="font-[Plus Jakarta Sans] text-[#3563E9] ">MORENT</p>
            
            <div className=" bg-[#FFFFFF] text-[#596780] w-[492px] h-[44px] radius-[70px] flex items-center ">
            < CiSearch />
                 <input  placeholder  = " Search something here"  /> 
                 
                </div>

            <div className="border[1px] color-[#C3D4E966] flex space-x-10">
            <FaHeart />
            <IoMdNotifications />
            <IoIosSettings />
            </div>
            
                        
        </div>

        </div>
    )
}

export default Topbar