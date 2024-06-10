import AboutUs from "./components/partials/Sections/AboutUs/AboutUs";
import Banner from "./components/partials/Sections/Banner/Banner";
import Contact from "./components/partials/Sections/Contact/Contact";
import Footer from "./components/partials/Sections/Footer/Footer";
import Hero from "./components/partials/Sections/Hero/Hero";
import Items from "./components/partials/Sections/Items/Items";
import Menu from "./components/partials/Sections/Menu/Menu";
import Navbar from "./components/partials/Sections/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <AboutUs />
      <Items />
      <Banner />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
