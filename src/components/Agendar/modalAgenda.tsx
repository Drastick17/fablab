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
import { toast } from "react-toastify";

interface Agenda {
  idMaquina: number[];
  startDate: string;
  endDate: string;
}

export function ModalAgendar(props) {
  const [data, setData] = React.useState([{ value: 0, label: "Cargando..." }]);
  const [dataSchedule, setDataSchedule] = React.useState<any>(null);
  const [selectedMaquina, setSelectedMaquina] = React.useState("");
  const [selectedIdMaquina, setSelectedIdMaquina] = React.useState(-1);
  const [maquina, setMaquina] = React.useState<string[]>([]);
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [agenda, setAgenda] = React.useState<Agenda[]>([]);
  const [idMaquina, setIdMaquina] = React.useState<number[]>([]);

  const handleSelectedMaquina = (selectedMaq: string) => {
    setSelectedMaquina(selectedMaq);
  };

  const handleSelectedIdMaquina = (selectedId: number) => {
    setSelectedIdMaquina(selectedId);
  };

  const handleIdMaquina = (idSelectedMaquina: number) => {
    if (!idMaquina.includes(idSelectedMaquina)) {
      setIdMaquina((prevState) => prevState.concat(idSelectedMaquina));
    }
    console.log(idMaquina);
  };

  const handleNameMaquinas = (selectedMaquina: string) => {
    if (!maquina.includes(selectedMaquina)) {
      setMaquina((prevState) => prevState.concat(selectedMaquina));
    }
    console.log(maquina);
  };

  const handleIdMaquinaByArray = (idSelectedMaquina: number[]) => {
    const uniqueIds = idSelectedMaquina.filter((id) => !idMaquina.includes(id));
    setIdMaquina((prevState) => [...new Set([...prevState, ...uniqueIds])]);
    console.log(idMaquina);
  };

  const handleNameMaquinasByArray = (selectedMaquina: string[]) => {
    const uniqueNames = selectedMaquina.filter(
      (name) => !maquina.includes(name)
    );
    setMaquina((prevState) => [...new Set([...prevState, ...uniqueNames])]);

    console.log(maquina);
  };

  const handleStartDate = (selectedStartDate: string) => {
    setStartDate((prevState) =>
      prevState.length === 0
        ? [selectedStartDate]
        : [...prevState, selectedStartDate]
    );
  };

  const handleEndDate = (selectedEndDate: string) => {
    setEndDate((prevState) =>
      prevState.length === 0
        ? [selectedEndDate]
        : [...prevState, selectedEndDate]
    );
  };

  const handleAgenda = async (idSchedule: number) => {
    console.log(idMaquina);
    console.log(startDate);
    console.log(endDate);
    setAgenda([...agenda, { idMaquina, startDate, endDate }]);
    console.log(agenda);
    // try {
    //   const res = await fetch(
    //     `http://localhost:8000/api/schedule/${idSchedule}`,
    //     {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         ...agenda,
    //       }),
    //     }
    //   );
    //   if (!res.ok) {
    //     return toast("Error en la petición", { type: "error" });
    //   }
    //   console.log(agenda);
    // } catch (error) {
    //   console.error("Error al obtener datos:", error);
    // }
  };

  const deleteMaquinas = (index: number) => {
    const maquinaData = maquina;
    const maquinaFiltrada = maquinaData.filter((_, i) => i !== index);

    const maquinaIdData = idMaquina;
    const maquinaIdFiltrada = maquinaIdData.splice(index, 1);
    handleIdMaquinaByArray(maquinaIdFiltrada);
    handleNameMaquinasByArray(maquinaFiltrada);
  };

  React.useEffect(() => {
    const fetchDataSchedule = async (idSchedule: number) => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/schedule/get-one/${idSchedule}`
        );
        const resData = await res.json();

        setDataSchedule(resData.schedule);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchDataSchedule(props.id);
  }, []);

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
            value: equipo.Id_Equipment,
            label: equipo.Name_Equipment,
          };
        });
        console.log(dataAutocomplete);
        setData(dataAutocomplete);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData(props.servicio);
  }, []);

  return (
    <>
      <Modal open={props.open} onClose={props.handleClose}>
        <Box className={style.modal} sx={{ borderRadius: "20px" }}>
          {dataSchedule && (
            <Box className={style.innerBox}>
              <Typography id="modal-modal-title" variant="body1">
                Pedido: {dataSchedule?.id}
              </Typography>
              <Typography id="modal-modal-title" variant="body1">
                Servicio: {dataSchedule?.service_type}
              </Typography>
              <Typography id="modal-modal-title" variant="body1">
                Notas: {dataSchedule?.note}
              </Typography>
              <Typography id="modal-modal-title" variant="body1">
                Estado: {dataSchedule?.status}
              </Typography>
            </Box>
          )}

          <Box className={style.innerBox}>
            {/* Datetime picker */}
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

            {/* Datetime picker */}
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
          </Box>
          {/* Box de maquinas, botones y datetime pickers */}
          <Box className={style.innerBox}>
            <Typography id="modal-modal-title" variant="body1">
              Asignar Maquina(s)
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                md: 4,
              }}
            >
              {/* Autocomplete maquinas */}
              <Grid item>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={data}
                  onChange={(evt, selected) => {
                    console.log(evt);
                    handleSelectedIdMaquina(selected?.value);
                    handleSelectedMaquina(selected?.label);
                  }}
                  sx={{ width: "250px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Material de impresión" />
                  )}
                />
              </Grid>

              {/*Boton agregar */}
              <Grid item>
                <Button
                  sx={{ marginTop: "10px" }}
                  variant="contained"
                  onClick={() => {
                    handleNameMaquinas(selectedMaquina);
                    handleIdMaquina(selectedIdMaquina);
                  }}
                >
                  <AddIcon />
                </Button>
              </Grid>
            </Grid>

            {selectedMaquina.length > 0 && (
              /*Agendar maquinas */
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
                    {maquina.map((maquinaRow, maquinaIndex) => (
                      <TableRow
                        key={maquinaIndex}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {JSON.stringify(maquinaRow)}
                        </TableCell>

                        <TableCell align="right">
                          <Button
                            color="error"
                            variant="contained"
                            onClick={() => deleteMaquinas(maquinaIndex)}
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
            <Button
              sx={{ marginTop: "10px" }}
              variant="contained"
              onClick={() => handleAgenda(dataSchedule.id)}
            >
              Agendar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
