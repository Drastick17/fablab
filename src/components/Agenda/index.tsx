import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Autocomplete, TextField } from "@mui/material";

const printers = [
  {
    label: "Finder - 1 a 5",
    materials: [{ label: ["PLA", "TPU"] }],
    qualities: [{ label: ["Alta", "Media", "Baja"] }],
    formats: [{ label: ["STL", "OBJ"] }],
  },
  {
    label: "AnyCubic Kobra Max - 1",
    materials: [{ label: ["PLA", "TPU", "PET-G"] }],
    qualities: [{ label: ["Alta", "Media", "Baja"] }],
    formats: [{ label: ["STL", "OBJ"] }],
  },
  {
    label: "RaisePro 2 Plus - 1",
    materials: [{ label: ["PLA", "TPU", "ABS", "Fibra Carbono", "Nylon"] }],
    qualities: [
      { label: ["Ultra alta", "Alta", "Media", "Baja", "Ultra baja"] },
    ],
    formats: [{ label: ["STL", "OBJ"] }],
  },
];

export default function Agenda() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [selectedMachine, setSelectedMachine] = React.useState(null);
  const [selectedMaterial, setSelectedMaterial] = React.useState(null);
  const [selectedQuality, setSelectedQuality] = React.useState(null);
  const [selectedFormat, setSelectedFormat] = React.useState(null);

  const handleMachineChange = (event, newValue) => {
    setSelectedMachine(newValue);
    setSelectedMaterial(null); // Reiniciar el estado del campo de materiales
    setSelectedQuality(null); // Reiniciar el estado del campo de calidad
    setSelectedFormat(null); // Reiniciar el estado del campo de formato
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="" centered>
            <Tab label="Impresiones 3D" value="1" />
            <Tab label="Cortadora Laser" value="2" />
            <Tab label="CNC Router (Fresadora)" value="3" />
            <Tab label="Cama plana UV" value="4" />
            <Tab label="Plotter de impresion y corte" value="5" />
            <Tab label="Grabadora laser de metal" value="6" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={printers}
            getOptionLabel={(option) => option.label}
            onChange={handleMachineChange}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Maquina" />}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={
              selectedMachine
                ? selectedMachine.materials.flatMap(
                    (material) => material.label
                  )
                : []
            }
            value={selectedMaterial}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Material de impresión" />
            )}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={
              selectedMachine
                ? selectedMachine.qualities.flatMap((quality) => quality.label)
                : []
            }
            value={selectedMaterial}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Calidad de impresión" />
            )}
          />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={
              selectedMachine
                ? selectedMachine.formats.flatMap((format) => format.label)
                : []
            }
            value={selectedMaterial}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Formato" />}
          />
        </TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
