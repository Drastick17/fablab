/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabCustom from "./TabCustom";
import FormPrinters3D from "./forms/FormPrinters3D";

import CamaUv from "./templates/CamaUv";
import Printers3D from "./templates/Printers3D";
import Cnc from "./templates/Cnc";
import LaserCutter from "./templates/LaserCutter";
import Plotter from "./templates/Plotter";
import MetalPlotter from "./templates/MetalLaser";
import PrintPlotter from "./templates/PrintPlotter";

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
    name: "Grabadora laser de metal",
    value: "6",
  },
  {
    name: "Plotter de impresion",
    value: "7",
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
          <div>{Printers3D()}</div>
        </TabCustom>
        <TabCustom value="2">
          <div>{LaserCutter()}</div>
        </TabCustom>
        <TabCustom value="3">
          <div>{Cnc()}</div>
        </TabCustom>
        <TabCustom value="4">
          <div>{CamaUv()}</div>
        </TabCustom>
        <TabCustom value="5">
          <div>{Plotter()}</div>
        </TabCustom>
        <TabCustom value="6">
          <div>{MetalPlotter()}</div>
        </TabCustom>
        <TabCustom value="7">
          <div>{PrintPlotter()}</div>
        </TabCustom>
      </TabContext>
    </Box>
  );
}
