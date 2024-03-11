import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import style from "./style2.module.css";

export default function Services() {
  return (
    <Container className={style.mainServices} component="main" maxWidth="xl">
      <Grid container spacing={1} className={style.container}>
        <Grid item xs={12} md={8}>
          <Grid
            item
            xs={12}
            md={8}
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
                  Impresoras 3D
                </Typography>
                <img
                  src="./public/img/impresora3D.jpg"
                  alt=""
                  className={style.imgService}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              marginBottom: "2rem",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Grid
              item
              xs={12}
              md={3}
              sx={{ marginRight: "2%", marginBottom: "2%" }}
            >
              <Card sx={{ display: "flex", backgroundColor: "#E6E6E6" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" paragraph>
                    Formatos Aceptados
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
            <Grid
              item
              xs={12}
              md={3}
              sx={{ marginRight: "2%", marginBottom: "2%" }}
            >
              <Card sx={{ display: "flex", backgroundColor: "#E6E6E6" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" paragraph>
                    Formatos Aceptados
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
            <Grid
              item
              xs={12}
              md={3}
              sx={{ marginRight: "2%", marginBottom: "2%" }}
            >
              <Card sx={{ display: "flex", backgroundColor: "#E6E6E6" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" paragraph>
                    Formatos Aceptados
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
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} className={style.paddingContainer}>
          <Card sx={{ display: "flex", backgroundColor: "#E6E6E6" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="subtitle1" paragraph>
                Imprime sobre elementos rígidos planos y circulares. Impresión a
                full color y de alta velocidad. <br /> Tecnología de
                impresión:Deposición de material fundido. <br /> Tipo de
                material: PLA.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#DC2137",
                }}
                className={style.Button}
              >
                Agendar
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={1} className={style.container}>
        <Grid item xs={12} md={4} className={style.paddingContainer}>
          <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
            <Card sx={{ display: "flex", backgroundColor: "#E6E6E6" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="subtitle1" paragraph>
                  Formatos Aceptados
                </Typography>
                <ThreeDRotationIcon />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ display: "flex", backgroundColor: "#E6E6E6" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="subtitle1" paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos tempora dolorem non, explicabo nisi ullam repellat
                  sapiente, alias quia consequuntur qui enim vero eligendi
                  provident adipisci ducimus est quibusdam rem.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#DC2137",
                  }}
                  className={style.Button}
                >
                  Agendar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ flex: 1 }}
          className={style.paddingContainer}
        >
          <Card
            sx={{ display: "flex", backgroundColor: "#E6E6E6" }}
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
                CNC y Laser
              </Typography>
              <img
                src="./public/img/impresora3D.jpg"
                alt=""
                className={style.imgService}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={1} className={style.container}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ flex: 1 }}
          className={style.paddingContainer}
        >
          <Card
            sx={{ display: "flex", backgroundColor: "#E6E6E6" }}
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
                Inyección de tinta y UV
              </Typography>
              <img
                src="./public/img/impresora3D.jpg"
                alt=""
                className={style.imgService}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} className={style.paddingContainer}>
          <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
            <Card sx={{ display: "flex", backgroundColor: "#E6E6E6" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="subtitle1" paragraph>
                  Formatos Aceptados
                </Typography>
                <ThreeDRotationIcon />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ display: "flex", backgroundColor: "#E6E6E6" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="subtitle1" paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos tempora dolorem non, explicabo nisi ullam repellat
                  sapiente, alias quia consequuntur qui enim vero eligendi
                  provident adipisci ducimus est quibusdam rem.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#DC2137",
                  }}
                  className={style.Button}
                >
                  Agendar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
