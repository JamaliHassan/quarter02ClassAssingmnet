"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center  max-w-full h-[screen] mt-14 gap-6 bg-light p-2">
      <div className="max-w-[30%] ">
        <h1 className="text-[2.5rem] font-bold">
          For All
          <span className="border-2 border-[#b88e2f]">
            {" "}
            Your Furniture Needs
          </span>{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laborum
          sed soluta eaque, quibusdam nostrum voluptate tenetur veniam
          doloremque corporis laboriosam omnis minus odio doloribus esse
          perferendis nulla magnam illum.
        </p>
      </div>
      <div>
        <Image src={"/heroImage.jpeg"} alt="" width={600} height={600}></Image>
      </div>
    </div>
  );
};

export default HeroSection;
