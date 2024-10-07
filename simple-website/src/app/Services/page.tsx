import Navbar from "@/components/Navbar";
import Link from "next/link";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-[200px] w-[400px]  mt-[50px] m-auto text-xl bg-gradient-to-r from-cyan-500 to-blue-500">
        Service As Web Developer
      </div>
      <div className="text-center mt-4">
        <Link
          href="/Services/web-development"
          rel="stylesheet"
          className="  p-2 mt-10 border-2 border-solid bg-[#38bdf8] shadow-2xl"
        >
          Get Service
        </Link>
      </div>
    </div>
  );
};

export default Services;
