import { Autocomplete } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Cnc() {
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

  const cncMachines = [
    {
      label: "SRM 20",
      materials: ["MDF", "Acrílico", "Alucubon", "Maderas", "Placa PCB"],
    },
    {
      label: "Modela MDX 50",
      materials: ["MDF", "Acrilico", "Alucubon", "Maderas"],
    },
    {
      label: "Gran Formato",
      materials: ["MDF", "Acrilico", "Alucubon", "Maderas"],
    },
  ];

  const formats = [
    {
      label: "STL",
    },
    {
      label: "DXF",
    },
    {
      label: "OBJ",
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
        options={cncMachines}
        getOptionLabel={(option) => option.label}
        onChange={handleMachineChange}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Maquina" />}
      />

      {selectedMachine && (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={selectedMachine.materials}
          value={selectedMaterial}
          onChange={(event, newValue) => setSelectedMaterial(newValue)}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Material de impresión" />
          )}
        />
      )}

      {selectedMachine && (
        <TextField
          id="outlined-basic"
          label="Espesor (mm)"
          variant="outlined"
          value={selectedEspesor}
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
