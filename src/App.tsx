import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import BusinessRoutes from "./pages/BusinessRoutes";
import CustomerRoutes from "./pages/CustomerRoutes";
import infoStore from "./store/info-store";

function App() {
  const infoCtx = React.useContext(infoStore);
  const [selected, setIsSelected] = React.useState(false);

  return (
    <div className="app">
      {infoCtx.isBusiness && selected ? (
        <BusinessRoutes />
      ) : !selected ? (
        <LandingPage setIsSelected={setIsSelected} />
      ) : (
        <CustomerRoutes />
      )}
    </div>
  );
}

export default App;
