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
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "../../../validations/changePasswordSchema";

import { toast } from "react-toastify";

import style from "../style.module.css";
import { UserContext } from "../../../store/UserContext";

type Inputs = {
  password: string;
  newPassword: string;
  confirmPassword: string;
};

export default function passwordChange() {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //       password: data.get("password"),
  //       newPassword: data.get("newPassword"),
  //       confirmPassword: data.get("confirmPassword"),
  //   });
  // };
  const { user } = React.useContext(UserContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(changePasswordSchema),
  });

  console.log(errors);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      const res = await fetch(
        `http://localhost:8000/api/user/changePassword/${user?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        return toast("Error en la petición", { type: "error" });
      }
    } catch (error: any) {
      toast(error.message, { type: "error" });
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ minWidth: "80vw" }}>
      <CssBaseline />
      <Box
        sx={{
          color: "black",
          p: 4,
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
          Cambiar contraseña
        </Typography>
        <Typography variant="body1" gutterBottom>
          Escoge una contraseña única para mantener segura tu cuenta
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          label="Contraseña Actual"
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password")}
        />
        {errors.password?.message && (
          <p className={style.p}>{errors.password?.message}</p>
        )}

        <TextField
          margin="normal"
          required
          fullWidth
          label="Nueva Contraseña"
          type="password"
          id="newPassword"
          autoComplete="current-password"
          {...register("newPassword")}
        />
        {errors.newPassword?.message && (
          <p className={style.p}>{errors.newPassword?.message}</p>
        )}

        <TextField
          margin="normal"
          required
          fullWidth
          label="Confirmar Nueva Contraseña"
          type="password"
          id="confirmPassword"
          autoComplete="current-password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <p className={style.p}>{errors.confirmPassword?.message}</p>
        )}

        <Typography variant="body2" gutterBottom>
          Cambiar tu contraseña cerrará tu sesión en tu dispositivo. Tendrás que
          volver a iniciar sesion con tu nueva contraseña para acceder a tu
          cuenta.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ mt: 3, mb: 2 }}
        >
          CAMBIAR CONTRASEÑA
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          ¿Tienes problemas? Contáctanos en Soporte al cliente.
        </Typography>
      </Box>
    </Container>
  );
}
