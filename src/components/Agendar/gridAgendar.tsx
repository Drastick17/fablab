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
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  TextField,
} from "@mui/material";
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
    service: "Laser Cutter",
    machine: "No definido",
  },
];

export function GridAgendar() {
  const [data, setData] = React.useState([
    { value: "Cargando...", label: "Cargando..." },
  ]);

  const fetchData = async (servicio: string) => {
    try {
      const res = await fetch("http://localhost:8000/api/equipment");
      const resData = await res.json();
      console.log(resData);
      const equipamientoFiltrado = resData.filter(
        (equipo) => equipo.Type_Equipment === servicio
      );
      const dataAutocomplete = equipamientoFiltrado.map((equipo) => {
        return {
          value: equipo.Name_Equipment,
          label: equipo.Name_Equipment,
        };
      });
      console.log(dataAutocomplete);
      setData(dataAutocomplete);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = (servicio: string) => {
    setOpen(true);
    fetchData(servicio);
  };
  const handleClose = () => {
    setOpen(false);
    setData(Defecto);
  };

  const Defecto = [{ value: "Cargando...", label: "Cargando..." }];

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Agendamientos
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Celular</TableCell>
            <TableCell>Servicio</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.cellphone}</TableCell>
              <TableCell>{row.service}</TableCell>
              <TableCell>
                <ButtonGroup
                  variant="contained"
                  aria-label="Basic button group"
                >
                  <div>
                    <Button onClick={() => handleOpen(row.service)}>
                      Agendar Cita
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box className={style.modal}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Agendar Cita
                        </Typography>

                        <Box
                          sx={{
                            margin: "0px",
                            border: "solid 2px",
                            padding: "10px",
                          }}
                        >
                          {data.map((checkbox) => (
                            <div key={checkbox.value}>
                              <Grid container spacing={2} sx={{ md: 6 }}>
                                <Grid item>
                                  <FormGroup>
                                    <FormControlLabel
                                      control={
                                        <Checkbox size="small" color="error" />
                                      }
                                      label={checkbox.label}
                                    />
                                  </FormGroup>
                                </Grid>

                                <Grid item>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                  >
                                    <DemoContainer
                                      components={["DateTimePicker"]}
                                    >
                                      <DateTimePicker
                                        sx={{ width: "100px" }}
                                        label="Hora de inicio"
                                      />
                                    </DemoContainer>
                                  </LocalizationProvider>
                                </Grid>

                                <Grid item>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                  >
                                    <DemoContainer
                                      components={["DateTimePicker"]}
                                    >
                                      <DateTimePicker label="Hora de finalización" />
                                    </DemoContainer>
                                  </LocalizationProvider>
                                </Grid>
                              </Grid>
                            </div>
                          ))}
                        </Box>
                      </Box>
                    </Modal>
                  </div>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
