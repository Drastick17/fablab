import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
// import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import style from "./style.module.css";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link className="link" color="inherit" to="https://www.ucacue.edu.ec/">
        {"© "}
        {new Date().getFullYear()} | Universidad Católica de Cuenca
      </Link>
    </Typography>
  );
}

const handlePasswordRecovery = () => {
  window.location.href = "/password-recovery";
};

export default function EmailVerification() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container
      className={style.mainEmailVerification}
      component="main"
      maxWidth="xs"
    >
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <img
                className={style.logoSignInFablab}
                src="../public/img/logo.jpg"
              ></img>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "left" }}>
              <img
                className={style.logoSignInUcacue}
                src="../public/img/UcacueLogo.jpg"
              ></img>
            </Grid>
          </Grid>
        </Box>

        <Typography component="h1" variant="h5">
          Recuperación de contraseña
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography
            component="h1"
            variant="body2"
            sx={{ textAlign: "justify", fontSize: "12px" }}
          >
            Ingresa tu correo electrónico asociado a tu cuenta para recuperar tu
            contraseña vía email
          </Typography>

          <TextField
            className={style.innerRegisterFont}
            margin="normal"
            required
            id="recoveryEmail"
            label="Correo Electrónico"
            name="recoveryEmail"
            fullWidth
            autoFocus
            size="small"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handlePasswordRecovery}
          >
            Enviar correo
          </Button>
          <Grid container>
            <Grid item>
              <Link className="link" to="/">
                Regresar
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 4, mb: 1 }} />
      </Box>
    </Container>
  );
}
