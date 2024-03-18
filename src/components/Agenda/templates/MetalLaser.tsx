import { Autocomplete } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MetalPlotter() {
  const [selectedMachine, setSelectedMachine] = React.useState(null);
  const [selectedMaterial, setSelectedMaterial] = React.useState(null);
  const [selectedEspesor, setselectedEspesor] = React.useState(null);
  const [selectedFormat, setselectedFormat] = React.useState(null);

  const handleMachineChange = (event, newValue) => {
    setSelectedMachine(newValue);
    setSelectedMaterial(null);
    setselectedEspesor(null);
    setselectedFormat(null);
  };

  const material = [
    {
      label: "Metal",
    },
    {
      label: "Cuero",
    },
    {
      label: "Plástico",
    },
    {
      label: "Otro (Especificar)",
    },
  ];

  const formats = [
    {
      label: "DXF",
    },
    {
      label: "AI",
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
          value="Plotter de Impresión"
          variant="outlined"
          disabled
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
      {selectedMachine && (
        <TextField
          id="outlined-basic"
          label="Maquina"
          value="Grabadora láser de metal"
          variant="outlined"
          disabled
        />
      )}
      {selectedMachine && (
        <TextField id="outlined-basic" label="Ancho (cm)" variant="outlined" />
      )}
      {selectedMachine && (
        <TextField id="outlined-basic" label="Alto (cm)" variant="outlined" />
      )}
    </Box>
  );
}
