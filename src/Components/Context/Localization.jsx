import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [option, setOption] = React.useState("Istig'for");

  return (
    <Context.Provider value={{ option, setOption }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
