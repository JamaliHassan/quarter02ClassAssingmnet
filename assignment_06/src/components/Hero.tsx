'use client'
import Image from "next/image";
import { Button } from "./ui/button";
function HeroSection() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row w-full h-[800px] items-center overflow-hidden p-2">
        <div className="flex flex-col gap-[24px] justify-center items-center md:justify-start h-[450px] my-8 lg:mt-20 w-1/2">
          {/* Left Content*/}
          <div className=" w-[380px]  md:w-[500px] h-[174px] flex flex-col gap-[24px] justify-center">
            <h1 className=" text-4xl md:text-6xl font-bold text-black leading-snug">
              Learn new skills online with ease
            </h1>
            <p className="text-[18px] leading-[27px] ">
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>
          <div className="flex justify-start items-center h-[64px] w-[358px] gap-[16px] mr-6 md:mr-36 md:pt-16">
            <Button variant={"default"} className="h-[48] w-[178] rounded-md">
              Start learning now
            </Button>
            <Button variant={"outline"} className="h-[48] w-[178] rounded-md">
              Explore Courses
            </Button>
          </div>
        </div>
        {/* Right Image Content */}
        <div className="px-0">
          <Image
            src="/heroSection.svg"
            alt="Hero Section Image"
            width={680}
            height={900}
            priority={true}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6 items-center md:bg-[#F7F7F7] h-[239px] md:h-[228px] w-full p-2">
        <p className="w-[320px] font-bold text-2xl">
          Trusted by 2000+ companies worldwide
        </p>
        <div className="flex flex-wrap justify-center md:justify-evenly gap-4">
          <Image
            src="/logoImages/logo5.svg"
            alt=""
            width={107}
            height={33}
          ></Image>
          <Image
            src="/logoImages/logo6.svg"
            alt=""
            width={107}
            height={33}
          ></Image>
          <Image
            src="/logoImages/logo1.svg"
            alt=""
            width={107}
            height={33}
          ></Image>
          <Image
            src="/logoImages/logo2.svg"
            alt=""
            width={107}
            height={33}
          ></Image>
          <Image
            src="/logoImages/logo3.svg"
            alt=""
            width={107}
            height={33}
          ></Image>
          <Image
            src="/logoImages/logo4.svg"
            alt=""
            width={107}
            height={33}
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
