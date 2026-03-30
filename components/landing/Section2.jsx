"use client";
import React, { useEffect, useRef, useState } from "react";
import fetchProduct from "./apis/dummy";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

function Section2() {
  const [products, setProducts] = useState([]);
  const fetchFunc = async () => {
    const [shirts, shoes, watches, womenWatch, womenDress] = await Promise.all([
      fetchProduct("mens-shirts"),
      fetchProduct("mens-shoes"),
      fetchProduct("mens-watches"),
      fetchProduct("womens-watches"),
      fetchProduct("womens-dresses"),
    ]);

    setProducts([
      shirts.products[0],
      shoes.products[0],
      watches.products[0],
      womenWatch.products[0],
      womenDress.products[0],
      shirts.products[1],
      shoes.products[1],
      watches.products[1],
    ]);
  };
  useEffect(() => {
    fetchFunc();
  }, []);

  const [activeSlider, setActiveSlider] = useState(0);
  // slider functionalities
  // Next
  const nextFunc = () => {
    if(activeSlider < products.length){
      setActiveSlider((prev) => (prev + 1));
    }
    if(activeSlider === products.length - 1){
      setActiveSlider(0);
    }
  };

  // Back
  const backFunc = () => {
    if(activeSlider > 0){
      setActiveSlider((prev) => (prev - 1));
    }
    if(activeSlider === 0){
      setActiveSlider(products.length - 1);
    }
  };

  return (
    <section className="h-auto pt-6 lg:pt-12 w-full bg-[#FFFAF3]">
      <div className="flex lg:flex-row flex-col items-center justify-between lg:h-[300px]">
        {/* left */}
        <div className="bg-[#feeb9d] lg:w-[75%]  w-full h-full  relative">
          <div className=" absolute top-0 left-0 lg:block hidden">
            <svg
              width="413"
              height="44"
              viewBox="0 0 413 44"
              fill="#FFFAF3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.4829 37.8579L0 0.375V0H413V0.375L375.517 37.8579C367.707 45.6684 355.043 45.6684 347.233 37.8579L323.892 14.5171C316.082 6.70665 303.418 6.70665 295.608 14.5171L272.267 37.8579C264.457 45.6684 251.793 45.6684 243.983 37.8579L220.642 14.5171C212.832 6.70665 200.168 6.70665 192.358 14.5171L169.017 37.8579C161.207 45.6684 148.543 45.6684 140.733 37.8579L117.392 14.5171C109.582 6.70665 96.9184 6.70665 89.1079 14.5171L65.7671 37.8579C57.9566 45.6684 45.2934 45.6684 37.4829 37.8579Z"
                fill="%23FFFAF3"
              />
            </svg>
          </div>
          <div className="py-5 px-5 w-full overflow-x-hidden lg:py-8 flex flex-nowrap items-center">
            {products.length > 0 &&
              products.map(({ images, category }, id) => {
                return (
                  <div
                    key={id}
                    className="text-center relative z-30 transition duration-500 xl:w-[20%] lg:w-[25%] md:w-[33.33%] w-[50%] shrink-0 px-2 py-2"
                    style={{ transform: `translateX(-${activeSlider * 100}%)` }}
                  >
                    <div className="py-2">
                      <Image
                        src={images[1]}
                        alt={category}
                        width={200}
                        height={200}
                      />
                    </div>
                    <Link
                      href={"/" + category}
                      className="px-3 py-2 font-medium  text-[14px] md:text-[15px] rounded-lg bg-white"
                    >
                      {category}
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        {/* right */}
        <div className="px-2 py-5    lg:w-[25%] h-full w-full bg-black flex items-center justify-center">
          <div>
            <h1 className="text-3xl font-semibold text-white">
              Featured <br /> Categories
            </h1>
            <p className="text-gray-300 font-medium text-[15px] mt-4">
              Discover the most trending <br /> products in Pixio.
            </p>
            <div className="text-gray-400 mt-6 font-medium text-3xl flex gap-3">
              <div onClick={backFunc} className=" relative z-30">
                <HiOutlineArrowNarrowLeft className="cursor-pointer " />
              </div>

              <div onClick={nextFunc} className=" relative z-30">
                <HiOutlineArrowNarrowRight className="cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
