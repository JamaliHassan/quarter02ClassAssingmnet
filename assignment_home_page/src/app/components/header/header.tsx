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
    <header className="flex items-center justify-around h-16 border-b-2">
      <div>
        <a href=".">
          <img
            className="h-[65px] bg-transparent"
            src="/images/logo.png"
            alt="logo"
          />
        </a>
      </div>
      <nav className="flex justify-between w-[600px]">
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
          className="border-none transition ease-linear duration-200 hover:text-[#FF5733] p-2"
          onClick={darkMode}
        >
          {DarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
