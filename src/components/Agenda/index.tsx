/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabCustom from "./TabCustom";
import FormPrinters3D from "./forms/FormPrinters3D";
/**
 * 
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
 */

const services = [
  {
    name: "Impresiones 3D",
    value: "1",
  },
  {
    name: "Cortadora Laser",
    value: "2",
  },
  {
    name: "CNC Router (Fresadora)",
    value: "3",
  },
  {
    name: "Cama plana UV",
    value: "4",
  },
  {
    name: "Plotter de impresion y corte",
    value: "5",
  },
  {
    name: "Plotter de impresion",
    value: "5",
  },
  {
    name: "Grabadora laser de metal",
    value: "6",
  },
];

export default function Agenda() {
  const [value, setValue] = React.useState("1");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="" centered>
            {services.map((service) => (
              <Tab label={service.name} value={service.value} />
            ))}
          </TabList>
        </Box>
        {/* AGREGAR POR CADA SERVICIO UN TABCUSTOM,
         si quieres cambiarles los estilos a la tab hazle en el tab custom */}
        <TabCustom value="1">
          <FormPrinters3D />
        </TabCustom>
        <TabCustom value="2"></TabCustom>
        <TabCustom value="3"></TabCustom>
      </TabContext>
    </Box>
  );
}
