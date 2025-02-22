import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import ScrollToTop from "./Components/ScrollToTop";
import KitchenPage from "./Components/Pages/Kitchens/KitchenPage";
import Bedrooms from "./Components/Pages/Bedrooms/Bedrooms";
import War from "./Components/Pages/War/War";
import ContactPage from "./Components/Pages/Contact/ContactPage";
import MWalls from "./Components/Pages/MWalls/MWalls";
import { IoLogoWhatsapp } from "react-icons/io";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchens" element={<KitchenPage />} />
        <Route path="/bedrooms" element={<Bedrooms />} />
        <Route path="/wardrobes" element={<War />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/media-walls" element={<MWalls />} />
      </Routes>
      <div className="whats-app">
        <a
          href="https://api.whatsapp.com/send?phone=447739034893"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoWhatsapp size={70} className="whats-app-icon" />
        </a>
      </div>
    </Router>
  );
}

export default App;
