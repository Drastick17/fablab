import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
// import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";

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

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xl">
      <Box
        display="grid"
        justifyContent={"center"}
        alignContent={"center"}
        sx={{ gridTemplateColumns: "1fr 1fr" }}
        gap="1rem"
        marginBottom={"20px"}
        borderRadius={"24px"}
        padding={"20px"}
        overflow="hidden"
        boxShadow={"5px 5px 15px 5px #ddd"}
      >
        <Box
          display="grid"
          sx={{
            gridColumn: "1/-1",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "80px",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <img className={style.logo} src="/public/img/logo.jpg" />
          <img className={style.logo} src="/public/img/UcacueLogo.jpg" />
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
            // [SymbolclassName={style.innerRegisterFont}
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="Cédula"
            autoFocus
            size="small"
          />
          <TextField
            //className={style.innerRegisterFont}
            required
            fullWidth
            id="lastName"
            label="Nombres"
            name="lastName"
            autoComplete="family-name"
            size="small"
          />
          <TextField
            //className={style.innerRegisterFont}
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            size="small"
          />
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
        </div>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Institución
          </FormLabel>
          <RadioGroup
            //className={style.radioButtonGroupUsuario}

            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Miembro UCACUE"
              control={<Radio />}
              label="Miembro UCACUE"
            />
            <FormControlLabel
              value="Estudiante UCACUE"
              control={<Radio />}
              label="Estudiante UCACUE"
            />
            <FormControlLabel
              value="Otro"
              control={<Radio />}
              label="Estudiante Universidad Externa"
            />
            <FormControlLabel
              value="Externo"
              control={<Radio />}
              label="Publico general"
            />
          </RadioGroup>
        </FormControl>

        <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="Quiero recibir notificaciones, promociones y noticias a mi Email"
        />
        <Button
          sx={{ gridColumn: "1/-1" }}
          component={Link}
          to="/services"
          type="submit"
          fullWidth
          variant="contained"
        >
          Crear cuenta
        </Button>
        <Button
          sx={{ gridColumn: "1/-1" }}
          component={Link}
          to="/"
          className="link"
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </Button>
      </Box>
      <Copyright />
    </Container>
  );
}
