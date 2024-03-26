import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import style from "./style.module.css";
import Paper from "@mui/material/Paper";
import { GridAgendar } from "./gridAgendar";

export default function Agendar() {
  return (
    <Container className={style.main} component="main" maxWidth="xl">
      <Grid item xs={12} sx={{ marginTop: "15px" }}>
        <Paper className={style.paper}>
          <GridAgendar />
        </Paper>
      </Grid>
    </Container>
  );
}
