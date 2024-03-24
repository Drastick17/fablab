import * as React from "react";
import Grid from "@mui/material/Grid";
import { Autocomplete, Box, Modal, TextField, Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import style from "./style.module.css";

export function ModalAgendar(props) {
  const [data, setData] = React.useState([
    { value: "Cargando...", label: "Cargando..." },
  ]);

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
  }, []);

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={style.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agendar Cita
          </Typography>

          <Box
            sx={{
              marginTop: "20px",
              border: "solid 1px",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <Grid
              container
              spacing={3}
              sx={{
                md: 6,
              }}
            >
              <Grid item>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={data}
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
                    <DateTimePicker label="Hora de inicio" />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>

              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker label="Hora de finalización" />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
