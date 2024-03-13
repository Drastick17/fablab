import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import EmailVerification from "./components/EmailVerification";
import ForgotPassword from "./components/ForgotPassword";
import HeaderNav from "./components/Header";
import PasswordRecovery from "./components/PasswordRecovery";
import PrinterService from "./components/3DPrintersService";
import Services from "./components/Services/Services";
import SignIn from "./components/Sign-In";
import SignUp from "./components/Sign-up";

import { AnimatePresence, motion } from "framer-motion";
import UserContextProvider from "./store/UserContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.section
        animate={{ x: [80, 0], opacity: [0, 1] }}
        transition={{
          type: "spring",
          stiffness: 100,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
        exit={{
          type: "spring",
        }}
      >
        <HeaderNav />
        <main className="mainContainer">{children}</main>
      </motion.section>
    </AnimatePresence>
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
      path: "/email-verification",
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
  ]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
