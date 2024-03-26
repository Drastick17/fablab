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

export function boxDatos() {
  const [data, setData] = React.useState([
    { value: "Cargando...", label: "Cargando..." },
  ]);

  React.useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const resultado = await fetch(
          `http://localhost:8000/api/schedule/${id}`
        );
        const resultadoData = await resultado.json();
        console.log(resultadoData);
        setData(resultadoData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData(1);
  }, []);

  return <></>;
}
