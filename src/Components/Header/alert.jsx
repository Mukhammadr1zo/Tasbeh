import React from "react";
import { Context as ButtonContext } from "../Context/ButtonContext";
import { Context as SelectContext } from "../Context/Localization";
import { Context as HamdContext } from "../Context/Localization";
import { Context as IstigforContext } from "../Context/Localization";
import { Context as SalovatContext } from "../Context/Localization";
import { Button } from "@mui/material";

const Alert = () => {
  const [count, setCount] = React.useState(0);
  const { option } = React.useContext(SelectContext);
  const { istigfor, setIstigfor } = React.useContext(IstigforContext);
  const { salovat, setSalovat } = React.useContext(SalovatContext);
  const { hamd, setHamd } = React.useContext(HamdContext);

  let lap = 0;
  React.useEffect(() => {
    if (count === 33) {
      if (option === "Hamd") {
        alert(`Hamd = ${lap + 1}`);
      } else if (option === "Salovat") {
        alert(`Salovat = ${lap + 1}`);
      } else if (option === "Istig'for") {
        alert(`Istig'for = ${lap + 1}`);
      }
    }
  });

  return (
    <Button
      variant="contained"
      onClick={() => {
        setCount(count + 1);
        if (count === 33) {
          setCount(0);
          if (option === "Hamd") {
            setHamd(hamd + 1);
          } else if (option === "Istig'for") {
            setIstigfor(istigfor + 1);
          } else if (option === "Salovat") {
            setSalovat(salovat + 1);
          }
        }
      }}
    >
      {count}
    </Button>
  );
};

export default Alert;
