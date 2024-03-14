import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import style from "./style.module.css";
import * as animation from "./animationPrinter.module";

const printers = [
  {
    id: "printer1",
    nombre: "Impresora 3D FDM",
    areaTrabajo: "14x14x14cm",
    materiales: "PLA, TPU, PET",
    formato: "STL/OBJ",
  },
  {
    id: "printer2",
    nombre: "Impresora 3D DLP",
    areaTrabajo: "14x14x14cm",
    materiales: "PLA, TPU, PET",
    formato: "STL/OBJ",
  },
  {
    id: "printer3",
    nombre: "Impresora 3D SLS",
    areaTrabajo: "14x14x14cm",
    materiales: "PLA, TPU, PET",
    formato: "STL/OBJ",
  },
  {
    id: "printer1",
    nombre: "Impresora 3D de Resina: SLA",
    areaTrabajo: "14x14x14cm",
    materiales: "PLA, TPU, PET",
    formato: "STL/OBJ",
  },
  {
    id: "printer2",
    nombre: "Impresora 3D por Estereolitografía (SLA)",
    areaTrabajo: "14x14x14cm",
    materiales: "PLA, TPU, PET",
    formato: "STL/OBJ",
  },
  {
    id: "printer3",
    nombre: " Impresora Modelado por deposición fundida",
    areaTrabajo: "14x14x14cm",
    materiales: "PLA, TPU, PET",
    formato: "STL/OBJ",
  },
];

function PrinterCreation(props: any) {
  const { serviceType } = useParams();
  console.log(serviceType);
  return (
    <>
      <Grid
        container
        spacing={1}
        className={style.GridPrinter}
        component={motion.div}
        item
        {...animation.GridPrinterAnimation}
      >
        <Grid container className={style.GridPrinterTopRow}>
          <Grid item xs={6} md={6} lg={6} className={style.GridPrintersImg}>
            <img
              src={`../public/img/printers/${props.id}.jpg`}
              alt=""
              className={style.imgService}
            />
          </Grid>
          <Grid item xs={6} md={6} lg={6} className={style.GridPrintersText}>
            <Typography component="h1" variant="h6">
              {props.nombre}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} gap={2} className={style.GridBottomRow}>
          <Typography fontSize={12} component="p" variant="body2">
            Area de trabajo: {props.areaTrabajo}
          </Typography>
          <Typography fontSize={12} component="p" variant="body2">
            Materiales: {props.materiales}
          </Typography>
          <Typography fontSize={12} component="p" variant="body2">
            Formatos admitidos: {props.formato}
          </Typography>
          <Link to="/" className="link">
            Agenda aquí
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default function ThreeDServices() {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100vh" }}>
      <motion.div
        className={style.BackgroundAnimation1}
        {...animation.BackgroundAnimation1}
      />

      <motion.div
        className={style.BackgroundAnimation2}
        {...animation.BackgroundAnimation2}
      />

      <motion.div
        className={style.BackgroundAnimation3}
        {...animation.BackgroundAnimation3}
      />

      <Container className={style.mainServices} component="main" maxWidth="xl">
        <Grid container spacing={3}>
          {printers.map((printer, i) => (
            <Grid item key={i} xs={12} md={6} lg={4}>
              <PrinterCreation delay={2 + 0.06 * i} {...printer} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
