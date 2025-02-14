import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import ScrollToTop from "./Components/ScrollToTop";
import KitchenPage from "./Components/Pages/Kitchens/KitchenPage";
import Bedrooms from "./Components/Pages/Bedrooms/Bedrooms";
import War from "./Components/Pages/War/War";
import ContactPage from "./Components/Pages/Contact/ContactPage";
import MWalls from "./Components/Pages/MWalls/MWalls";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures scrolling to top on every page change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchens" element={<KitchenPage />} />
        <Route path="/bedrooms" element={<Bedrooms />} />
        <Route path="/wardrobes" element={<War />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/media-walls" element={<MWalls />} />
      </Routes>
    </Router>
  );
}

export default App;
