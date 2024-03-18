import { Autocomplete } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "./style.module.css";

export default function Printers3D() {
  const [selectedMachine, setSelectedMachine] = React.useState(null);
  const [selectedMaterial, setSelectedMaterial] = React.useState(null);
  const [selectedQuality, setSelectedQuality] = React.useState(null);
  const [selectedFormat, setSelectedFormat] = React.useState(null);

  const handleMachineChange = (event, newValue) => {
    setSelectedMachine(newValue);
    setSelectedMaterial(null);
    setSelectedQuality(null);
    setSelectedFormat(null);
  };

  const printers = [
    {
      label: "Finder - 1 a 5",
      materials: ["PLA", "TPU"],
      qualities: ["Alta", "Media", "Baja"],
      formats: ["STL", "OBJ"],
    },
    {
      label: "AnyCubic Kobra Max - 1",
      materials: ["PLA", "TPU", "PET-G"],
      qualities: ["Alta", "Media", "Baja"],
      formats: ["STL", "OBJ"],
    },
    {
      label: "RaisePro 2 Plus - 1",
      materials: ["PLA", "TPU", "ABS", "Fibra Carbono", "Nylon"],
      qualities: ["Ultra alta", "Alta", "Media", "Baja", "Ultra baja"],
      formats: ["STL", "OBJ"],
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
        options={printers}
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
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={selectedMachine.qualities}
          value={selectedQuality}
          onChange={(event, newValue) => setSelectedQuality(newValue)}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Calidad de impresión" />
          )}
        />
      )}

      {selectedMachine && (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={selectedMachine.formats}
          value={selectedFormat}
          onChange={(event, newValue) => setSelectedFormat(newValue)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Formato" />}
        />
      )}
    </Box>
  );
}
