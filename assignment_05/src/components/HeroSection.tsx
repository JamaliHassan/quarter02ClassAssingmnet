"use-client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="flex flex-wrap justify-center gap-[4rem] items-center mt-14">
      <div className=" flex flex-col  justify-center items-start max-sm:p-6 max-lg:p-6 ">
        <h2 className="font-bold font-Libre_Bodoni text-[40px] leading-[65.8px] max-w-[496px] mb-5 max-sm:text-[30px]">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h2>
        <p className="font-medium font-Libre_Bodoni text-[30px] max-md:text-[25px] leading-[49px] text-[#787054] max-w-[902px] mb-6 max-sm:mb-[4rem] ">
          An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
        </p>
        <button className="bg-[#A29875] text-3xl leading-[37.5px] text-white w-[288px] h-[58px] rounded-[10px] font-Libre Bodoni max-sm:mt-10 font-medium font-Libre_Bodoni">
          Explore Now
        </button>
      </div>
      <div className=" flex items-center sm:py-8 md:py-6">
        <Image
          src={"/HeroImage.svg"}
          alt={"HeroImage"}
          width={462}
          height={647}
        />
      </div>
    </main>
  );
};

export default HeroSection;
