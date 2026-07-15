import Navbar from "../layout/Navbar";
import Hero from "./Hero";
// import Footer from "../layout/Footer";
import CurrentEvent from "./CurrentEvent";
import Line from "./Line";
import PillarSection from "./PillarSection";

export default function OpeningScene() {
  return (
    <>
      <Navbar />
      <Hero />
      <Line />
      <PillarSection />
      <CurrentEvent />
      {/* <Footer />  */} 
    </>
  );
}