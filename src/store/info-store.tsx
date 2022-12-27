import { prependListener } from "process";
import React, { createContext } from "react";

const infoStore = createContext({
  isBusiness: false,
  preset: false,
  toggleBusiness: (boolean: boolean) => {},
});

export const InfoStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isBusiness, setIsBusiness] = React.useState<boolean>(false);
  const [preset, setPreset] = React.useState(false);
  let urlElements = window.location.href
    .split(".")
    .filter((items) => items !== "");

  function toggleBusiness(boolean: boolean) {
    setIsBusiness(boolean);
  }

  React.useEffect(() => {
    const regexBus = /business/i;
    const regexMy = /my/i;

    if (regexBus.test(urlElements[0])) {
      toggleBusiness(true);
      setPreset(true);
      console.log("business");
    }
    if (regexMy.test(urlElements[0])) {
      toggleBusiness(false);
      setPreset(true);
      console.log("my");
    }
  }, [urlElements]);

  return (
    <infoStore.Provider value={{ preset, isBusiness, toggleBusiness }}>
      {children}
    </infoStore.Provider>
  );
};

export default infoStore;
