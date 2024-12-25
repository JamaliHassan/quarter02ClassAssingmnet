import Link from "next/link";
const Home = () => {
  return (
    <div className="h-[50%] flex justify-center items-center">
  <div className="flex flex-col gap-6 justify-center items-center w-[400px] h-[300px] bg-[#3F403F] p-6 rounded-lg shadow-lg">
    <h2 className="text-lg text-[#E6E8E6] font-semibold text-center">
      Select an option to explore data fetching methods
    </h2>
    <Link
      href="/client-side-data"
      className="p-4 w-full text-center bg-[#E6E8E6] text-[#3F403F] font-medium rounded-md transition ease-linear hover:bg-[#D1D3D1]"
    >
      Client Side Data
    </Link>
    <Link
      href="/server-side-data"
      className="p-4 w-full text-center bg-[#E6E8E6] text-[#3F403F] font-medium rounded-md transition ease-linear hover:bg-[#D1D3D1]"
    >
      Server Side Data
    </Link>
  </div>
</div>
  );
};

export default Home;
