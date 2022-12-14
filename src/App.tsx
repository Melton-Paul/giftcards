import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import ContactSales from "./components/Contact/ContactSales/ContactSales";
import Solutions from "./components/Solutions/Solutions";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route path="/contact-support" element={<ContactSales />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
