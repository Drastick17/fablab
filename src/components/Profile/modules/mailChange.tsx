import * as React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useForm, SubmitHandler } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { changeEmailSchema } from "../../../validations/changeEmailSchema";

import style from "../style.module.css"

type Inputs = {
  email: string
};

export default function mailChange() {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email")
  //   });
  // };

  const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>({
    resolver: zodResolver(changeEmailSchema)
  })

  console.log(errors)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <Container component="main" maxWidth="xs" sx={{ minWidth: "80vw" }}>
      <CssBaseline />
      <Box
        sx={{
          color: "black",
          p: 4,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 1,
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Typography variant="h4" gutterBottom>
          Cambiar correo
        </Typography>
        <Typography variant="body1" gutterBottom>
          Cambia la dirección de correo que utilizas para acceder y recibir
          información de FabLab
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          autoComplete="email"
          autoFocus
          {...register('email')}
        />
        {errors.email?.message && <p className={style.p}>{errors.email?.message}</p>}

        <Typography variant="body2" gutterBottom>
          Cuando pulses sobre el botón a continuación se te rediccionara a un formulario donde debes colocar el codigo de verificacion de tu correo.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          
          fullWidth
          type="submit"
          sx={{ mt: 3, mb: 2 }}
        >
          CAMBIAR CORREO
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          ¿Tienes problemas? Contáctanos en Soporte al cliente.
        </Typography>
      </Box>
    </Container>
  );
}
