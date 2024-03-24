import { Autocomplete, Button, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "./style.module.css";
import { toast } from "react-toastify";

export default function Printers3D() {
  const [data, setData] = React.useState([
    { value: "Sin seleccionar", label: "Sin seleccionar" },
  ]);

  const [selectedMaterial, setSelectedMaterial] = React.useState({});

  const calidad = [
    {
      label: "Ultra baja",
    },
    {
      label: "Baja",
    },
    {
      label: "Media",
    },
    {
      label: "Alta",
    },
    {
      label: "Ultra Alta",
    },
  ];

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/material/read");
        const resData = await res.json();
        const materialesFiltrados = resData.filter(
          (material) => material.description_material === "3D Printer"
        );
        const dataAutocomplete = materialesFiltrados.map((material) => {
          return {
            value: material.name_material,
            label: material.name_material,
          };
        });
        console.log(dataAutocomplete);
        setData(dataAutocomplete);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        typography: "body1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "55px",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data}
          onChange={(evt, values) => {
            setSelectedMaterial(values);
          }}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Material de impresión" />
          )}
        />

        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={calidad}
          disabled={Object.keys(selectedMaterial).length == 0}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Calidad de impresión" />
          )}
        />
        <TextField
          id="outlined-basic"
          label="Cantidad de impresiones"
          inputProps={{ inputMode: "numeric" }}
          variant="outlined"
        />
        <Button variant="contained" color="error">
          Agendar
        </Button>
      </Box>
      <TextField
        id="filled-multiline-static"
        label="Notas"
        multiline
        rows={4}
        defaultValue="Coloca una descripción de tu impresión, recuerda que, mientrás más precisa sea, mejor será tu resultado"
        variant="filled"
        sx={{ margin: "20px" }}
      />
      <Box
        sx={{
          width: "85%",
          height: "200px",
          border: "0.5px solid",
          borderRadius: "5px",
          margin: "100px 100px 0px 100px",
        }}
      >
        <Typography
          sx={{ padding: "20px", fontSize: "0.7rem", color: "red" }}
          variant="body2"
        >
          *El agendamiento de las citas se dará de acuerdo a la disponibilidad
          de FabLab, recuerda que los horarios de atención son de 08:00 a 13:00
          y de 14:00 a 17:00. No te olvides de revisar constantemente tu correo
          electrónico, enviaremos mensajes de confirmación y agendación cuando
          se procese tu solicitud.*
        </Typography>
      </Box>
    </Box>
  );
}
