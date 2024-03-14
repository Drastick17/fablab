import {
  Autocomplete,
  Button,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import dayjs, { Dayjs } from "dayjs";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

import SendIcon from "@mui/icons-material/Send";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import React from "react";
import styled from "styled-components";

const printers = [
  {
    label: "Impresora 3D",
  },
  {
    label: "CNC",
  },
  {
    label: "Corte Laser",
  },
];

const materials = [
  {
    label: "AVS",
  },
  {
    label: "TPU",
  },
  {
    label: "PLA",
  },
];

const calidad = [
  {
    label: "Alto",
  },
  {
    label: "Medio",
  },
  {
    label: "Bajo",
  },
];

export default function Agenda() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      display={"flex"}
      justifyItems={"center"}
    >
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={printers}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Maquina" />}
        />
      </div>
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={materials}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Material" />}
        />
      </div>
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={calidad}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Calidad" />}
        />
      </div>
      <TextField
        type="file"
        id="outlined-basic"
        label="STL"
        variant="outlined"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker label="Agendar Cita" />
        </DemoContainer>
      </LocalizationProvider>
      <TextField id="outlined-basic" label="Precio" variant="outlined" />
      <div>
        <Button variant="contained">Agendar</Button>
      </div>
    </Box>
  );
}
