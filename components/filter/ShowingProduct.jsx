"use client";
import { electronicsProductState } from "@/toolkit/slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProduct from "@/components/landing/apis/dummy";
import CardSkeleton from "../cards/SkeletonCard";
import ProductCard from "../cards/ProductCard";
function ShowingProduct({ products }) {
  const [data, setData] = useState(products);
  const category = useSelector((state) => state.selectedCategory);
  // data fatching by category;
  const fetchData = async () => {
    const response = await fetchProduct(category.toLowerCase());
    setData(response.products);
  };
  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm2:grid-cols-2 gap-1 md:gap-3 grid-cols-1 xl:grid-cols-5">
          {data.length > 0
            ? data.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="border md:mx-2 mx-1 lg:mx-3 mt-5 border-black rounded-lg "
                  >
                    <ProductCard
                      price={product.price}
                      title={product.title}
                      img={product.images[0]}
                      discount={3}
                      ProductId={product.id}
                    />
                  </div>
                );
              })
            : Array(19)
                .fill(null)
                .map((_, idx) => {
                  return (
                    <div key={idx} className="h-full w-full">
                      <CardSkeleton />
                    </div>
                  );
                })}
        </div>
      </div>
    </div>
  );
}

export default ShowingProduct;
