/* eslint-disable @typescript-eslint/no-explicit-any */
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContextProvider from "./store/UserContext";


import { useEffect } from "react";
import RouterProvider from "./configs/RouterProvider";

function App() {
  const defaultTheme = createTheme({
    typography: {
      fontFamily: [
        "Co Headline Regular",
        "Co Headline Light",
        "Co Headline Bold",
      ].join(","),
    },
  });

  useEffect(()=>{
    if(window.localStorage.getItem('token')){
      console.log('p')
    }
  },[])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <UserContextProvider>
        <RouterProvider />
        <ToastContainer />
      </UserContextProvider>
    </ThemeProvider>
  );
}
export default App;
