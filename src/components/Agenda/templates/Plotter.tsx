import { Autocomplete } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Plotter() {
  const [selectedMachine, setSelectedMachine] = React.useState(null);
  const [selectedMaterial, setSelectedMaterial] = React.useState(null);
  const [selectedFormat, setselectedFormat] = React.useState(null);

  const handleMachineChange = (event, newValue) => {
    setSelectedMachine(newValue);
    setSelectedMaterial(null);
    setselectedFormat(null);
  };

  const material = [
    {
      label: "Regular",
    },
    {
      label: "Termico",
    },
    {
      label: "Otro (Especificar)",
    },
  ];

  const color = [
    {
      label: "Blanco",
    },
    {
      label: "Negro",
    },
    {
      label: "Transparente",
    },
    {
      label: "Otro (Especificar)",
    },
  ];

  const formats = [
    {
      label: "AI",
    },
    {
      label: "EPS",
    },
    {
      label: "SVG",
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
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={material}
        getOptionLabel={(option) => option.label}
        onChange={handleMachineChange}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Material" />}
      />

      {selectedMachine && (
        <TextField
          id="outlined-basic"
          label="Maquina"
          value="Plotter de impresión y corte"
          variant="outlined"
          disabled
        />
      )}

      {selectedMachine && (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={color}
          value={selectedMaterial}
          onChange={(event, newValue) => setSelectedMaterial(newValue)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Color" />}
        />
      )}
      {selectedMachine && (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={formats}
          getOptionLabel={(option) => option.label}
          value={selectedFormat}
          onChange={handleMachineChange}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Formatos" />}
        />
      )}
    </Box>
  );
}
