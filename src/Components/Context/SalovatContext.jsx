import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [salovat, setSalovat] = React.useState(
    window.localStorage.getItem("Salovat") || 0
  );
  return (
    <Context.Provider value={{ salovat, setSalovat }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
