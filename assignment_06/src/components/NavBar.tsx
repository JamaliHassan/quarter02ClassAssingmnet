"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const NavBar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = () => {
    setisMenuOpen((prevState) => !prevState);
  };
  return (
    <section>
      <div className=" hidden border-b border-black md:flex justify-between items-center h-[80px] md:h-[52px] w-full bg-[#F7F7F7] mb-[16px] px-8 md:px-12">
        <div className="flex text-sm flex-col md:flex-row h-[30px]">
          <p className="border-r border-black py-0 md:py-2 px-3">
            Phone Number: 956 742 455 678
          </p>
          <p className="p-2 px-3">Email:info@ddsgnr.com</p>
        </div>
        <div className="flex gap-1 md:gap-3 text-2xl">
          <Link href={"#"}>
            <FaFacebookF />
          </Link>
          <Link href={"#"}>
            <FaInstagram />
          </Link>
          <Link href={"#"}>
            <FaTwitter />
          </Link>
          <Link href={"#"}>
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div className="border-b border-black bg-[#F7F7F7] flex justify-center items-center">
        <nav className="flex items-center max-lg:justify-between lg:gap-[250px] w-full h-[72px] px-8 md:px-12">
          <div className="flex items-center gap-3">
            <Image src={"/Frame 1.svg"} alt={"logo"} width={32} height={30} />
            <h1 className="text-2xl font-bold font-Inter">Ddsgnr</h1>
          </div>
          <div className="hidden lg:flex lg:flex-wrap items-center gap-2 xl:gap-8  bg-white">
            <ul className="flex items-center gap-10">
              {[
                "Home",
                "Courses",
                "Services",
                "Achievement",
                "About Us",
                "Testimonial",
              ].map((item) => (
                <li key={item} className=" transition-all ease-linear hover:border-b border-black  hover:text-gray-500">
                  <Link href={"/"}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Button variant={"outline"}>Login</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
          <div
            className="flex items-center lg:hidden cursor-pointer "
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          {isMenuOpen && (
            <div className="absolute top-[72px] left-0 w-full bg-white shadow-lg p-4 ">
              <ul className="flex flex-col gap-4 text-center">
                {[
                  "Home",
                  "Courses",
                  "Services",
                  "Achievement",
                  "About Us",
                  "Testimonial",
                ].map((item) => (
                  <li key={item}>
                    <Link href={"/"} className="transition-all ease-linear  hover:text-gray-500">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 mt-4">
                <Button variant={"outline"}>Login</Button>
                <Button>Sign Up</Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
