import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import style from "./style.module.css";
import * as animation from "./animationPrinter.module";

const printers = [
  {
    nombre: "printer1",
    descripcion: "Impresora 3D",
  },
  {
    nombre: "printer2",
    descripcion:
      "Area de trabajo: 14x14x14cm Materiales: PLA, TPU, PET Formato de archivo: STL/OBJ",
  },
  { nombre: "printer2", descripcion: "Impresora 3D Pequeña" },
  { nombre: "printer3", descripcion: "Impresora 3D Mediana" },
  { nombre: "printer3", descripcion: "Impresora 3D Rapida" },
  { nombre: "printer3", descripcion: "Impresora 3D Lenta" },
];

function PrinterCreation(props: any) {
  const { serviceType } = useParams();
  console.log(serviceType);
  return (
    <>
      <Link to="/" className="link">
        <Grid
          container
          spacing={1}
          className={style.GridPrinter}
          component={motion.div}
          item
          {...animation.GridPrinterAnimation}
        >
          <Grid item xs={6} className={style.GridPrintersImg}>
            <img
              src={`../public/img/printers/${props.nombre}.jpg`}
              alt=""
              className={style.imgService}
            />
          </Grid>
          <Grid item xs={6} className={style.GridPrintersText}>
            <Grid container direction="column" justifyContent="space-between">
              <Grid item>
                <Typography component="h1" variant="h6">
                  {props.nombre}
                </Typography>
                <Typography component="h1" variant="body1">
                  {props.descripcion}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Link>
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
