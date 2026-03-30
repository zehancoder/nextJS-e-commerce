"use client";
import { selectedCategoryState } from "@/toolkit/slice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function PopulerProductCategories() {
  const category = ["All", "Dresses", "Shirts", "Shoes", "Watches"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispath = useDispatch();
  const selectFunc = (text) => {
    setSelectedCategory(text);
    dispath(selectedCategoryState(text));
  };
  useEffect(() => {
    dispath(selectedCategoryState(selectedCategory));
  }, []);
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 px-2 md:px-3 rounded-full border border-black py-1.5 relative z-30">
      {category.map((text) => {
        return (
          <button
            key={text}
            onClick={() => selectFunc(text)}
            className={`px-4 font-semibold hover:bg-black hover:text-white transition duration-300 md:text-[14px] py-1 cursor-pointer  rounded-full ${selectedCategory === text ? "bg-black text-white" : "bg-transparent text-black"}`}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}

export default PopulerProductCategories;
