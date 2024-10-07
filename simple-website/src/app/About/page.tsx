import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-[200px] w-[400px]  mt-[50px] m-auto text-xl bg-gradient-to-r from-cyan-500 to-blue-500">
        About Page Content
      </div>
    </div>
  );
};

export default About;
