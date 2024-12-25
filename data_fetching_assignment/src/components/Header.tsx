import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <nav className="bg-[#215F65] w-full h-20 flex items-center justify-center">
        <Link href={"/"} className=" cursor-pointer text-4xl">
          Data Fetching Assignment
        </Link>
      </nav>
    </nav>
  );
};

export default Header;
