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
import Agenda from "./components/Agenda";
import EmailVerification from "./components/EmailVerification";
import ForgotPassword from "./components/ForgotPassword";
import HeaderNav from "./components/Header";
import PasswordRecovery from "./components/PasswordRecovery";
import Services from "./components/Services/Services";
import SignIn from "./components/Sign-In";
import SignUp from "./components/Sign-up";

import { AnimatePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContextProvider, { UserContext } from "./store/UserContext";

import Agendar from "./components/Agendar";

const Layout = ({
  children,
  rol,
}: {
  children: React.ReactNode;
  rol?: string;
}) => {
  const { user } = useContext(UserContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // if (!rol) {
    //   return;
    // } else if (user?.roles.includes(rol)) {
    //   setTimeout(() => navigate("/services"));
    // } else {
    //   setTimeout(() => navigate("/"));
    // }
  }, [pathname, navigate, user, rol]);

  return (
    <>
      <HeaderNav hidden={!rol} />
      <main className="layoutMain">{children}</main>
      <ToastContainer />
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
        <Layout rol="user">
          <Services />
        </Layout>
      ),
    },
    {
      path: "/services/:serviceType",
      element: (
        <Layout rol="user">
          <PrinterService />
        </Layout>
      ),
    },
    {
      path: "/services/agendar",
      element: (
        <Layout rol="admin">
          <Agenda />
        </Layout>
      ),
    },
    {
      path: "/agendar",
      element: (
        <Layout rol="user">
          <Agendar />
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
