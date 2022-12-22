import React, { createContext } from "react";

const infoStore = createContext({
  isBusiness: false,
  toggleBusiness: (boolean: boolean) => {},
});

export const InfoStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isBusiness, setIsBusiness] = React.useState<boolean>(false);

  function toggleBusiness(boolean: boolean) {
    setIsBusiness(boolean);
  }

  return (
    <infoStore.Provider value={{ isBusiness, toggleBusiness }}>
      {children}
    </infoStore.Provider>
  );
};

export default infoStore;
