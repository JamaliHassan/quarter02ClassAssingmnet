'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import courses from "@/Data/courses.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Courses = () => {
  return (
    <section>
      <div className="text-center h-[93px] w-[249px] mx-auto">
        <h1 className="text-[32px] font-bold leading-[41px] md:text-[56px] md:leading-[67px] mb-6">
          Courses
        </h1>
        <p className="text-[18px] leading-[27px]">
          Your Ultimate Guide to learning
        </p>
      </div>
      <div className="mt-[48px]">
        <div className="flex justify-center items-center gap-2 ">
          <p className="border-b border-black w-[87px] h-[40px] text-center">
            Popular
          </p>
          <p className="w-[140px] h-[40px] text-center">Recommended</p>
          <p className="w-[109px] h-[40px] text-center">Best Price</p>
        </div>
        <div className="mt-[64px] flex flex-wrap justify-center gap-8 ">
          {courses.CoursesData.map((item) => (
            <Card key={item.id} className="w-[400px] bg-[#F7F7F7] rounded-none shadow-none">
              <CardHeader className="w-full p-0">
                <Image
                  src={item.Image}
                  alt="card Image"
                  width={416}
                  height={300}
                ></Image>
              </CardHeader>
              <CardContent className="flex flex-col justify-center  mt-[24px] p-2 mb-4">
                <div className="flex justify-between w-[348px] h-[24px] mb-4">
                  <p className="font-semibold">{item.title}</p>
                  <div className="flex">
                    <Image
                      src={item.Star}
                      alt="star rating image"
                      width={24}
                      height={24}
                    ></Image>
                    <p className="font-semibold">{item.Rating}</p>
                  </div>
                </div>
                <CardTitle className="mb-4">
                    <h1 className="text-[24px] font-bold">{item.heading}</h1></CardTitle>
                <CardDescription className="text-[16px] w-[348px] h-[72px] ">{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex gap-5">
                <Button variant="outline" className="bg-[bg-[#F7F7F7]] text-base leading-6 w-[117px] h-[40px]">{item.buttonText}</Button>
                <p>{item.Price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="text-center my-[64px]">
          <Button variant={"outline"} className="rounded px-3 py-6 text-base font-normal">
          View All Courses
          </Button>
          </div>
    </section>
  );
};

export default Courses;
