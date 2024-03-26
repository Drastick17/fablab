/* eslint-disable @typescript-eslint/no-explicit-any */
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import TabCustom from "./TabCustom";

import { useParams } from "react-router-dom";
import CamaUv from "./templates/CamaUv";
import Cnc from "./templates/Cnc";
import LaserCutter from "./templates/LaserCutter";
import MetalPlotter from "./templates/MetalLaser";
import Plotter from "./templates/Plotter";
import PrintPlotter from "./templates/PrintPlotter";
import Printers3D from "./templates/Printers3D";

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

  const [value, setValue] = React.useState(type ?? '');

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
        <TabCustom value="3dprinter">
          <div>{Printers3D()}</div>
        </TabCustom>
        <TabCustom value="lasercutter">
          <div>{LaserCutter()}</div>
        </TabCustom>
        <TabCustom value="cnc">
          <div>{Cnc()}</div>
        </TabCustom>
        <TabCustom value="uvprinter">
          <div>{CamaUv()}</div>
        </TabCustom>
        <TabCustom value="cutterplotter">
          <div>{Plotter()}</div>
        </TabCustom>
        <TabCustom value="laserplotter">
          <div>{MetalPlotter()}</div>
        </TabCustom>
        <TabCustom value="printerplotter">
          <div>{PrintPlotter()}</div>
        </TabCustom>
      </TabContext>
    </Box>
  );
}
