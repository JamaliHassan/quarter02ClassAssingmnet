import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";

const page = () => {
  return (
    <div className=" flex flex-col justify-between h-screen w-full">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default page;
