"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import image2 from "@/images/2.png";
import image3 from "@/images/3.png";
import image4 from "@/images/4.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Section1() {
  const data = [
    { img: image2, text: "Beautiful Woman Purple Sweater." },
    { img: image3, text: "Beautiful Woman Purple Sweater2." },
    { img: image4, text: "Beautiful Woman Purple Sweater3." },
  ];

  const [activeSlider, setActiveSlider] = useState(0);
  // slider functionalities
  const intervalRef = useRef(null);

  // Start auto slide
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveSlider((prev) => (prev + 1) % data.length);
    }, 5000);
  };
  // Clear auto slide
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Next
  const nextFunc = () => {
    stopAutoSlide();
    setActiveSlider((prev) => (prev + 1) % data.length);
    startAutoSlide(); // optional (restart)
  };

  // Back
  const backFunc = () => {
    stopAutoSlide();
    setActiveSlider((prev) => (prev - 1 + data.length) % data.length);
    startAutoSlide(); // optional (restart)
  };

  // Auto slide
  useEffect(() => {
    startAutoSlide();

    return () => stopAutoSlide();
  }, [data.length]);

  return (
    <section className="flex bg-[#FFFAF3] lg:flex-row flex-col relative lg:px-8 md:px-6 sm:px-4 px-2 lg:py-16 md:py-12 py-8 xl:py-20  items-center  md:gap-5 gap-3 lg:gap-7">
      {/* left */}
      <div className="overflow-x-hidden w-full lg:w-[50%]">
        <div className="w-full">
          <div className="flex w-full flex-nowrap py-6">
            {data.map(({ img, text }, idx) => {
              return (
                <div
                  key={idx}
                  className="w-full shrink-0 transform transition duration-700 "
                  style={{ transform: `translateX(-${activeSlider * 100}%)` }}
                >
                  <div className="w-full">
                    <h1 className="xl:text-7xl   lg:text-6xl md:text-5xl text-4xl font-bold">
                      {text}
                    </h1>
                    <p className="font-semibold text-[15px] md:mt-4 mt-2 lg:mt-6">
                      Price
                    </p>
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-4 font-bold   ">
                      $40.00
                    </h2>
                    <div className="md:mt-6 md:px-3 px-2 lg:px-5 lg:mt-8 sm:mt-4 flex items-center gap-3 md:gap-6 mt-3 xl:mt-12">
                      <div className="button-borders ">
                        <button className="primary-button">Add To Cart</button>
                      </div>
                      <div className="button-borders ">
                        <button className="primary-button">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className=" lg:mt-16 md:mt-14 hidden lg:flex items-center md:gap-4 gap-2 lg:gap-6 sm:mt-8 mt-6 xl:mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="76"
              viewBox="0 0 76 76"
              fill="none"
            >
              <path
                d="M52.6617 37.6496L58.7381 40.0325L75.0609 49.0874L66.6016 63.7422L49.9214 54.6872L45.1557 50.7554L46.1088 57.1892V75.18H28.952V57.1892L30.0243 50.5171L24.9011 54.6872L8.45924 63.7422L0 49.0874L16.3228 39.7942L22.3991 37.6496L16.3228 35.1475L0 26.2117L8.45924 11.557L25.1394 20.4928L30.0243 24.6629L28.952 18.3482V0H46.1088V18.3482L45.1557 24.4246L49.9214 20.4928L66.6016 11.557L75.0609 26.2117L58.7381 35.3858L52.6617 37.6496Z"
                fill="black"
              ></path>
            </svg>
            <div className="">
              <p className="font-semibold text-[15px]">Summer Collection</p>
              <h3 className=" lg:text-xl md:text-lg text-base max-w-[250px] uppercase font-semibold mt-1.5">
                Trendy and Classic for the New Season
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="px-7 lg:mt-0 mt-5 w-full lg:w-[50%] overflow-x-hidden ">
        <div className="flex md:gap-6 gap-4 xl:gap-8 flex-nowrap">
          {data.map(({ img }, idx) => {
            return (
              <div
                key={idx}
                className={`relative rounded-3xl transition duration-500 transform shrink-0 overflow-hidden lg:w-[400px] w-[100%] xl:w-[500px]  ${activeSlider === idx ? "scale-100" : "scale-90"}`}
                style={{ transform: `translateX(-${activeSlider * 100}%)` }}
              >
                <Image src={img} alt="" width={"100%"} height={"100%"} />
              </div>
            );
          })}
        </div>
      </div>
      <div className=" absolute flex items-center gap-3 md:gap-6 z-30 text-2xl text-black  bottom-10 left-[50%] -translate-x-[50%]">
        <div
          onClick={backFunc}
          className=" px-1.5 py-1.5 cursor-pointer bg-[#feeb9d] rounded-full"
        >
          <IoIosArrowBack />
        </div>
        <div
          onClick={nextFunc}
          className=" px-1.5 py-1.5 cursor-pointer bg-[#feeb9d] rounded-full"
        >
          <IoIosArrowForward />
        </div>
      </div>
      <div className="star lg:block hidden absolute top-6 left-[50%] -translate-x-[50%]">
        <svg
          className="star-1"
          xmlns="http://www.w3.org/2000/svg"
          width="94"
          height="94"
          viewBox="0 0 94 94"
          fill="none"
        >
          <path
            d="M47 0L53.8701 30.4141L80.234 13.766L63.5859 40.1299L94 47L63.5859 53.8701L80.234 80.234L53.8701 63.5859L47 94L40.1299 63.5859L13.766 80.234L30.4141 53.8701L0 47L30.4141 40.1299L13.766 13.766L40.1299 30.4141L47 0Z"
            fill="#FEEB9D"
          ></path>
        </svg>
      </div>
      <div className="star lg:block hidden absolute top-6 right-[13%]">
        <svg
          className="star-2"
          xmlns="http://www.w3.org/2000/svg"
          width="82"
          height="94"
          viewBox="0 0 82 94"
          fill="none"
        >
          <path
            d="M41 0L45.277 39.592L81.7032 23.5L49.554 47L81.7032 70.5L45.277 54.408L41 94L36.723 54.408L0.296806 70.5L32.446 47L0.296806 23.5L36.723 39.592L41 0Z"
            fill="black"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Section1;
