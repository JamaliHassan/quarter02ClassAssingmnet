"use client";
import { Fragment } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
        <div className=" flex justify-center items-center h-[200px] w-[400px] p-10 mt-10 m-auto  text-xl bg-gradient-to-r from-cyan-500 to-blue-500">
          Home Page Content
        </div>
    </Fragment>
  );
}
