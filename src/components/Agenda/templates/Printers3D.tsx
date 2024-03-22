import { Autocomplete } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "./style.module.css";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function Printers3D() {
  const { type } = useParams(); // esto toma el valor de la URL, donde esta :type ponle lo que tu quieras y esto te lo regresa


  console.log(type);

  const [data, setData] = React.useState([
    { value: "Sin seleccionar", label: "Sin seleccionar" },
  ]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/material/read");
        const resData = await res.json();
        const dataAutocomplete = resData.map((material) => {
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
        width: "100vw",
        height: "100vh",
        typography: "body1",
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={data}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Maquina" />}
      />
    </Box>
  );
}
