"use client";
import ShowingProduct from "@/components/filter/ShowingProduct";
import React, { useEffect, useState } from "react";

function Client({ params }) {
  const [category, setCategory] = useState("");
  const fetchCategoryFunc = async () => {
    const res = await params;
    setCategory(res.category);
  };
  useEffect(() => {
    fetchCategoryFunc();
  }, [params.category]);

  // sending data by category
  const [allCate, setAllCate] = useState([]);
  useEffect(() => {
    switch (category) {
      case "electronics":
        setAllCate([
          "smartphones",
          "laptops",
          "automotive",
          "motorcycle",
          "lighting",
        ]);
        break;

      case "fassion":
        setAllCate([
          "womens-dresses",
          "tops",
          "womens-shoes",
          "mens-shirts",
          "mens-shoes",
          "mens-watches",
          "womens-watches",
          "womens-bags",
          "womens-jewellery",
        ]);

        break;

      case "home-and-furniture":
        setAllCate(["home-decoration", "furniture"]);
        break;

      case "beauty-and-personal-care":
        setAllCate(["skin-care", "fragrances"]);
        break;
      case "baby-and-toys":
        setAllCate([
          "smartphones",
          "laptops",
          "automotive",
          "motorcycle",
          "lighting",
        ]);
        break;

      default:
        return;
    }
  }, [category]);

  return (
    <div className=" w-full">
      <ShowingProduct categories={allCate} text={""} />
    </div>
  );
}

export default Client;
