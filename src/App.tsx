import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import BusinessRoutes from "./routes/BusinessRoutes";
import CustomerRoutes from "./routes/CustomerRoutes";
import infoStore from "./store/info-store";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import { Routes, Route } from "react-router";
import Privacy from "./components/Privacy/Privacy";
import TagManager from "react-gtm-module";

function App() {
  const infoCtx = React.useContext(infoStore);
  const [scrollVal, setScrollVal] = React.useState(0);

  const [selected, setIsSelected] = React.useState(false);

  console.log(selected);
  console.log(infoCtx.preset);
  const tagManagerArgs = {
    gtmId: "GTM-TF9M4TG",
  };

  React.useEffect(() => {
    setIsSelected(infoCtx.preset);
  }, [infoCtx.preset]);

  TagManager.initialize(tagManagerArgs);

  function handleScroll() {
    setScrollVal(window.scrollY);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {infoCtx.isBusiness && selected ? (
        <BusinessRoutes />
      ) : !selected ? (
        <>
          <Routes>
            <Route
              path="/"
              element={<LandingPage setIsSelected={setIsSelected} />}
            />
            <Route path="/privacy" element={<Privacy />} />
            <Route
              path="*"
              element={<LandingPage setIsSelected={setIsSelected} />}
            />
          </Routes>
        </>
      ) : (
        <CustomerRoutes />
      )}
      {scrollVal > 400 && <ScrollTop />}
    </div>
  );
}

export default App;
