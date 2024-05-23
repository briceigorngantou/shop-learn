import React, { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  return (
    <AppContext.Provider value={{ cards, setCards }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
