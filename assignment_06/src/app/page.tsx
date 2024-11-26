import NavBar from "@/components/NavBar";
import HeroSection from "@/components/Hero";
import Catagory from "@/components/Catagory";
import Achievements from "@/components/Achievements";
import Courses from "@/components/Courses";
import Teams from "@/components/Teams";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Catagory />
      <Achievements />
      <Courses />
      <Teams />
      <Testimonials />
      <Footer />
    </div>
  );
}
