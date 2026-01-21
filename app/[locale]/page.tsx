import Navbar from "@/components/nav";
import Content from "@/components/content";
import Slider from "@/components/Slider";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import Guest from "@/components/Guest";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <Content />
      <Rooms />
      <Gallery />
      <Guest />
      <Footer />
    </div>
  )
}
