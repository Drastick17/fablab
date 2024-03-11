import Grid from "@mui/material/Grid";
import header from "./header.module.css";
import { motion } from "framer-motion";

export default function HeaderNav() {
  return (
    <header className={header.mainHeaderNav}>
      <Grid
        container
        spacing={1}
        justifyContent={"space-between"}
        alignContent={"center"}
      >
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            color: "#fff",
          }}
        >
          <img
            className={header.logoHFabLab}
            src="/public/img/logo-withoutbg.png"
          />
          <h1>FABLAB</h1>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <Grid container spacing={1}>
            <Grid item xs={4} sx={{ textAlign: "center" }}>
              <h2 className={header.textNav}>Acerca de FabLab</h2>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "center" }}>
              <h2 className={header.textNav}>Servicios</h2>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "center" }}>
              <h2 className={header.textNav}>Ubicacion</h2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
}
