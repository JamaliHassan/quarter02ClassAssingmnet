"use client";
import ProductCards from "@/Data/products.json";
const ProductCard = () => {
  return (
    <div className=" max-w-full  grid grid-cols-3 gap-2 place-content-center my-4">
      {ProductCards.ProductCard.map((item) => (
        <div className="max-w-[360px] h-[392px] border rounded-lg p-4 shadow-lg m-2" key={item.id}>
          <img
            src={item.img}
            alt="product"
            width={360}
            height={360}
            className="rounded-lg"
          />
          <h4 className="text-xl font-bold mt-2 text-justify">{item.name}</h4>
          <div className="flex justify-between items-center mt-2">
            <p className="text-lg font-semibold text-[#b88e2f]">{item.Price}</p>
            <button className="py-2 px-4 rounded bg-[#b88e2f] text-white hover:bg-orange-950 transition ease-linear">
              Buy Now
            </button>
          </div>
        </div>
      ))}
        <button className=" p-3 col-start-2 rounded border-2 border-[#b88e2f] text-[#b88e2f] hover:bg-[#b88e2f] hover:text-white transition ease-linear">
            Show More
          </button>
    </div>
  );
};

export default ProductCard;
