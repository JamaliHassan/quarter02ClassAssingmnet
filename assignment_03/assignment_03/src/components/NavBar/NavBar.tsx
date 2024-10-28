"use client";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
const NavBar = () => {
  return (
    <div className="flex justify-around items-center p-4">
      <div className="text-2xl font-bold">
        <Link href=".">Furniro</Link>
      </div>
      <div>
        <ul className="flex justify-center items-center">
          <li className="ml-5 font-bold hover:text-[#b88e2f] transition ease-linear">
            <Link href=".">Home</Link>
          </li>
          <li className="ml-5 font-bold hover:text-[#b88e2f] transition ease-linear">
            <Link href=".">Shop</Link>
          </li>
          <li className="ml-5 font-bold hover:text-[#b88e2f] transition ease-linear">
            <Link href=".">About Us</Link>
          </li>
          <li className="ml-5 font-bold hover:text-[#b88e2f] transition ease-linear">
            <Link href=".">Contact Us</Link>
          </li>
          <li className="text-lg font-bold ml-4 border-none py-2 px-4 bg-[#b88e2f] text-white hover:bg-orange-950 transition ease-linear">
            <Link href=".">Purchase</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
