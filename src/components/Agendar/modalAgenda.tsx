import * as React from "react";
import Grid from "@mui/material/Grid";
import {
  Autocomplete,
  Box,
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import AddIcon from "@mui/icons-material/Add";
import style from "./style.module.css";

interface Agenda {
  maquina: string;
  startDate: string;
  endDate: string;
}

export function ModalAgendar(props) {
  const [data, setData] = React.useState([
    { value: "Cargando...", label: "Cargando..." },
  ]);

  const [maquina, setMaquina] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [agenda, setAgenda] = React.useState<Agenda[]>([]);

  const handleMaquina = (selectedMaquina: string) => {
    setMaquina(selectedMaquina);
  };

  const handleStartDate = (selectedStartDate: string) => {
    setStartDate(selectedStartDate);
  };

  const handleEndDate = (selectedEndDate: string) => {
    setEndDate(selectedEndDate);
  };

  const handleSubmit = () => {
    setAgenda([...agenda, { maquina, startDate, endDate }]);
  };

  const deleteAgenda = (index: number) => {
    const agendaData = agenda;
    const agendaFiltrada = agendaData.filter((_, i) => i !== index);
    setAgenda(agendaFiltrada);
  };

  React.useEffect(() => {
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
    console.log(props.servicio);
    fetchData(props.servicio);
  });

  return (
    <>
      <Modal open={props.open} onClose={props.handleClose}>
        <Box className={style.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agendar Cita
          </Typography>

          <Box className={style.innerBox}>
            <Grid
              container
              spacing={2}
              sx={{
                md: 4,
              }}
            >
              <Grid item>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={data}
                  onChange={(evt, selected) => handleMaquina(selected.value)}
                  sx={{ width: "250px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Material de impresión" />
                  )}
                />
              </Grid>

              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    sx={{ paddingTop: "0px" }}
                    components={["DateTimePicker"]}
                  >
                    <DateTimePicker
                      label="Hora de inicio"
                      onChange={(value) => handleStartDate(value as string)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>

              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    sx={{ paddingTop: "0px" }}
                    components={["DateTimePicker"]}
                  >
                    <DateTimePicker
                      label="Hora de finalización"
                      onChange={(value) => handleEndDate(value as string)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <Button
                  sx={{ marginTop: "10px" }}
                  variant="contained"
                  onClick={handleSubmit}
                >
                  <AddIcon />
                </Button>
              </Grid>
            </Grid>

            {agenda.length > 0 && (
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Maquina</TableCell>
                      <TableCell align="right">Fecha de Inicio</TableCell>
                      <TableCell align="right">Fecha de Final</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {agenda.map((agendaRow, agendaIndex) => (
                      <TableRow
                        key={agendaIndex}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {JSON.stringify(agendaRow.maquina)}
                        </TableCell>
                        <TableCell align="right">
                          {JSON.stringify(agendaRow.startDate)}
                        </TableCell>
                        <TableCell align="right">
                          {JSON.stringify(agendaRow.endDate)}
                        </TableCell>
                        <TableCell align="right">
                          <Button
                            color="error"
                            variant="contained"
                            onClick={() => deleteAgenda(agendaIndex)}
                          >
                            Quitar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
            <Button sx={{ marginTop: "10px" }} variant="contained">
              Agendar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
