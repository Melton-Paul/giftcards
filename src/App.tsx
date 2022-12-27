import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import BusinessRoutes from "./routes/BusinessRoutes";
import CustomerRoutes from "./routes/CustomerRoutes";
import infoStore from "./store/info-store";
import { Routes, Route } from "react-router";
import Privacy from "./components/Privacy/Privacy";
import TagManager from "react-gtm-module";

function App() {
  const infoCtx = React.useContext(infoStore);
  const [selected, setIsSelected] = React.useState(false);

  const tagManagerArgs = {
    gtmId: "GTM-TF9M4TG",
  };

  TagManager.initialize(tagManagerArgs);

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
    </div>
  );
}

export default App;
