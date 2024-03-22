import { Autocomplete } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "./style.module.css";
import { toast } from "react-toastify";

export default function Printers3D() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/material/read");
        const resData = await res.json();

        console.log(resData);
        const materialesFiltrados = resData.filter(
          (material) => material.description_material === "3D Printer"
        );
        console.log(materialesFiltrados);
        const dataAutocomplete = materialesFiltrados.map((material) => {
          return {
            value: material.name,
            label: material.name,
          };
        });
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
        options={data ? data : []}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Maquina" />}
      />
    </Box>
  );
}
