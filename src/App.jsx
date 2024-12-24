import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTA from "./components/CTA"
import Home from "./pages/Home";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Experience from "./pages/Experience";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <CTA/>
      <Footer />
    </div>
  )
}

export default App
