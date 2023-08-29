import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewsLetter from "./components/NewsLetter";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from './components/Contact';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </Router>
    </>
  );
}

export default App;
