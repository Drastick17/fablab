import { Autocomplete } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function LaserCutter() {
  const [selectedMaterial, setSelectedMaterial] = React.useState(null);
  const [selectedEspesor, setSelectedEspesor] = React.useState(null);
  const [selectedFormat, setSelectedFormat] = React.useState(null);

  const handleMaterialChange = (event, newValue) => {
    setSelectedMaterial(newValue);
    setSelectedEspesor(null);
    setSelectedFormat(null);
  };

  const lasserCutter = [
    {
      label: "MDF",
      espesor: ["3mm", "6mm", "9mm"],
    },
    {
      label: "Acrilico",
      espesor: ["3mm", "6mm", "9mm"],
    },
    {
      label: "Cintra",
      espesor: ["3mm", "6mm", "9mm"],
    },
    {
      label: "Carton",
      espesor: ["Por defecto"],
    },
    {
      label: "Carton Maqueta",
      espesor: ["Por defecto"],
    },
    {
      label: "Otros",
      espesor: ["Especificar"],
    },
  ];

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
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={lasserCutter}
        getOptionLabel={(option) => option.label}
        onChange={handleMaterialChange}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Material" />}
      />

      {selectedMaterial && (
        <TextField
          id="outlined-basic"
          label="Maquina"
          value="Cortadora Laser"
          variant="outlined"
          disabled
        />
      )}

      {selectedMaterial && (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={selectedMaterial.espesor}
          value={selectedEspesor}
          onChange={(event, newValue) => setSelectedMaterial(newValue)}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Material de impresión" />
          )}
        />
      )}

      {selectedMaterial && (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={formats}
          getOptionLabel={(option) => option.label}
          value={selectedFormat}
          onChange={handleMaterialChange}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Formatos" />}
        />
      )}
    </Box>
  );
}
