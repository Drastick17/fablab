import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import style from "./styleServices.module.css";
import { gridPrinterAnimation } from "./animationPrinter.module";
import { useEffect, useState } from "react";

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
        transition={{ ...gridPrinterAnimation.transition, delay: props.delay }}
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
  const [animationComplete, setAnimationComplete] = useState(false);
  useEffect(() => {
    // Marcar la animación como completa cuando el componente se monta
    setAnimationComplete(true);
  }, []); // El segundo argumento [] asegura que esto solo se ejecute una vez, al montar el componente

  return (
    <motion.div
      className="content"
      style={{
        opacity: 0, // Opacidad inicial en 0
      }}
      animate={{
        backgroundColor: "red",
        originX: 0,
        originY: 0,
        opacity: animationComplete ? 1 : 0,
        y: animationComplete ? 0 : 20,
      }}
      transition={{ duration: 10 }}
    >
      <Container className={style.mainServices} component="main" maxWidth="xl">
        <Grid container spacing={3}>
          {printers.map((printer, i) => (
            <Grid item key={i} xs={12} md={6} lg={4}>
              <PrinterCreation delay={0.06 * i} {...printer} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
}
