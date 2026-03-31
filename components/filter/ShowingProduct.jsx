"use client";
import React, { useEffect, useState } from "react";
import fetchProduct from "@/components/landing/apis/dummy";
import CardSkeleton from "../cards/SkeletonCard";
import ProductCard from "../cards/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import FilterSide from "./FilterSide";
import {
  hightPriceState,
  lowPriceState,
  productsSaveState,
} from "@/toolkit/slice";
function ShowingProduct({ categories, text }) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [filterbyCategoryData, setFilterByCategoryData] = useState([]);
  const category = useSelector((state) => state.selectedCategory);
  // data fatching by category;
  const fetchFunc = async () => {
    const results = await Promise.all(
      categories.map((cate) => fetchProduct(cate)),
    );
    const allProducts = results.flatMap((res) => res.products);
    setData(allProducts);
    dispatch(productsSaveState(allProducts));
  };
  useEffect(() => {
    fetchFunc();
  }, [categories]);

  const allProducts = useSelector((state) => state.products);
  // change data by category
  useEffect(() => {
    if (category === "All") {
      setFilterByCategoryData(allProducts);
      setData(allProducts);
    } else {
      const afterFilter = allProducts.filter(
        (product) => product.category === category.toLowerCase(),
      );
      setData(afterFilter);
      setFilterByCategoryData(afterFilter);
    }
  }, [allProducts, category]);
  // geeting max price min price

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  useEffect(() => {
    let prevHighPrice = 0;
    filterbyCategoryData.map((item) => {
      if (item.price > prevHighPrice) {
        prevHighPrice = item.price;
      }
    });
    setMaxPrice(prevHighPrice);
  }, [filterbyCategoryData]);
  useEffect(() => {
    let prevLowPrice = maxPrice;
    filterbyCategoryData.map((item) => {
      if (item.price < prevLowPrice) {
        prevLowPrice = item.price;
      }
    });
    setMinPrice(prevLowPrice);
  }, [maxPrice]);
  useEffect(() => {
    dispatch(lowPriceState(minPrice));
  }, [minPrice]);
  useEffect(() => {
    dispatch(hightPriceState(maxPrice));
  }, [maxPrice]);

  // add filter by price functionality
  const filterByPrice = useSelector((state) => state.filterByPrice);

  useEffect(() => {
    const finalItem = filterbyCategoryData.filter((item) => {
      if (
        Math.floor(item.price) >=
          Math.floor(parseInt(filterByPrice.lowPrice)) &&
        Math.floor(item.price) <= Math.floor(parseInt(filterByPrice.highPrice))
      ) {
        return item;
      }
    });

    setData(finalItem);
  }, [filterByPrice]);

  // filter hiding
  const [isOnFilter, setIsOnFilter] = useState(false);

  // show data with loading system;
  const [loadData, setLoadData] = useState(15);
  const loadDataFunc = () => {
    if (loadData !== data.length) {
      setLoadData(loadData + 5);
    } else {
      setLoadData(20);
    }
  };
  useEffect(() => {
    setLoadData(15);
  }, [category]);

  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-1 w-full">
        {/* left */}
        <div
          className={` w-[380px] transition duration-300 lg:translate-x-0 lg:h-[90vh] z-30 absolute lg:relative ${isOnFilter ? "translate-x-0" : "-translate-x-[120%]"}`}
        >
          {allProducts.length > 0 && (
            <div className="fixed w-[290px]">
              <FilterSide
                categories={[
                  ...new Set(
                    allProducts.map(
                      (item) =>
                        item.category.slice(0, 1).toUpperCase() +
                        item.category.slice(1, item.category.length),
                    ),
                  ),
                  "All",
                ]}
                minPrice={minPrice}
                maxPrice={maxPrice}
                setOnFilterSide={setIsOnFilter}
              />
            </div>
          )}
        </div>
        {/* right */}
        <div className="w-full">
          <div className="flex items-center gap-3">
            <h1 className=" lg:text-2xl md:text-xl text-xl xl:text-3xl font-semibold font-monserrat">
              {text}
            </h1>
            <button
              onClick={() => setIsOnFilter(true)}
              className="md:text-[13px] text-[12px]  lg:hidden block font-alan font-medium text-white px-3 left-36 py-1.5 rounded bg-[#FBBB00] uppercase"
            >
              Filter
            </button>
          </div>
          <div className="">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm2:grid-cols-2 gap-1 md:gap-1 grid-cols-1 xl:grid-cols-4 2xl:grid-cols-5">
              {data.length > 0
                ? data.map((product, idx) => {
                    return (
                      idx < loadData && (
                        <div
                          key={product.id}
                          className="border md:mx-2 mx-1 lg:mx-1 mt-5 border-black rounded-lg "
                        >
                          <ProductCard
                            price={product.price}
                            title={product.title}
                            img={product.images[0]}
                            discount={3}
                            ProductId={product.id}
                          />
                        </div>
                      )
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

           {data.length > 15 && <div className=" w-full md:mt-8 mt-6 lg:mt-12 flex items-center justify-center">
              <div className="button-borders " onClick={() => loadDataFunc()}>
                <button className="primary-button">Load more</button>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowingProduct;
