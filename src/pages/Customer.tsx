import { Route, Routes } from "react-router";
import Home from "./HomeCustomer";

const Customer = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default Customer;
