/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { toast } from "react-toastify";

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

export default function ForgotPassword() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(target));
    try {
      const res = await fetch("http://localhost:8000/api/user/resetpassword", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        return toast("Error en la petición", { type: "error" });
      }

      const resData = await res.json();
      console.log(resData);
      //todo messages
    } catch (error: any) {
      toast(error.message, { type: "error" });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Box className={style.outerbox}>
          <Box className={style.innerbox}>
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
          <Typography
            component="h1"
            variant="body2"
            textAlign={"justify"}
            fontSize={15}
          >
            Ingresa tu correo electrónico asociado a tu cuenta para recuperar tu
            contraseña vía email
          </Typography>

          <TextField
            margin="normal"
            required
            id="recoveryEmail"
            label="Correo Electrónico"
            name="email"
            fullWidth
            autoFocus
            size="medium"
          />
          <Button type="submit" fullWidth variant="contained">
            Enviar correo de recuperación
          </Button>
          <Button component={Link} to="/sign-up" className="link">
            ¿No tienes cuenta?
          </Button>
        </Box>
      </form>
      <Copyright />
    </Container>
  );
}
