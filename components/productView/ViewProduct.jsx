"use client";
import { viewProductState } from "@/toolkit/slice";
import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

function ViewProduct() {
  const dispath = useDispatch();
  const products = useSelector((state) => state.viewProduct);
  const [data, setData] = useState(null);

  const fetchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${products}`);
    const response = await res.json();
    setData(response);
  };
  useEffect(() => {
    if (products) {
      fetchProduct();
    }
  }, [products]);
  const [selectedImg, setSelectedImg] = useState("");

  return (
    data !== null && (
      <div className=" fixed z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[90%] sm2:max-w-[400px] lg:max-w-[400px] xl:max-w-[500px] ">
        <div
          className=" w-full p-2  relative"
          // onMouseOver={animateFunc}
          // onMouseLeave={animateFinish}
        >
          <div className=" absolute top-[7%] left-[8%] px-2 md:px-3 py-0.5 md:py-1 rounded-sm bg-[#cc0c39] text-white font-alan font-normal text-[12px] md:text-[13px]">
            {data.discountPercentage}%
          </div>

          <div className="border border-gray-300 p-2 rounded-lg">
            <div className={"w-full px-4 py-3 rounded-lg bg-white"}>
              <div className=" md:w-[60%] sm2:w-[60%] w-[50%] lg:w-[70%] mx-auto overflow-hidden px-2 md:px-4 py-2 md:py-4 relative">
                <img className="w-full " src={selectedImg || data.images[0]} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="w-[70%] md:w-[65%] border-r border-gray-400">
                  <div className="flex items-center flex-wrap gap-2">
                    {data.images.map((product, idx) => (
                      <div
                        onClick={() => setSelectedImg(data.images[idx])}
                        className={`w-[25%] md:w-[21%] px-1 py-2 cursor-pointer border-[0.6px] transition duration-300 hover:border-[#FF6C00] rounded ${selectedImg === product ? "border-[#FF6C00]" : "border-[#282828]"}`}
                      >
                        <img src={product} alt="" />
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-700 px-2 py-3">
                    <div className="flex items-center justify-between py-1">
                      {data.discount}
                    </div>
                    <p className=" font-normal font-alan text-[14px] md:text-[15px] line-clamp-2 tracking-tight leading-[17px]">
                      {data.title}
                    </p>
                    <div className="w-full  font-alan font-normal text-[12px] md:text-[13px]">
                      <p>Rating: {data.rating}</p>
                    </div>
                    <div className="flex font-lexend items-center text-[15px] md:text-[16px] font-medium gap-2">
                      <p className="text-[#FF6C00]">${data.price}</p>
                      <p className="line-through text-gray-500 text-[12px] md:text-[13px]">
                        $
                        {(
                          (data.price * data.discountPercentage) / 100 +
                          data.price
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-2 py-1.5 text-gray-700 font-alan font-normal text-[12px] md:text-[13px]">
                  <p>Brand: {data.brand}</p>
                  <p>Stock: {data.stock}</p>
                  <p>
                    Weight:{" "}
                    {String(data.weight).padEnd("0", "2") +
                      (data.weight < 10 ? "g" : "kg")}
                  </p>
                  <p>Warrenty: {data.warrantyInformation}</p>
                  <p>Shipping: {data.shippingInformation}</p>
                </div>
              </div>
            </div>
            <div
              className="w-full mt-1.5"
              // onClick={() => addItems(data)}
            >
              <button className={"w-full px-4 py-2 bg-[#FF6C00]"}>
                Add To Cart
              </button>
            </div>
          </div>

          <div
            onClick={() => {
              dispath(viewProductState(null));
              setData(null);
              setSelectedImg('')
            }}
            className=" absolute top-5 right-5 text-2xl md:text-3xl font-medium text-gray-700 hover:bg-[#FF6C00] hover:text-white rounded-full cursor-pointer transition duration-300"
          >
            <IoIosClose />
          </div>
        </div>
      </div>
    )
  );
}

export default ViewProduct;
