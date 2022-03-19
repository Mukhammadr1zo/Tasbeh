import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [hamd, setHamd] = React.useState(
    window.localStorage.getItem("Hamd") || 0
  );
  return (
    <Context.Provider value={{ hamd, setHamd }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
