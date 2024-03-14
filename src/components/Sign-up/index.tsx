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
import { Link, useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";

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
  const [phone, setPhone] = useState("+593");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(target));
    const { Types: type, phone, ConfirmPassword, ...user } = data;
    const phoneNumber = String(phone).replace("+", "").replaceAll(" ", "");

    //TO-DO ADD MESSAGE TO THE USER
    try {
      if (ConfirmPassword !== data.Password) return;
      const res = await fetch("http://localhost:8000/api/user/create", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          ...user,
          Phone: phoneNumber,
          Types: [type],
        }),
      });
      if (!res.ok) throw new Error("Error en la petición");
      
      const resData = await res.json();
      navigate(`/email-verification/${resData.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xl">
      <form onSubmit={handleSubmit}>
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
              name="CI"
              required
              fullWidth
              id="CI"
              label="Cédula"
              autoFocus
              size="small"
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
              name="phone"
              id="phone"
              onChange={(value) => {
                setPhone(value);
              }}
              value={phone}
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
            />
            <TextField
              required
              fullWidth
              name="ConfirmPassword"
              label="Confirmar contraseña"
              type="Password"
              id="password"
              autoComplete="new-password"
              size="small"
            />
          </div>
          <FormControl required>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Institución
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="Types"
            >
              <FormControlLabel
                value="UCACUE1"
                control={<Radio />}
                label="Miembro UCACUE"
              />
              <FormControlLabel
                value="UCACUE2"
                control={<Radio />}
                label="Estudiante UCACUE"
              />
              <FormControlLabel
                value="Otro"
                control={<Radio />}
                label="Estudiante Universidad Externa"
              />
              <FormControlLabel
                value="Exter"
                control={<Radio />}
                label="Publico general"
              />
              <FormControlLabel
                value="ExterEst"
                control={<Radio />}
                label="Publico general"
              />
            </RadioGroup>
          </FormControl>

          {/* <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="Quiero recibir notificaciones, promociones y noticias a mi Email"
        /> */}
          <Button
            sx={{ gridColumn: "1/-1" }}
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
      </form>
      <Copyright />
    </Container>
  );
}
