import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../store/UserContext";
import style from "./style.module.css";

import LoadingButton from "@mui/lab/LoadingButton";

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
  const navigate = useNavigate();
  const { handleSubmit, loading, user } = useContext(UserContext);

  useEffect(() => {
    const roles = user?.roles ?? [];
    // if (roles) {
    //   navigate("/services");
    // }
  }, [user, navigate]);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ x: [180, 0], opacity: [0, 1] }}
        transition={{
          duration: 2,
          type: "spring",
          bounce: 1,
          stiffness: 100,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
      >
        <Container component="main" maxWidth="xs">
          <form onSubmit={handleSubmit}>
            <Box className={style.outerBox}>
              <Box className={style.innerBox}>
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
              <LoadingButton
                size="small"
                loading={loading}
                variant="contained"
                type="submit"
                fullWidth
              >
                Iniciar sesión
              </LoadingButton>
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
