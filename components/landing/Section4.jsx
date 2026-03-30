import React from "react";
import ProductCard from "../cards/ProductCard";
import PopulerProductCategories from "./components/PopulerProductCategories";
import Products from "./components/Products";

function Section4() {
  return (
    <section className=" w-full md:py-8 py-6 lg:py-10 px-3">
      <div className="mx-auto  lg:max-w-[1400px]">
        <div className="flex items-center lg:flex-row flex-col justify-between w-full">
          <h1 className=" md:text-3xl text-xl sm:text-2xl lg:text-4xl font-bold ">
            Most Populer Products
          </h1>
          <PopulerProductCategories />
        </div>
        <Products/>
      </div>
    </section>
  );
}

export default Section4;
