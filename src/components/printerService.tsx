import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import style from "./styleServices.module.css";

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
  {
    nombre: "printer2",
    descripcion:
      "Area de trabajo: 14x14x14cm Materiales: PLA, TPU, PET \n Formato de archivo: STL/OBJ",
  },
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
      <Grid
        item
        xs={12}
        md={4}
        lg={4}
        className={style.GridPrincipal}
        component={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: props.delay }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Item className={style.ItemPrinter}>
          <Grid item xs={12} className={style.GridPrintersImg}>
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container className={style.mainServices} component="main" maxWidth="xl">
        <Grid container columns={{ xs: 4, md: 12 }} spacing={3}>
          {printers.map((printer, i) => (
            <PrinterCreation key={i} delay={0.06 * i} {...printer} />
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
}
