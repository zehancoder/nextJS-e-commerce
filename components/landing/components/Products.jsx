"use client";
import CardSkeleton from "@/components/cards/SkeletonCard";
import fetchProduct from "../apis/dummy";
import ProductCard from "@/components/cards/ProductCard";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { populerDataState } from "@/toolkit/slice";

function Products() {
  const sectionRef = useRef(null);
  const [data, setData] = useState([]);
  const dispath = useDispatch();
  // fetching func
  const fetchFunc = async () => {
    const [shirts, shoes, watches, womenWatch, womenDress] = await Promise.all([
      fetchProduct("mens-shirts"),
      fetchProduct("mens-shoes"),
      fetchProduct("mens-watches"),
      fetchProduct("womens-watches"),
      fetchProduct("womens-dresses"),
    ]);

    return [
      ...shirts.products,
      ...shoes.products,
      ...watches.products,
      ...womenWatch.products,
      ...womenDress.products,
    ];
  };

  // fetch data when visible screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          const res = await fetchFunc();
          dispath(populerDataState(res));
          observer.disconnect();
        }
      },
      {
        threshold: 0.07,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const products = useSelector((state) => state.populerData);
  const category = useSelector((state) => state.selectedCategory);
  useEffect(() => {
    setData(
      products.filter((data) => {
        if (category === "All") {
          return data;
        }
        if (category === "Dresses") {
          return data.category.includes("womens-dresses");
        } else if (category === "Shirts") {
          return data.category.includes("mens-shirts");
        } else if (category === "Shoes") {
          return data.category.includes("mens-shoes");
        } else if (category === "Watches") {
          return (
            data.category.includes("womens-watches") ||
            data.category.includes("mens-watches")
          );
        }
      }),
    );
  }, [category, products]);

  return (
    <div className="mt-6 py-5" ref={sectionRef}>
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
                    ProductId={product}
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
  );
}

export default Products;
