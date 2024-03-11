import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import * as React from "react";
// import Link from '@mui/material/Link';
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
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



const handleEmailVerification = () => {
  window.location.href = "/email-verification";
};

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
      <Container className={style.mainRegister} component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <img
                  className={style.logoRegisterFablab}
                  src="../public/img/logo.jpg"
                ></img>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "left" }}>
                <img
                  className={style.logoRegisterUcacue}
                  src="../public/img/UcacueLogo.jpg"
                ></img>
              </Grid>
            </Grid>
          </Box>

          <Typography component="h1" variant="h6">
            Regístrate
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  className={style.innerRegisterFont}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Cédula"
                  autoFocus
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className={style.innerRegisterFont}
                  required
                  fullWidth
                  id="lastName"
                  label="Nombres"
                  name="lastName"
                  autoComplete="family-name"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={style.innerRegisterFont}
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={style.innerRegisterFont}
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  size="small"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Institución
                  </FormLabel>
                  <RadioGroup
                    className={style.radioButtonGroupUsuario}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ucacue"
                      control={<Radio />}
                      label="Estudiante UCACUE"
                    />
                    <FormControlLabel
                      value="OtraUniversidad"
                      control={<Radio />}
                      label="Estudiante Universidad Externa"
                    />
                    <FormControlLabel
                      value="Externo"
                      control={<Radio />}
                      label="No estudiante"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <FormControlLabel
                className={style.checkBoxUsuario}
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Quiero recibir notificaciones, promociones y noticias a mi Email"
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
              onClick={handleEmailVerification}
            >
              Crear Cuenta
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link className="link" to="/">
                  ¿Ya tienes una cuenta? Inicia sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2 }} />
      </Container>
  );
}
