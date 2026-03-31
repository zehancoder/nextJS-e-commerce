import React from "react";
import fetchProduct from "@/components/landing/apis/dummy";
import CardSkeleton from "@/components/cards/SkeletonCard";
import ProductCard from "@/components/cards/ProductCard";
async function page({ params }) {
  const { subCategory, category } = await params;
  let data = [];
  switch (subCategory) {
    case "smartphones-tablet":
      const phones = await fetchProduct("smartphones");
      data = phones.products;
      break;

    case "computers-laptops":
      const laptops = await fetchProduct("laptops");
      data = laptops.products;
      break;
    case "smart-watches":
      const product = await Promise.all([
        fetchProduct("mens-watches"),
        fetchProduct("womens-watches"),
      ]);
      data = product.flatMap((res) => res.products);
      break;
    case "handbags":
      const bags = await fetchProduct("womens-bags");
      data = bags.products;
      break;
    case "shoes":
      const allSohes = await Promise.all([
        fetchProduct("mens-shoes"),
        fetchProduct("womens-shoes"),
      ]);
      data = allSohes.flatMap((res) => res.products);
      break;
    case "watches":
      const allWatches = await Promise.all([
        fetchProduct("mens-watches"),
        fetchProduct("womens-watches"),
      ]);
      data = allWatches.flatMap((res) => res.products);
      break;

    case "mens-fassion":
      const allMenFassion = await Promise.all([
        fetchProduct("mens-shirts"),
        fetchProduct("mens-shoes"),
      ]);
      data = allMenFassion.flatMap((res) => res.products);
      break;
    case "womens-fassion":
      const allWomenFassion = await Promise.all([
        fetchProduct("womens-dresses"),
        fetchProduct("womens-shoes"),
      ]);
      data = allWomenFassion.flatMap((res) => res.products);
      break;
    default:
      break;
  }
  if (category === "home-and-furniture") {
    const allFurniture = await Promise.all([
      fetchProduct("furniture"),
      fetchProduct("home-decoration"),
    ]);
    data = allFurniture.flatMap((res) => res.products);
  } else if (category === "beauty-and-personal-care" || category === "baby-and-toys") {
    const allData = await Promise.all([
      fetchProduct("skincare"),
      fetchProduct("fragrances"),
    ]);
    data = allData.flatMap((res) => res.products);
  }

  return (
    <div className=" max-w-[1800px] px-3 py-12 mx-auto">
      <div className="w-full ">
        <div className="flex items-center gap-3">
          <h1 className=" lg:text-2xl md:text-xl text-xl xl:text-3xl font-semibold font-monserrat">
            {subCategory.split("-").join(" ")[0].toUpperCase() +
              subCategory.split("-").join(" ").slice(1, subCategory.length)}
          </h1>
        </div>
        <div className=" ">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm2:grid-cols-2 gap-1 md:gap-1 grid-cols-1 xl:grid-cols-5 2xl:grid-cols-6">
            {data.length > 0
              ? data.map((product, idx) => {
                  return (
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
    </div>
  );
}

export default page;
