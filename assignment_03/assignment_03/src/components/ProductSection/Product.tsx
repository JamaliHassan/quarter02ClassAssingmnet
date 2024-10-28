"use client";
import ProductCard from "./ProductCard/ProductCard";

const Product = () => {
  return (
    <div className="text-center flex justify-center items-center flex-col mt-20">
      <h1 className="text-[2.5rem]"> Our Products</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloribus numquam dolorum explicabo, beatae, nisi dolor vitae cum repellat eaque, nihil assumenda esse dignissimos soluta tempore enim quis provident autem.</p>
      <ProductCard />
    </div>
  );
};

export default Product;
