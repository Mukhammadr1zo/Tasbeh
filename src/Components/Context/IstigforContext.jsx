import React from "react";

const Contex = React.createContext();

function Provider({ children }) {
  const [istigfor, setIstigfor] = React.useState(
    window.localStorage.getItem("Istigfor", istigfor) || 0
  );
  return (
    <Contex.Provider value={{ istigfor, setIstigfor }}>
      {children}
    </Contex.Provider>
  );
}

export { Contex, Provider };
