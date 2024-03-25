/* eslint-disable @typescript-eslint/no-explicit-any */
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import { SyntheticEvent, useState } from "react";

import { useParams } from "react-router-dom";

import PRINTER3DTAB from './Tabs/3DPRINTER';

const services = [
  {
    name: "Impresiones 3D",
    value: "3D Printer",
    component: <PRINTER3DTAB />
  },
  {
    name: "Cortadora Laser",
    value: "Laser Cutter",
    component: <PRINTER3DTAB />
  },
  {
    name: "CNC Router (Fresadora)",
    value: "CNC Router",
    component: <PRINTER3DTAB />
  },
  {
    name: "Cama plana UV",
    value: "UV Printer",
    component: <PRINTER3DTAB />
  },
  {
    name: "Plotter de impresion y corte",
    value: "Printer Cutter",
    component: <PRINTER3DTAB />
  },
  {
    name: "Grabadora laser de metal",
    value: "Metal Plotter",
    component: <PRINTER3DTAB />
  },
  {
    name: "Plotter de impresion",
    value: "Printer Plotter",
    component: <PRINTER3DTAB />
  },
];

export default function Agenda() {
  const {path}= useParams();
  const [value, setValue] = useState(path ?? '3DPrinter');

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
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
          {services.map((service) => (
              <TabPanel  value={service.value} >
                {service.component}
              </TabPanel>
            ))}
       </Box>
      </TabContext>
    </Box>
  );
}
