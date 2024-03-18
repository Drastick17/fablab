import { Autocomplete } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CamaUv() {
  const formats = [
    {
      label: "DXF",
    },
    {
      label: "DWG",
    },
    {
      label: "AI",
    },
    {
      label: "PDF",
    },
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        typography: "body1",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Maquina"
        value="Cama UV"
        variant="outlined"
        disabled
      />

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={formats}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Material" />}
      />

      <TextField id="outlined-basic" label="Ancho (cm)" variant="outlined" />

      <TextField id="outlined-basic" label="Alto (cm)" variant="outlined" />
    </Box>
  );
}
