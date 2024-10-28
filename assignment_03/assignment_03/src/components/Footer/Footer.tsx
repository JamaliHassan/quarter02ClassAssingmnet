'use client'
import Link from "next/link";
const Footer = () => {
  return (
    <>
    <div className="flex justify-center items-center gap-6 mt-14  border-t-2 border-[#b88e2f]">
      <div className="p-6 ">
        <h1 className="text-2xl font-bold">Furniro .</h1>
        <p className="mt-4">
          400 University Drive Suite 200 Carol <br /> Gables, <br />
          Fl 33134 USA
        </p>
      </div>
      <div className="p-6 flex flex-col ">
        <h4 className="font-bold">Usefull links</h4>
        <Link href="." className="pt-3 hover:text-[#b88e2f] transition ease-linear">
          Home
        </Link>
        <Link href="." className="pt-3 hover:text-[#b88e2f] transition ease-linear">
          Shop
        </Link>
        <Link href="." className="pt-3 hover:text-[#b88e2f] transition ease-linear">
          About
        </Link>
      </div>
      <div className="p-6">
        <form action="">
          <h1 className="font-bold text-lg">Contact Us</h1>
          <input
            type="text"
            placeholder="Enter Name"
            className="outline-none mt-4 border-b-2 border-[#b88e2f]"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Email"
            className="outline-none mt-4 border-b-2 border-[#b88e2f]"
          />
          <button className=" block p-2 mt-4 col-start-2 rounded border-2 bg-[#b88e2f] text-white  hover:bg-orange-950 transition ease-linear">
            Submit
          </button>
        </form>
      </div>
      <hr />
    </div>
      <div className="text-white bg-[#b88e2f] text-center">
          <p>&copy;All Rights Are Reserved by Furniro</p>
      </div>
      </>
  );
};

export default Footer;
