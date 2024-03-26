import * as React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changeEmailSchema } from "../../../validations/changeEmailSchema";

import { toast } from "react-toastify";

import style from "../style.module.css";
import { UserContext } from "../../../store/UserContext";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link, useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
};

export default function mailChange() {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email")
  //   });
  // };

  const navigate = useNavigate();

  const { user } = React.useContext(UserContext);

  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(changeEmailSchema),
  });

  console.log(errors);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8000/api/user/changeEmail/${user?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        return toast("Error al cambiar el correo", { type: "error" });
      } else {
        toast("Codigo de verficacion enviado al nuevo correo", { type: "success" });
        navigate(`/change-email-verification/${user?.id}`);
      }
    } catch (error: any) {
      toast(error.message, { type: "error" });
    } finally {
      setLoading(false);
    }
  };

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
          {...register("email")}
        />
        {errors.email?.message && (
          <p className={style.p}>{errors.email?.message}</p>
        )}

        <Typography variant="body2" gutterBottom>
          Cuando pulses sobre el botón a continuación se te rediccionara a un
          formulario donde debes colocar el codigo de verificacion de tu correo.
        </Typography>

        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          loading={loading}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          CAMBIAR CORREO
        </LoadingButton>

        <Typography variant="body2" sx={{ mt: 2 }}>
          ¿Tienes problemas? Contáctanos en Soporte al cliente.
        </Typography>
      </Box>
    </Container>
  );
}
