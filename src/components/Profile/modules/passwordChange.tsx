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

const correo = "prueba@gmail.com";

export default function passwordChange() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        password: data.get("password"),
        newPassword: data.get("newPassword"),
        confirmPassword: data.get("confirmPassword"),
    });
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
        onSubmit={handleSubmit}
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
          name="password"
          label="Contraseña Actual"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="newPassword"
          label="Nueva Contraseña"
          type="password"
          id="newPassword"
          autoComplete="current-password"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirmar Nueva Contraseña"
          type="password"
          id="confirmPassword"
          autoComplete="current-password"
        />

        <Typography variant="body2" gutterBottom>
          Cambiar tu contraseña cerrará tu sesión tu dispositivo. Tendrás
          que volver a iniciar sesion con tu nueva contraseña para acceder a tu cuenta.
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
