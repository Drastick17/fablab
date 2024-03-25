/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Link from '@mui/material/Link';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./style.module.css";

import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      <Link className="link" color="inherit" to="https://www.ucacue.edu.ec/">
        {"© "}
        {new Date().getFullYear()} | Universidad Católica de Cuenca
      </Link>
    </Typography>
  );
}

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [phone, setPhone] = useState("+593");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const target = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(target));
    const { Types: type, phone, ConfirmPassword, ...user } = data;
    const phoneNumber = String(phone).replace("+", "").replaceAll(" ", "");
    try {
      if (ConfirmPassword !== data.Password) {
        return toast("Las contraseñas no son iguales", { type: "error" });
      }

      const res = await fetch("http://localhost:8000/api/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...user,
          Phone: "phoneNumber",
          Types: [type],
        }),
      });

      if (!res.ok) {
        return toast("Error en la petición", { type: "error" });
      }

      const resData = await res.json();
      if (resData.id) {
        navigate(`/email-verification/${resData.id}`);
        return toast(
          `Porfavor revise el correo que enviamos a: ${user.Email}`,
          { type: "error" }
        );
      } else {
        return toast("Error al crear el usuario", { type: "error" });
      }
    } catch (error: any) {
      toast(error.message, { type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xl">
      <form onSubmit={handleSubmit}>
        <Box
          className={style.outerBox}
          sx={{
            columnGap: 5,
            "@media (min-width: 780px)": {
              gridTemplateColumns: "1fr 1fr",
            },
          }}
        >
          <Box className={style.innerBox}>
            <img
              className={style.logo}
              src="/img/logo.jpg"
              alt=""
              loading="lazy"
            />
            <img
              className={style.logo}
              src="/img/UcacueLogo.jpg"
              alt=""
              loading="lazy"
            />
          </Box>

          <Typography sx={{ gridColumn: "1/-1" }} component="h1" variant="h6">
            Regístrate
          </Typography>
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              gap: "1rem",
            }}
          >
            <TextField
              name="CI"
              required
              fullWidth
              id="CI"
              label="Cédula"
              autoFocus
              size="small"
              //inputProps={{ minLength: 10 }}
            />
            <TextField
              required
              fullWidth
              id="Name"
              label="Nombres"
              name="Name"
              autoComplete="family-name"
              size="small"
            />
            <MuiTelInput
              name="Phone"
              id="phone"
              onChange={(value) => {
                setPhone(value);
              }}
              value={phone}
              //inputProps={{ minLength: 13 }}
            />
            <TextField
              required
              fullWidth
              label="Correo"
              type="email"
              name="Email"
              id="email"
              size="small"
            />
            <TextField
              required
              fullWidth
              name="Password"
              label="Contraseña"
              type="Password"
              id="password"
              autoComplete="new-password"
              size="small"
              //inputProps={{ minLength: 8 }}
            />
            <TextField
              required
              fullWidth
              name="ConfirmPassword"
              label="Confirmar contraseña"
              type="Password"
              id="passwordConfirm"
              autoComplete="new-passwordconfirm"
              size="small"
              //inputProps={{ minLength: 8 }}
            />
          </div>
          <FormControl>
            <FormLabel id="types">Institución</FormLabel>
            <RadioGroup
              defaultValue="OTRO"
              aria-labelledby="types"
              name="Types"
            >
              <FormControlLabel
                value="ESTUDIANTE"
                control={<Radio />}
                label="Miembro UCACUE"
              />
              <FormControlLabel
                value="MIEMBRO"
                control={<Radio />}
                label="Estudiante UCACUE"
              />
              <FormControlLabel
                value="EXTERNO"
                control={<Radio />}
                label="Estudiante Universidad Externa"
              />
              <FormControlLabel
                value="OTRO"
                control={<Radio />}
                label="Publico general"
              />
            </RadioGroup>
          </FormControl>
          <LoadingButton
            sx={{ gridColumn: "1/-1" }}
            size="small"
            loading={loading}
            variant="contained"
            type="submit"
            fullWidth
          >
            Crear cuenta
          </LoadingButton>
          <Button
            sx={{ gridColumn: "1/-1" }}
            component={Link}
            to="/"
            className="link"
          >
            ¿Ya tienes una cuenta? Inicia sesión
          </Button>
        </Box>
      </form>
      <Copyright />
    </Container>
  );
}
