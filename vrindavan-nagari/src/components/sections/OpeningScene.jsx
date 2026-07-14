import Navbar from "../layout/Navbar";
import Hero from "./Hero";
import Footer from "../layout/Footer";
import About from "./About";

export default function OpeningScene() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer /> 
    </>
  );
}