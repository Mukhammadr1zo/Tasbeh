import React from "react";

const Context = React.createContext();

function Provider({ children }) {
  const [count, setCount] = React.useState(33);

  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
