import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { Autocomplete, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const rows = [
  {
    id: 0,
    time: "No definido",
    name: "Juanito",
    cellphone: "0123456789",
    material: "AVS",
    service: "3D Printer",
    machine: "No definido",
  },
  {
    id: 1,
    time: "No definido",
    name: "Paco",
    cellphone: "0123456789",
    material: "PLS",
    service: "3D Printer",
    machine: "No definido",
  },
];

function GridAgendar() {
  const handleSubmit = async () => {
    try {
      const data = await fetch("http://localhost:8000/api/equipment/");
      const respuesta = await data.json();

      console.log(respuesta);
    } catch (e) {}
  };

  React.useEffect(() => {
    handleSubmit();
  }, []);

  function submit(row: []) {
    console.log(row);
  }
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Agendamientos
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Hora de inicio</TableCell>
            <TableCell>Hora de final</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Celular</TableCell>
            <TableCell>Material</TableCell>
            <TableCell>Servicio</TableCell>
            <TableCell>Maquina</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.time}</TableCell>
              <TableCell>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker label="Hora de finalización" />
                  </DemoContainer>
                </LocalizationProvider>
              </TableCell>
              <TableCell>
                <input type="text" value={row.name} />
              </TableCell>
              <TableCell>{row.cellphone}</TableCell>
              <TableCell>{row.material}</TableCell>
              <TableCell>{row.service}</TableCell>
              <TableCell></TableCell>
              <TableCell>
                <ButtonGroup
                  variant="contained"
                  aria-label="Basic button group"
                >
                  <Button>
                    <CheckIcon />
                  </Button>
                  <Button>
                    <CloseIcon />
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default function Agendar() {
  return (
    <Container className={style.main} component="main" maxWidth="xl">
      <Grid item xs={12} sx={{ marginTop: "15px" }}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <GridAgendar />
        </Paper>
      </Grid>
    </Container>
  );
}
