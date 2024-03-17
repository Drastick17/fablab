import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.css";
import Agenda from "./components/Agenda";
import EmailVerification from "./components/EmailVerification";
import ForgotPassword from "./components/ForgotPassword";
import HeaderNav from "./components/Header";
import PasswordRecovery from "./components/PasswordRecovery";
import Services from "./components/Services/Services";
import SignIn from "./components/Sign-In";
import SignUp from "./components/Sign-up";

import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContextProvider, { UserContext } from "./store/UserContext";

import NotFound from "./components/404";
import Agendar from "./components/Agendar";
import Profile from "./components/Profile";

import { motion } from "framer-motion";

const Layout = ({
  children,
  rol,
}: {
  children: React.ReactNode;
  rol?: string;
}) => {
  const { pathname } = useLocation();

  return (
    <AnimatePresence key={pathname}>
      <motion.section
        key="layout"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <main
          style={{
            alignItems: !rol ? "center" : "start",
            justifyContent: "center",
          }}
          className="layoutMain"
        >
          {children}
        </main>
      </motion.section>
    </AnimatePresence>
  );
};

const RouterProvider = () => {
  const { user } = useContext(UserContext);

  const routeConfig = [
    {
      roles: [""],
      routes: [
        { path: "/", element: <SignIn />, name: "Inicio" },
        { path: "/sign-up", element: <SignUp />, name: "Iniciar Sesión" },
        {
          path: "/email-verification/:id",
          element: <EmailVerification />,
          name: "Verificación de Correo",
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
          name: "Olvidó Contraseña",
        },
        {
          path: "/password-recovery",
          element: <PasswordRecovery />,
          name: "Recuperación de Contraseña",
        },
      ],
    },
    {
      roles: ["user"],
      routes: [
        { path: "/services", element: <Services />, name: "Servicios" },
        { path: "/profile", element: <Profile />, name: "Perfil" },
      ],
    },
    {
      roles: ["admin"],
      routes: [
        {
          path: "/services/agendar",
          element: <Agenda />,
          name: "Agendar Servicios",
        },
        { path: "/agendar", element: <Agendar />, name: "Agendar" },
      ],
    },
  ];

  const userRoutes =
    routeConfig.find((config) =>
      user?.roles.some((role) => config.roles.includes(role))
    )?.routes || [];

  const navigations = userRoutes.map((route) => ({
    link: route.path,
    label: route.name,
  }));

  return (
    <>
      <Router>
        {user?.roles[0] !== "" && <HeaderNav navigations={navigations} />}
        <Layout>
          <Routes>
            {userRoutes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
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
