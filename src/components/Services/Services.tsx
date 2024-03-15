import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Impresoras 3D",
    image: "impresora3D",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur assumenda vel reprehenderit eligendi consequatur veritatis excepturi veniam ea sequi! Nulla, aliquam obcaecati. Quasi cum asperiores totam similique illo, aut temporibus.",
    isReversed: false,
  },
  {
    name: "CNC y Laser",
    image: "CNC_ESCRITORIO",
    description:
      "Imprime sobre elementos rígidos planos y circulares. Impresión a full color y de alta velocidad.",
    isReversed: true,
  },
  {
    name: "Inyeccion de tinta e impresión UV",
    image: "inyeccionTinta",
    description:
      "Imprime sobre elementos rígidos planos y circulares. Impresión a full color y de alta velocidad.",
    isReversed: false,
  },
];

function CardNameImgCreation(props: any) {
  return (
    <>
      <Grid
        item
        xs={12}
        md={7}
        sx={{ flex: 1 }}
        className={style.paddingContainer}
      >
        <Card
          sx={{ display: "flex", boxShadow: "none" }}
          className={style.cardImg}
        >
          <CardContent sx={{ flex: 1 }}>
            <Typography
              variant="subtitle1"
              paragraph
              sx={{
                fontSize: "2.3rem",
              }}
            >
              {props.name}
            </Typography>
            <img
              src={`../public/img/${props.image}.jpg`}
              alt=""
              className={style.imgService}
            />
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

function CardCharacteristicsCreation({ title }: { title: string }) {
  return (
    <>
      <Grid
        item
        xs={12}
        md={3.7}
        sx={{ marginRight: "2%", marginBottom: "2%" }}
      >
        <Card sx={{ display: "flex", backgroundColor: "#E6E6E6" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="subtitle1" paragraph>
              {title}
            </Typography>

            <img
              src="./public/img/icons/stl-webp-icon.webp"
              alt=""
              className={style.imgIcon}
            />
            <img
              src="./public/img/icons/obj-svg-icon.svg"
              alt=""
              className={style.imgIcon}
            />
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

function ServicesCreation(props:any) {
  return (
    <>
      {!props.isReversed ? <CardNameImgCreation {...props} /> : null}
      <Grid
        item
        xs={12}
        md={5}
        className={style.paddingContainer}
        sx={{ display: "grid", alignItems: "center" }}
      >
        <Card
          sx={{
            display: "flex",
            backgroundColor: "#E6E6E6",
            padding: "3.5%",
          }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" component="h2" paragraph>
              {props.description}
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#DC2137",
              }}
              component={Link}
              to="/services/:serviceType"
              className={style.Button}
            >
              Agendar
            </Button>
          </CardContent>
        </Card>
      </Grid>
      {props.isReversed ? <CardNameImgCreation {...props} /> : null}
      <CardCharacteristicsCreation title="Formatos Aceptados" {...props} />
      <CardCharacteristicsCreation title="Materiales" {...props} />
      <CardCharacteristicsCreation title="Calidades" {...props} />
    </>
  );
}

export default function Services() {
  return (
    <Container className={style.mainServices} component="main" maxWidth="xl">
      <motion.div
        animate={{ x: [80, 0], opacity: [0, 1] }}
        transition={{
          type: "spring",
          bounce: 1,
          stiffness: 100,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
      >
        <Grid
          container
          spacing={1}
          className={style.container}
          component={motion.div}
        >
          {services.map((service, i) => (
            <ServicesCreation key={i} delay={1.5 + 0.06 * i} {...service} />
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
