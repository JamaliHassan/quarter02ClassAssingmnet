import Image from "next/image";
import Data from "@/Data/catagorydata.json";
import { Button } from "./ui/button";
const Catagory = () => {
  return (
    <section className="flex flex-col flex-wrap gap-[80px] justify-center items-center w-full md:max-w-[1280px] mx-auto">
      <div className="px-6 md:px-16 lg:w-[758px] text-center lg:text-left  mt-[80px]">
        <h1 className="text-[32px] md:text-[48px] leading-[41px] font-bold mb-6">
          Explore Courses By Category
        </h1>
        <p className="text-[18px] leading-[27px]">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <div>
        <div className="flex flex-wrap gap-[24px] justify-center">
          {Data.data.map((item) => (
            <div
              key={item.id}
              className="w-[380px] h-[132px] flex gap-[24px] items-center justify-around bg-[#F7F7F7] mb-[24px] "
            >
              <div className="w-[100px] h-[100px] bg-white flex justify-center items-center ">
                <Image
                  src={item.Image}
                  alt="pen Image"
                  width={32}
                  height={32}
                ></Image>
              </div>
              <div className="w-[216px]">
                <h1 className="text-[20px] leading-[30px] font-semibold">
                  {item.heading}
                </h1>
                <p className="text-lg leading-[27px]">{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-[64px]">
          <Button variant={"outline"} className="rounded px-3 py-6 text-base font-normal">
          View All Courses
          </Button>
          </div>
      </div>
    </section>
  );
};

export default Catagory;
