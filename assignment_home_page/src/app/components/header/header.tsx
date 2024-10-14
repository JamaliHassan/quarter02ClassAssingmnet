"use client";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
  const [DarkMode, setDarkMode] = useState(false);
  const darkMode = (): void => {
    setDarkMode(!DarkMode);
    document.body.classList.toggle("dark", !DarkMode);
    document.body.style.color =
      document.body.style.color === "white" ? "black" : "white";
  };
  return (
    <header className="flex items-center fixed w-full h-auto justify-around border-b-2 z-10 bg-white top-0 max-md:flex-col max-md:p-6 max-sm:max-w-[600px] dark:bg-black ">
      <div>
        <a href=".">
          <img
            className="h-[65px] bg-transparent max-md:mb-2"
            src="/images/logo.png"
            alt="logo"
          ></img>
        </a>
      </div>
      <nav className="flex justify-evenly w-[600px] max-md:justify-center max-md:mb-2">
        <li className="listItem">
          <Link href=".">Home</Link>
        </li>
        <li className="listItem">
          <Link href=".">About</Link>
        </li>
        <li className="listItem">
          <Link href=".">Services</Link>
        </li>
        <li className="listItem">
          <Link href=".">Contact</Link>
        </li>
      </nav>
      <div>
        <button
          className="border-none transition ease-linear duration-200 hover:text-[#FF5733] p-2 text-2xl"
          onClick={darkMode}
        >
          {DarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
