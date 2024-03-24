import { Autocomplete } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MetalPlotter() {
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
          (material) => material.description_material === "Metal Plotter"
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
        width: "100vw",
        height: "100vh",
        typography: "body1",
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
        renderInput={(params) => <TextField {...params} label="Dato 2" />}
      />
    </Box>
  );
}
