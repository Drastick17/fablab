import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import style from "./styleServices.module.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const printers = [
  {
    nombre: "printer1",
    descripcion: "Impresora 3D ",
  },
  { nombre: "printer2", descripcion: "Impresora 3D Grande" },
  ,
  { nombre: "printer2", descripcion: "Impresora 3D Pequeña" },
  ,
  { nombre: "printer3", descripcion: "Impresora 3D Mediana" },
  ,
  { nombre: "printer3", descripcion: "Impresora 3D Rapida" },
  ,
  { nombre: "printer3", descripcion: "Impresora 3D Lenta" },
];

function PrinterCreation(props: any) {
  return (
    <>
      <Grid item xs={12} md={4} lg={4} className={style.GridPrincipal}>
        <Item sx={{ display: "flex", minHeight: "250px" }}>
          <Grid item xs={12} className={style.GridPrintssssssersImg}>
            <img
              src={`../public/img/printers/${props.nombre}.jpg`}
              alt=""
              className={style.imgService}
            />
          </Grid>
          <Grid
            className={style.GridPrintersText}
            sx={{
              display: "grid",
              flexBasis: "50%",
              justifyContent: "start",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h6">
              {props.nombre}
            </Typography>
            <Typography component="h1" variant="body1">
              {props.descripcion}
            </Typography>
            <Link className="link" to="/">
              Agenda aquí
            </Link>
          </Grid>
        </Item>
      </Grid>
    </>
  );
}

export default function Services() {
  return (
    <Container className={style.mainServices} component="main" maxWidth="xl">
      <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
        {printers.map((printer) => (
          <PrinterCreation {...printer} />
        ))}
      </Grid>
    </Container>
  );
}
