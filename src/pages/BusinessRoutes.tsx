import Home from "./HomeBusiness";
import Contact from "./Contact";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import ContactSales from "../components/Contact/ContactSales/ContactSales";
import Solutions from "../components/Solutions/Solutions";
import Features from "../components/Features/Features";
import Pricing from "../components/Pricing/Pricing";
import FAQ from "../components/FAQ/FAQ";
import Privacy from "../components/Privacy/Privacy";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Routes, Route } from "react-router";

const BusinessRoutes = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-sales" element={<ContactSales />} />
          <Route path="/contact-support" element={<ContactSales />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/card" element={<Card />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default BusinessRoutes;
