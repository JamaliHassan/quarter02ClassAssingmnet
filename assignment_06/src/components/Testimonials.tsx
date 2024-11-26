'use client'
import Image from "next/image";
import testimonialData from "@/Data/Testimonial.json";
import { FaCircle } from "react-icons/fa";
const Testimonials = () => {
  return (
    <section className="flex flex-col w-full gap-8 p-6 md:bg-[#F7F7F7]">
      <div className="text-center py-12">
        <h1 className="text-[32px] leading-[41px] font-bold mb-[24px]">
          What Our Students Say
        </h1>
        <p className="text-lg leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialData.testimonialData.map((items) => (
          <div
            key={items.id}
            className="p-6 border border-black  bg-white md:bg-[#F7F7F7]"
          >
            <div className="flex mb-6">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src="/testimonialImages/vector.svg"
                  alt="Star"
                  width={20}
                  height={18}
                  className="inline-block"
                />
              ))}
            </div>
            <p className="text-black text-lg mb-6">{items.description}</p>
            <div className="flex items-center">
              <div className="relative w-12 h-12 mr-4">
                <Image
                  src={items.Image}
                  alt={items.Name}
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-base font-semibold">{items.Name}</h4>
                <p className="text-sm text-black">{items.Designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-6">
        <div className="flex gap-2">
          <FaCircle className="w-[8px] h-[8px] text-black" />
          <FaCircle className="w-[8px] h-[8px] text-[#8D8D8D]" />
          <FaCircle className="w-[8px] h-[8px] text-[#8D8D8D]" />
          <FaCircle className="w-[8px] h-[8px] text-[#8D8D8D]" />
          <FaCircle className="w-[8px] h-[8px] text-[#8D8D8D]" />
        </div>
        <div className="flex gap-4">
          <Image
            src="/testimonialImages/ButtonLeft.svg"
            alt="Previous"
            width={48}
            height={48}
            className="inline-block cursor-pointer"
          />
          <Image
            src="/testimonialImages/ButtonRight.svg"
            alt="Next"
            width={48}
            height={48}
            className="inline-block cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
