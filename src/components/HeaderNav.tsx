import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import style2 from "./style2.module.css";

const defaultTheme = createTheme({
    typography: {
      fontFamily: [
        "Co Headline Regular",
        "Co Headline Light",
        "Co Headline Bold",
      ].join(","),
    },
  });

export default function HeaderNav() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container className={style2.mainHeaderNav} maxWidth="lg">
        <Box>
        <Grid container spacing={1}>
              <Grid item xs={8} sx={{ textAlign: "left"
            , 
            display: "flex",
            flexDirection: "column" 
            }}>
                <img
                  className={style2.logoHFabLab}
                  src="../public/img/logoH.jpg"
                ></img>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "right" }}>
                <Grid container spacing={1}>
                  <Grid item xs={4} sx={{ textAlign: "center" }}>
                    <h2 className={style2.textNav}>Acerca de FabLab</h2>
                  </Grid>
                  <Grid item xs={4} sx={{ textAlign: "center" }}>
                    <h2 className={style2.textNav}>Servicios</h2>
                  </Grid>
                  <Grid item xs={4} sx={{ textAlign: "center" }}>
                    <h2 className={style2.textNav}>Ubicacion</h2>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}