"use client";
import { viewProductState } from "@/toolkit/slice";
import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
function ProductCard({ discount, price, title, img, ProductId }) {
  const dispath = useDispatch();
  return (
    <div className=" relative  h-full productOverlay">
      <div className=" absolute top-3 z-30 left-3 rounded-full bg-white px-2.5 py-1 text-[12px] font-semibold">
        GET ${discount}% OFF
      </div>
      <div className="transition pb-3 overflow-y-hidden relative ">
        <div className="productImg  transition duration-500 brightness-90">
          <Image alt="" src={img} height={300} width={350} />
        </div>
        <div className="  addToCart absolute bottom-1.5 z-30 left-[50%] -translate-x-[50%]">
          <div className="button-borders ">
            <button className="primary-button">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="absolute top-4 z-30 right-4">
        <div className="px-2  py-[7px] z-30 transition duration-300 text-white hover:bg-[#E06161] rounded-full bg-[#0000004d] cursor-pointer">
          {false ? (
            <FaHeart className="font-semibold text-lg md:text-[17px] " />
          ) : (
            <FaRegHeart className="font-semibold text-lg md:text-[17px] " />
          )}
        </div>
        <div
          onClick={() => dispath(viewProductState(ProductId))}
          className="px-2 mt-3 py-[7px] z-30 transition duration-300 text-white hover:bg-[#E06161] rounded-full bg-[#0000004d] cursor-pointer "
        >
          {false ? (
            <FaEyeSlash className="font-semibold text-lg md:text-[17px] " />
          ) : (
            <FaEye className="font-semibold text-lg md:text-[17px] " />
          )}
        </div>
      </div>

      <div className="flex  justify-center gap-2  px-2">
        <h1 className=" md:text-[16px] w-[90%] text-[15px] font-semibold lg:text-lg">
          {title}
        </h1>
        <p className="text-lg font-semibold">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
