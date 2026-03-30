 const patchProducts = async (category) => {
    const data = await fetch(`https://dummyjson.com/products/category/${category}`);
    return data.json();
};
module.exports = patchProducts;
