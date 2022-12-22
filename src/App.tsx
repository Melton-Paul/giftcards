import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Business from "./pages/Business";
import Customer from "./pages/Customer";
import infoStore from "./store/info-store";

function App() {
  const infoCtx = React.useContext(infoStore);
  const [selected, setIsSelected] = React.useState(false);

  return (
    <div className="app">
      {infoCtx.isBusiness && selected ? (
        <Business />
      ) : !selected ? (
        <LandingPage setIsSelected={setIsSelected} />
      ) : (
        <Customer />
      )}
    </div>
  );
}

export default App;
