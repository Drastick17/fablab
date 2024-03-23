/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabCustom from "./TabCustom";

import CamaUv from "./templates/CamaUv";
import Printers3D from "./templates/Printers3D";
import Cnc from "./templates/Cnc";
import LaserCutter from "./templates/LaserCutter";
import Plotter from "./templates/Plotter";
import MetalPlotter from "./templates/MetalLaser";
import PrintPlotter from "./templates/PrintPlotter";
import { useParams } from "react-router-dom";

const services = [
  {
    name: "Impresiones 3D",
    value: "3dprinter",
  },
  {
    name: "Cortadora Laser",
    value: "lasercutter",
  },
  {
    name: "CNC Router (Fresadora)",
    value: "cnc",
  },
  {
    name: "Cama plana UV",
    value: "uvprinter",
  },
  {
    name: "Plotter de impresion y corte",
    value: "cutterplotter",
  },
  {
    name: "Grabadora laser de metal",
    value: "laserplotter",
  },
  {
    name: "Plotter de impresion",
    value: "printerplotter",
  },
];

export default function Agenda() {
  const { type } = useParams();
  console.log(type);

  const [value, setValue] = React.useState(type);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    window.history.replaceState(null, "", newValue);
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label=""
            centered
            variant="scrollable"
          >
            {services.map((service) => (
              <Tab label={service.name} value={service.value} />
            ))}
          </TabList>
        </Box>
        {/* AGREGAR POR CADA SERVICIO UN TABCUSTOM,
         si quieres cambiarles los estilos a la tab hazle en el tab custom */}
        <TabCustom value="3dprinter">
          <Printers3D />
        </TabCustom>
        <TabCustom value="lasercutter">
          <LaserCutter />
        </TabCustom>
        <TabCustom value="cnc">
          <Cnc />
        </TabCustom>
        <TabCustom value="uvprinter">
          <CamaUv />
        </TabCustom>
        <TabCustom value="cutterplotter">
          <Plotter />
        </TabCustom>
        <TabCustom value="laserplotter">
          <MetalPlotter />
        </TabCustom>
        <TabCustom value="printerplotter">
          <PrintPlotter />
        </TabCustom>
      </TabContext>
    </Box>
  );
}
