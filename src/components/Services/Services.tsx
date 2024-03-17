import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { FaFile } from "react-icons/fa6";
import Banner from "/img/Banner.jpeg";
import style from "./style.module.css";
import { Link } from "react-router-dom";

type service = {
  name: string;
  image: string;
  description: string;
  formats: string[];
};
const services: service[] = [
  {
    name: "Impresoras 3D",
    image: "impresora3D",
    description:
      "Ofrecemos servicios de impresión 3D para materializar tus diseños en objetos tangibles mediante tecnologias FDM Y SLA, desde prototipos hasta piezas finales en diferentes tipos de materiales.",
    formats: ["STL", "OBJ"],
  },
  {
    name: "Cortadora Laser",
    image: "CNC_ESCRITORIO",
    description:
      " Con nuestra cortadora láser, podemos trabajar una variedad de materiales, incluyendo MDF, acrílico, cintra, cartón y otros especificados por el cliente. ",
    formats: ["DXF", "DWG", "AI", "PDF"],
  },
  {
    name: "CNC",
    image: "CNC_ESCRITORIO",
    description:
      "Nuestro servicio de fresado CNC te permite trabajar con una amplia gama de materiales, desde MDF y acrílico hasta alucubón y maderas especificadas por el usuario.",
    formats: ["AI", "PSD", "PDF", "EPS"],
  },
  {
    name: "Inyeccion de tinta e impresión UV",
    image: "inyeccionTinta",
    description:
      "Con nuestra cama plana UV, puedes imprimir en una variedad de materiales según tus especificaciones de alto y ancho. ",
    formats: ["DXF", "DWG", "AI", "PDF"],
  },
  {
    name: "Plotter de impresion y corte",
    image: "inyeccionTinta",
    description:
      "Ofrecemos una variedad de opciones de vinilo, incluyendo regular, térmico y otros, en diferentes colores.",
    formats: ["AI", "EPS", "SVG"],
  },
  {
    name: "Grabadora laser",
    image: "inyeccionTinta",
    description:
      "Con nuestra grabadora láser, podemos trabajar con una variedad de materiales, incluyendo metal, cuero, plástico y otros.",
    formats: ["DXF", "AI", "SVG"],
  },
  {
    name: "Plotter de impresion",
    image: "inyeccionTinta",
    description:
      "Nuestro servicio de plotter de impresión ofrece opciones de impresión en diferentes formatos de hoja, incluyendo A2, A1 y A0, con opciones de color, blanco y negro, full color y escala de grises.",
    formats: ["PDF"],
  },
];
function Services() {
  return (
    <section>
      <Box
        component="article"
        justifyContent="center"
        alignItems="center"
        display="grid"
        style={{
          minHeight: 500,
          backgroundBlendMode: "darken",
          backgroundColor: "#00000044",
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <article style={{ maxWidth: "1000px" }}>
          <Typography align="center" color="#fff" variant="h1">
            Fablab
          </Typography>
          <Typography align="center" color="#fff" paragraph>
            Un Laboratorio de Fabricación Digital o FabLab es un taller que
            proporciona a sus usuarios el asesoramiento, capacitación,
            maquinaria y herramientas para la fabricación de (casi) cualquier
            cosa. Varias máquinas controladas por ordenadores permiten crear
            objetos como maquetas, prototipos, partes y piezas, etc
          </Typography>
        </article>
      </Box>
      <Typography textAlign="center" fontSize={50} marginTop="2rem">
        Servicios
      </Typography>
      <Grid
        display="flex"
        sx={{ padding: "1rem 2rem 2rem 2rem" }}
        justifyContent={"center"}
        alignItems={"center"}
        container
        spacing={5}
      >
        {services.map((service, i) => (
          <CardComponent key={i} {...service} />
        ))}
      </Grid>
    </section>
  );
}

const CardComponent = (props: service) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      xl={2}
      justifySelf={"center"}
      sx={{
        transition: "transform ease .3s",
        "&:hover": {
          transition: "transform ease .3s",
          transform: "scale(1.05)",
        },
      }}
    >
      <Card sx={{ margin: "0 auto", minHeight: 640, maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h6">{props.name}</Typography>
          <img className={style.image} src={`/img/${props.image}.jpg`} alt="" />
          <Typography
            paragraph
            sx={{ marginTop: "0.75rem" }}
            textAlign={"left"}
            minHeight="120px"
          >
            {props.description}
          </Typography>
          <article className={style.formats}>
            <Typography flexBasis={"40%"} fontSize={16} variant="h6">
              Formatos aceptados
            </Typography>
            <div className={style.icons}>
              {props.formats.map((format) => (
                <div className={style.icon}>
                  <FaFile style={{ margin: "0 auto" }} />
                  {format}
                </div>
              ))}
            </div>
          </article>
          <Button
            variant="outlined"
            color="error"
            component={Link}
            to="/"
            fullWidth
          >
            Solicitar servicio
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Services;
