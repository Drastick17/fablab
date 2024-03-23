/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
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

export default function EmailVerification() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const res = await fetch("http://localhost:8000/api/user/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...data }),
      });

      if (!res.ok) {
        return toast("Error en la petición", { type: "error" });
      }

      const resData = await res.json();
      if (resData.type === "error") {
        return toast("Error el código es incorrecto o ya se expiro", {
          type: "error",
        });
      }
      toast("Correo verificado correctamente", { type: "success" });
      navigate("/");
    } catch (e: any) {
      toast(e.message, { type: "error" });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit}>
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
            Hemos enviado un correo electrónico a tu email con un código de
            verificación, colócalo aquí para completar tu registro
          </Typography>

          <TextField
            required
            id="codigoVerificacion"
            label="Código de Verificacion"
            placeholder="1234"
            name="code"
            type="number"
            fullWidth
            inputProps={{ maxLength: 4 }}
            autoFocus
            size="small"
          />
          <Button type="submit" fullWidth variant="contained">
            Verificar
          </Button>
        </Box>
      </form>
      <Copyright />
    </Container>
  );
}
