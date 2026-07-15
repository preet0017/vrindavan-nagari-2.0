import Navbar from "../layout/Navbar";
import Hero from "./Hero";
// import Footer from "../layout/Footer";
// import About from "./About";
import CurrentEvent from "./CurrentEvent";

export default function OpeningScene() {
  return (
    <>
      <Navbar />
      <Hero />
      <CurrentEvent />
      {/* <About />
      <Footer />  */}
    </>
  );
}