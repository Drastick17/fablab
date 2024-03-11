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
                Service 3D
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
                Service 3D
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
                Service 3D
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
