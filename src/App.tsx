import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import PrinterService from "./components/3DPrintersService";
import EmailVerification from "./components/EmailVerification";
import ForgotPassword from "./components/ForgotPassword";
import HeaderNav from "./components/Header";
import PasswordRecovery from "./components/PasswordRecovery";
import Services from "./components/Services/Services";
import SignIn from "./components/Sign-In";
import SignUp from "./components/Sign-up";

import { AnimatePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import UserContextProvider, { UserContext } from "./store/UserContext";

import Agenda from "./components/Agenda";

const guestRoutes = ["", "sign-up", "email-verification"];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const user = useContext(UserContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // if (
    //   guestRoutes.includes(pathname.split("/")[1]) &&
    //   window.localStorage.getItem("token") !== null
    // ) {
    //   setTimeout(() => navigate("/services"), 200);
    // }
    // if (
    //   !window.localStorage.getItem("token") &&
    //   !guestRoutes.includes(pathname.split("/")[1])
    // ) {
    //   setTimeout(() => navigate("/"), 200);
    // }
  }, [pathname, navigate, user]);

  return (
    <>
      <HeaderNav />
      <main className="mainContainer">{children}</main>
    </>
  );
};

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <SignIn />
        </Layout>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <Layout>
          <SignUp />
        </Layout>
      ),
    },
    {
      path: "/email-verification/:id",
      element: (
        <Layout>
          <EmailVerification />
        </Layout>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <Layout>
          <ForgotPassword />
        </Layout>
      ),
    },
    {
      path: "/password-recovery",
      element: (
        <Layout>
          <PasswordRecovery />
        </Layout>
      ),
    },
    {
      path: "/services",
      element: (
        <Layout>
          <Services />
        </Layout>
      ),
    },
    {
      path: "/services/:serviceType",
      element: (
        <Layout>
          <PrinterService />
        </Layout>
      ),
    },
    {
      path: "/services/:serviceType/Agenda",
      element: (
        <Layout>
          <Agenda />
        </Layout>
      ),
    },
  ]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <UserContextProvider>
        <AnimatePresence mode="wait">
          <RouterProvider router={router} />
        </AnimatePresence>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
