import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';

import style from "./style2.module.css";

import HeaderNav from "./HeaderNav";


const defaultTheme = createTheme({
    typography: {
      fontFamily: [
        "Co Headline Regular",
        "Co Headline Light",
        "Co Headline Bold",
      ].join(","),
    },
  });

  export default function Services() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container className={style.mainServices} component="main" maxWidth="xl">
          <div>
            <HeaderNav />
          </div>
  
          <Grid container spacing={1} className={style.container}>
            <Grid item xs={12} md={8} sx={{ flex: 1 }} className={style.paddingContainer}>
              <Card sx={{ display: 'flex', backgroundColor: "#E6E6E6" }}>
                <CardContent sx={{ flex: 1 }}>
    
                  <Typography variant="subtitle1" paragraph sx={{
                  fontSize: "2.3rem"
                }}>
                  Service 3D
                </Typography>
                <img src="./public/img/impresora3D.jpg" alt="" className={style.imgService} />
                  </CardContent>
                </Card>
              
            </Grid>
  
            <Grid item xs={12} md={4} className={style.paddingContainer}>
              <Grid item xs={12} sx={{ marginBottom: "2rem" }}>
                <Card sx={{ display: 'flex', backgroundColor: "#E6E6E6" }}>
                  <CardContent sx={{ flex: 1 }}>
  
                    <Typography variant="subtitle1" paragraph>
                      Formatos Aceptados
                    </Typography>
                    <ThreeDRotationIcon />
                  </CardContent>
  
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ display: 'flex', backgroundColor: "#E6E6E6" }}>
                  <CardContent sx={{ flex: 1 }}>
  
                    <Typography variant="subtitle1" paragraph>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora dolorem non, explicabo nisi ullam repellat sapiente, alias quia consequuntur qui enim vero eligendi provident adipisci ducimus est quibusdam rem.
                    </Typography>
                    <Button variant="contained" sx={{
                      backgroundColor: "#DC2137"
                    }}>Agendar</Button>
                  </CardContent>
  
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }