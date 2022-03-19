import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../App.css";
import { Context as TasbehContext } from "../Context/Localization";

export default function BasicSelect() {
  const { option, setOption } = React.useContext(TasbehContext);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tasbeh</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Istigfor"
          onChange={handleChange}
        >
          <MenuItem value={"Istig'for"}>Istig'for</MenuItem>
          <MenuItem value={"Salovat"}>Salovat</MenuItem>
          <MenuItem value={"Hamd"}>Hamd</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
