import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
// import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";

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
  const { handleSubmit } = useContext(UserContext);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: [0, 1],
        }}
        transition={{
          duration: 2,
          times: [0, 0.3],
        }}
      >
        <Container component="main" maxWidth="xs">
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              gap="1rem"
              marginBottom={"20px"}
              marginTop={"10px"}
              borderRadius={"24px"}
              padding={"20px"}
              overflow="hidden"
              boxShadow={"5px 5px 15px 5px #ddd"}
            >
              <Box
                display="grid"
                paddingX={"30px"}
                paddingTop={"20px"}
                sx={{
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "100px",
                }}
                justifyContent="center"
                alignItems="center"
              >
                <img className={style.logo} src="/public/img/logo.jpg" />
                <img className={style.logo} src="/public/img/UcacueLogo.jpg" />
              </Box>

              <Typography textAlign="center" component="h1" variant="h5">
                Iniciar Sesión
              </Typography>
              <TextField
                required
                fullWidth
                id="cedula"
                label="Cédula"
                name="CI"
                autoFocus
                size="medium"
              />
              <TextField
                required
                fullWidth
                name="Password"
                label="Contraseña"
                type="password"
                id="password"
                size="medium"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuérdame"
              />
              <Button type="submit" fullWidth variant="contained">
                Iniciar sesión
              </Button>
              <Button component={Link} to="/forgot-password" className="link">
                ¿Olvidaste tu contraseña?
              </Button>
              <Button component={Link} to="/sign-up" className="link">
                ¿No tienes cuenta?
              </Button>
            </Box>
          </form>
          <Copyright />
        </Container>
      </motion.div>
    </AnimatePresence>
  );
}
