import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import style from "./styleServices.module.css";
import { gridPrinterAnimation } from "./animationPrinter.module";

const printers = [
  {
    nombre: "printer1",
    descripcion: "Impresora 3D",
  },
  {
    nombre: "printer2",
    descripcion:
      "Area de trabajo: 14x14x14cm Materiales: PLA, TPU, PET \n Formato de archivo: STL/OBJ",
  },
  { nombre: "printer2", descripcion: "Impresora 3D Pequeña" },
  { nombre: "printer3", descripcion: "Impresora 3D Mediana" },
  { nombre: "printer3", descripcion: "Impresora 3D Rapida" },
  { nombre: "printer3", descripcion: "Impresora 3D Lenta" },
];

function PrinterCreation(props: any) {
  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        className={style.GridPrinter}
        component={motion.div}
        item
        {...gridPrinterAnimation}
      >
        <Grid item xs={6} className={style.GridPrintersImg}>
          <img
            src={`../public/img/printers/${props.nombre}.jpg`}
            alt=""
            className={style.imgService}
          />
        </Grid>
        <Grid item xs={6} className={style.GridPrintersText}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            style={{ height: "95%" }}
          >
            <Grid item>
              <Typography component="h1" variant="h6">
                {props.nombre}
              </Typography>
              <Typography component="h1" variant="body1">
                {props.descripcion}
              </Typography>
            </Grid>
            <Grid item>
              <Link className="link" to="#">
                Agenda aquí
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default function Services() {
  return (
    <div style={{ position: "relative" }}>
      <motion.div
        className={style.BackgroundAnimation1}
        animate={{
          width: ["100%", "0%"],
          transitionEnd: {
            display: "none",
          },
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />

      <motion.div
        className={style.BackgroundAnimation2}
        animate={{
          transitionEnd: {
            display: "none",
          },
          width: ["90%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />

      <motion.div
        className={style.BackgroundAnimation3}
        animate={{
          transitionEnd: {
            display: "none",
          },
          width: ["80%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />

      <Container className={style.mainServices} component="main" maxWidth="xl">
        <Grid container spacing={3}>
          {printers.map((printer, i) => (
            <Grid item key={i} xs={12} md={6} lg={4}>
              <PrinterCreation delay={1.5 + 0.06 * i} {...printer} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
