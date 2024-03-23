import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import style from "./style.module.css";

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

export default function PasswordRecovery() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className={style.outerBox}>
        <Box className={style.innerBox}>
          <img className={style.logo} src="/img/logo.jpg" />
          <img className={style.logo} src="/img/UcacueLogo.jpg" />
        </Box>

        <Typography
          component="h1"
          variant="body2"
          textAlign={"justify"}
          fontSize={15}
        >
          Ingresa tu nueva contraseña
        </Typography>

        <TextField
          required
          id="password"
          label="Contraseña"
          type="password"
          name="password"
          fullWidth
          autoFocus
          size="medium"
        />

        <TextField
          required
          id="password"
          label="Confirmar contraseña"
          type="password"
          name="password"
          fullWidth
          autoFocus
          size="medium"
        />
        <Button
          component={Link}
          to="/"
          type="submit"
          fullWidth
          variant="contained"
        >
          Cambiar contraseña
        </Button>
      </Box>
      <Copyright />
    </Container>
  );
}
