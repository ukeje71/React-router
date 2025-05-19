import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePG";
import About from "./pages/AboutPG";
import Contact from "./pages/ContactPG";
import Products from "./pages/prodPG";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </div>
  );
};

export default App;
