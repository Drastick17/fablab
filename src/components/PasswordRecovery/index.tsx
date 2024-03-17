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
      <Box
        display="flex"
        flexDirection="column"
        gap="1rem"
        marginBottom={"20px"}
        borderRadius={"24px"}
        padding={"20px"}
        overflow="hidden"
        boxShadow={"5px 5px 15px 5px #ddd"}
      >
        <Box
          display="grid"
          paddingX={"30px"}
          paddingTop={"20px"}
          sx={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "100px" }}
          justifyContent="center"
          alignItems="center"
        >
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
