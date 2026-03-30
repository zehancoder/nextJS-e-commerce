import Image from "next/image";
import React from "react";
import womenPng from "@/public/images/women.png";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import childImg from "@/public/images/child.png";
import manImg from "@/public/images/men.png";
function Section3() {
  return (
    <section className=" md:py-8 py-5 lg:py-16 md:mt-8 mt-6 lg:mt-10">
      <div className="grid max-w-[1400px] mx-auto  grid-cols-1 lg:grid-cols-2">
        {/* left  */}
        <div className="  ">
          <div className=" w-full relative rounded-lg overflow-hidden">
            <Image src={womenPng} width={"100%"} height={"100%"} alt="" />
            <Link
              href={"/women-collection"}
              className=" absolute z-30 bottom-5 left-8 transition duration-300 rounded-lg border border-black bg-white cursor-pointer md:text-[14px] text-[13px] lg:text-[15px] font-semibold"
            >
              <div className="button-borders ">
                <button className="primary-button">Women Collections</button>
              </div>
            </Link>
            <div className="leftShape lg:block hidden w-12 h-full bg-white absolute top-0 right-0"></div>
            <div className="rightShape lg:block hidden w-12 h-full bg-white absolute top-0 left-0"></div>
          </div>
        </div>
        {/* right */}
        <div className="px-4 relative md:px-6 lg:px-8 pt-3 lg:pt-6 lg:py-0 py-5">
          <div>
            <div className="flex items-center gap-1 justify-between">
              <h1 className="text-4xl font-semibold capitalize text-black">
                Set your wardrobe with our amazing selection!
              </h1>
              <Link
                href={"/porducts"}
                className=" md:px-3 px-2 lg:px-5 md:py-3 py-2 lg:py-5 icon-parent rounded-full bg-black border transition duration-300 border-black hover:bg-transparent cursor-pointer relative z-30"
              >
                <GoArrowUpRight className="text-white text-3xl icon" />
              </Link>
            </div>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-medium mt-3 lg:mt-5 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <div className=" px-4 py-2 lg:absolute bottom-0 w-full gap-4 grid grid-cols-1 lg:grid-cols-2">
              <div className=" rounded-2xl relative overflow-hidden">
                <Image src={childImg} alt="" width={"100%"} height={"100%"} />
                <Link
                  href={"/child-collection"}
                  className=" absolute z-30 bottom-5 left-8 transition duration-300 rounded-lg border border-black bg-white cursor-pointer md:text-[14px] text-[13px] lg:text-[15px] font-semibold"
                >
                  <div className="button-borders ">
                    <button className="primary-button">Child Fassion</button>
                  </div>
                </Link>
              </div>
              <div className=" lg:mt-0 mt-4 rounded-2xl relative overflow-hidden">
                <Image src={manImg} alt="" width={"100%"} height={"100%"} />
                <Link
                  href={"/mans-collection"}
                  className=" absolute z-30 bottom-5 left-8 transition duration-300 rounded-lg border border-black bg-white cursor-pointer md:text-[14px] text-[13px] lg:text-[15px] font-semibold"
                >
                  <div className="button-borders ">
                    <button className="primary-button">Men Collections</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
