import FeaturedProducts from "./Components/FeaturedProducts";
import Footer from "./Components/Footer";
import { SimpleSlider } from "./Components/Header/Carousel";
import HealthMonitor from "./Components/HealthMonitor";
import Navbar from "./Components/Navbar/Index";
import Testimonials from "./Components/Testimonials";
import TestingKits from "./Components/TestingKits";


function App() {
  return (
    <>
      <Navbar/>
      <SimpleSlider/>
      <FeaturedProducts/>
      <HealthMonitor/>
      <TestingKits/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
