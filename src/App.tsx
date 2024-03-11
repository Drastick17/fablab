import "./App.css";
import SignIn from "./components/SingIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "./components/Register";
import EmailVerification from "./components/EmailVerification";
import ForgotPassword from "./components/ForgotPassword";
import PasswordRecovery from "./components/PasswordRecovery";
import Services from "./components/Services";
import HeaderNav from "./components/HeaderNav";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/email-verification",
      element: <EmailVerification />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/password-recovery",
      element: <PasswordRecovery />,
    },
    {
      path: "/services",
      element: <Services />,
    },
  ]);

  const defaultTheme = createTheme({
    typography: {
      fontFamily: [
        "Co Headline Regular",
        "Co Headline Light",
        "Co Headline Bold",
      ].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <HeaderNav />
        <CssBaseline />

        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
