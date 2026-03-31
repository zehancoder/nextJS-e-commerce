"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import logo from "@/public/images/logo.svg";
function Navber() {
  const [scroll, setScroll] = useState(0);
  //
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(window.scrollY);
      } else {
        setScroll(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shopMenu = [
    {
      id: 1,
      title: "Electronics",
      items: [
        { name: "Smartphones & Tablet", path: "/smartphones-tablet" },
        { name: "Computers & Laptops", path: "/computers-laptops" },
        { name: "Headphones & Earbuds", path: "/headphones-earbuds" },
        { name: "Smart Watches", path: "/smart-watches" },
        { name: "Home Appliances", path: "/home-appliances" },
        { name: "Gaming Accessories", path: "/gaming-accessories" },
        { name: "Cameras & Drones", path: "/cameras-drones" },
      ],
    },
    {
      id: 2,
      title: "Fassion",
      items: [
        { name: "Handbags", path: "/handbags" },
        { name: "Shoes", path: "/shoes" },
        { name: "Watches", path: "/watches" },
        { name: "Men Fassion", path: "/mens-fassion" },
        { name: "Women's Fassion", path: "/womens-fassion" },
        { name: "Accessories", path: "/accessories" },
      ],
    },
    {
      id: 3,
      title: "Home & Furniture",
      items: [
        { name: "Sofas & Couches", path: "/sofas-couches" },
        { name: "Bedroom Furniture", path: "/bedroom-furniture" },
        { name: "Kitchen & Dining", path: "/kitchen-dining" },
        { name: "Lighting", path: "/lighting" },
        { name: "Storage Cabinets", path: "/storage-cabinets" },
        { name: "Decor Items", path: "/decor-items" },
      ],
    },
    {
      id: 4,
      title: "Baby & Toys",
      items: [
        { name: "Bath Toys", path: "/bath-toys" },
        { name: "Learning & Stacking Toys", path: "/learning-stacking-toys" },
        { name: "Push & Pull Toys", path: "/push-pull-toys" },
        { name: "Balls", path: "/balls" },
        { name: "Car Seat & Stroller Toys", path: "/car-seat-stroller-toys" },
        { name: "School Backpacks", path: "/school-backpacks" },
      ],
    },
    {
      id: 5,
      title: "Beauty & Personal Care",
      items: [
        { name: "Makeup", path: "/makeup" },
        { name: "Skin Care", path: "/skin-care" },
        { name: "Hair Care", path: "/hair-care" },
        { name: "Tools & Accessories", path: "/tools-accessories" },
        { name: "Personal Care", path: "/personal-care" },
        { name: "Perfumes", path: "/perfumes" },
      ],
    },
  ];
  const [showNow, setShopNow] = useState(false)

  return (
    <div
      className={` w-[100%]  h-20  rounded-b-lg z-40 fixed  ${scroll > 0 && " nav-animation  top-0 left-0"}`}
    >
      <div
        className={`py-3 w-full px-5 flex h-full border-b border-gray-300 items-center justify-between md:gap-4 gap-4 lg:gap-6 mx-auto max-w-[1800px] ${scroll > 0 ? "bg-[#fff]" : "bg-[#FFFAF3]"}`}
      >
        <div className="w-[100px]">
          <Image alt="logo" width={"100%"} height={"100%"} src={logo} />
        </div>
        {/* nav links */}
        <nav className=" hidden lg:flex items-center md:gap-6 sm:gap-4 gap-2 lg:gap-8 justify-between">
          <Link href={"/"} className="navberLinks flex items-center gap-0.5">
            Home
            <Image
              alt="star"
              width={10}
              height={10}
              src={`data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%200L7.69706%204.30294L12%206L7.69706%207.69706L6%2012L4.30294%207.69706L0%206L4.30294%204.30294L6%200Z'%20fill='black'%20fill-opacity='0.4'/%3e%3c/svg%3e`}
            />
          </Link>
          <div className=" relative">
            <Link href={'/shop-now'}
              onMouseOver={() => setShopNow(true)}
              className="navberLinks cursor-default cursor-pointer flex items-center gap-0.5"
            >
              Shop Now
              <Image
                alt="star"
                width={10}
                height={10}
                src={`data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%200L7.69706%204.30294L12%206L7.69706%207.69706L6%2012L4.30294%207.69706L0%206L4.30294%204.30294L6%200Z'%20fill='black'%20fill-opacity='0.4'/%3e%3c/svg%3e`}
              />
            </Link>

            {showNow && <div
              onMouseLeave={() => setShopNow(false)}
              className=" fixed z-40 shadow-lg lg:w-4xl md:w-3xl w-full xl:w-5xl top-[8%] font-lexend text-[15px] left-[50%] -translate-x-[50%]"
            >
              <div className="px-3 py-4 grid grid-cols-5  rounded-lg bg-[#FFFAF3] text-gray-700">
                {shopMenu.map(({ id, title, items }) => {
                  return (
                    <div key={id}>
                      <Link href={'/shop-now/'+title.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-")}
                        className={`py-2 hover:text-[#FF6C00] rounded-[6px] text-lg font-semibold  ${
                          location.pathname.split("/")[2] ===
                          title.toLowerCase().split(" ").join("")
                            ? " text-[#FF6C00]"
                            : "  text-gray-700"
                        }`}
                      >
                        {title}
                      </Link>
                      <div className="mt-3">
                        {items.map(({ path, name }) => {
                          return (
                            <div
                              key={path}
                              className={`text-[15px] mt-3 font-medium transition duration-200 hover:text-[#FF6C00] cursor-pointer hover:scale-105 transform hover:translate-x-3 ${
                                location.pathname.split("/")[3] ===
                                path.split("/")[1]
                                  ? "text-[#FF6C00] translate-x-3"
                                  : "text-gray-700 translate-x-0"
                              }`}
                            >
                              <Link
                                href={
                                  "/shop-now/" +
                                  title.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-") +
                                  path
                                }
                              >
                                <p>{name}</p>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>}
          </div>
          <Link
            href={"/deals"}
            className="navberLinks flex items-center gap-0.5"
          >
            Deals
            <Image
              alt="star"
              width={10}
              height={10}
              src={`data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%200L7.69706%204.30294L12%206L7.69706%207.69706L6%2012L4.30294%207.69706L0%206L4.30294%204.30294L6%200Z'%20fill='black'%20fill-opacity='0.4'/%3e%3c/svg%3e`}
            />
          </Link>
          <Link
            href={"/sellers"}
            className="navberLinks flex items-center gap-0.5"
          >
            Best Sellers
            <Image
              alt="star"
              width={10}
              height={10}
              src={`data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%200L7.69706%204.30294L12%206L7.69706%207.69706L6%2012L4.30294%207.69706L0%206L4.30294%204.30294L6%200Z'%20fill='black'%20fill-opacity='0.4'/%3e%3c/svg%3e`}
            />
          </Link>
          <Link
            href={"/trend"}
            className="navberLinks flex items-center gap-0.5"
          >
            Trend
            <Image
              alt="star"
              width={10}
              height={10}
              src={`data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%200L7.69706%204.30294L12%206L7.69706%207.69706L6%2012L4.30294%207.69706L0%206L4.30294%204.30294L6%200Z'%20fill='black'%20fill-opacity='0.4'/%3e%3c/svg%3e`}
            />
          </Link>{" "}
          <Link href={"/new"} className="navberLinks flex items-center gap-0.5">
            New In
            <Image
              alt="star"
              width={10}
              height={10}
              src={`data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%200L7.69706%204.30294L12%206L7.69706%207.69706L6%2012L4.30294%207.69706L0%206L4.30294%204.30294L6%200Z'%20fill='black'%20fill-opacity='0.4'/%3e%3c/svg%3e`}
            />
          </Link>
        </nav>
        {/* nav buttons */}
        <div className="flex items-center md:gap-2 lg:gap-4">
          <Link
            href={"/login"}
            className="navberLinks flex items-center gap-0.5"
          >
            <p className="border-b border-gray-400">Login/Register</p>
            <Image
              alt="star"
              width={10}
              height={10}
              src={`data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%200L7.69706%204.30294L12%206L7.69706%207.69706L6%2012L4.30294%207.69706L0%206L4.30294%204.30294L6%200Z'%20fill='black'%20fill-opacity='0.4'/%3e%3c/svg%3e`}
            />
          </Link>
          <div className="px-2 py-[7px] z-30 transition duration-300 hover:bg-[#feeb9d] rounded-full cursor-pointer text-gray-700">
            <IoSearchOutline className="font-semibold text-lg md:text-xl " />
          </div>
          <Link
            href={"/favourite"}
            className="px-2 py-[7px] z-30 transition duration-300 hover:bg-[#feeb9d] rounded-full cursor-pointer text-gray-700"
          >
            <FaRegHeart className="font-semibold text-lg md:text-xl " />
          </Link>
          <Link
            href={"/cart"}
            className="px-2 py-[7px] z-30 transition duration-300 hover:bg-[#feeb9d] rounded-full cursor-pointer text-gray-700"
          >
            <IoCartSharp className="font-semibold text-lg md:text-xl " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navber;
