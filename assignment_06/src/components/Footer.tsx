'use client'
import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const Footer = () => {
  return (
    <footer className="bg-white mt-[80px] px-[40px]">
      <div className="max-w-7xl flex flex-wrap mx-auto justify-between  mb-[80px]">
        <div className="max-sm:text-center mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-4 md:mb-0">Subscribe to our newsletter</h2>
          <p className="text-sm mb-4 text-center px-12 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[400px]">
          <div className="flex flex-col sm:flex-row w-full max-sm:w-full items-start sm:items-center sm:space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className=" w-full md:w-[265px] h-[48px] rounded border border-black "
            />
            <Button
              type="submit"
              variant={"outline"}
              className="h-[48px] w-full md:w-[119px] text-base mt-2 md:mt-0"
            >
              Subscribe
            </Button>
          </div>

          <p className="text-xs flex justify-center md:justify-start">
            By subscribing you agree to with our
             <Link href="/" className="underline inline-block">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-20 grid sm:grid-cols-2 gap-8 md:grid-cols-4 text-center">
        <div className="flex justify-center items-start gap-1">
          <Image src={"/Frame 1.svg"} alt={"logo"} width={32} height={30} />
          <h1 className="text-2xl font-bold font-Inter">Ddsgnr</h1>
        </div>
        <div className="md:text-start">
          <h3 className="font-semibold mb-4">Courses</h3>
          <ul className="text-sm my-2 flex flex-col gap-3">
            {[
               "Business",
               "Development",
               "Technology",
               "Design",
               "Programming"
            ].map((item) => (
              <li key={item}>
                <Link
                  href={"/"}
                  className="transition-all ease-linear hover:border-b border-black hover:text-gray-500"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:text-start">
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="text-sm my-2 flex flex-col gap-3">
          {[
                "Career",
                "Resume",
                "Learning",
                "Interview Preparation",
                "Jobs"
            ].map((item) => (
              <li key={item}>
                <Link
                  href={"/"}
                  className="transition-all ease-linear hover:border-b border-black hover:text-gray-500"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:text-start">
          <h3 className="font-semibold mb-4">About Us</h3>
          <ul className="text-sm my-2 flex flex-col gap-3">
          {[
              "Contact",
              "Help/Support",
              "FAQ",
              "Terms and Conditions",
              "Partners"
            ].map((item) => (
              <li key={item}>
                <Link
                  href={"/"}
                  className="transition-all ease-linear hover:border-b border-black hover:text-gray-500"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl border-t-2 border-black mx-auto px-4 py-4 flex flex-wrap gap-6 items-center md:justify-between justify-center text-xs ">
          <p>© 2023 Ddsgnr. All rights reserved.</p>
          <div className="flex mx-4">
            <Link href="/" className="underline">
              Privacy Policy
            </Link>
            <Link href="/" className="underline">
              Terms of Service
            </Link>
            <Link href="/" className="underline">
              Cookies Settings
            </Link>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <FaFacebookF className="text-lg" />
            <FaInstagram className="text-lg" />
            <FaTwitter className="text-lg" />
            <FaLinkedin className="text-lg" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
