import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Partners from "./components/Partners";
import Statistics from "./components/Statistics";
import Testimonial from "./components/Testimonial";
import TrainingSection from "./components/TrainingSection";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Partners />
      <About />
      <TrainingSection />
      <Testimonial />
      <Statistics />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
