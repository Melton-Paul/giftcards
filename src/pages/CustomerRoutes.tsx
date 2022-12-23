import Contact from "./Contact";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import ContactSales from "../components/Contact/ContactSales/ContactSales";
import FAQ from "../components/FAQ/FAQ";
import Privacy from "../components/Privacy/Privacy";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Routes, Route } from "react-router";
import CustomerHome from "./Customer";

const CustomerRoutes = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<CustomerHome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-sales" element={<ContactSales />} />
          <Route path="/contact-support" element={<ContactSales />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/card" element={<Card />} />
          <Route path="*" element={<CustomerHome />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default CustomerRoutes;
