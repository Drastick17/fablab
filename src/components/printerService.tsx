import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import style from "./styleServices.module.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow1() {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} container spacing={1}>
        <Item>
          <Grid item xs={12} className={style.GridPrinters}>
            <img
              src="./public/img/impresora3D.jpg"
              alt=""
              className={style.imgService}
            />
          </Grid>
          <Grid item xs={12}>
            <Link className="link" to="/">
              Agenda
            </Link>
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} container spacing={1}>
        <Item>
          <Grid item xs={12} className={style.GridPrinters}>
            <img
              src="./public/img/impresora3D.jpg"
              alt=""
              className={style.imgService}
            />
          </Grid>
          <Grid item xs={12}>
            <Link className="link" to="/">
              Agenda
            </Link>
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4} container spacing={1}>
        <Item>
          <Grid item xs={12} className={style.GridPrinters}>
            <img
              src="./public/img/impresora3D.jpg"
              alt=""
              className={style.imgService}
            />
          </Grid>
          <Grid item xs={12}>
            <Link className="link" to="/">
              Agenda
            </Link>
          </Grid>
        </Item>
      </Grid>
    </>
  );
}

function FormRow2() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function Services() {
  return (
    <Container className={style.mainServices} component="main" maxWidth="xl">
      <Grid container spacing={1} className={style.GeneralGrid}>
        <Grid container item spacing={3}>
          <FormRow1 />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow2 />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow2 />
        </Grid>
      </Grid>
    </Container>
  );
}
