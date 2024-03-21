/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Agenda from "../components/Agenda";
import EmailVerification from "../components/EmailVerification";
import ForgotPassword from "../components/ForgotPassword";
import HeaderNav from "../components/Header";
import PasswordRecovery from "../components/PasswordRecovery";
import Services from "../components/Services/Services";
import SignIn from "../components/Sign-In";
import SignUp from "../components/Sign-up";

import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../store/UserContext";

import NotFound from "../components/404";
import Agendar from "../components/Agendar";
import Profile from "../components/Profile";

import Layout from "../views/Layout";

export default function RouterProvider() {
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
        {
          path: "/services/:type",
          element: <Agenda />,
          name: "Agendar Servicios",
        },
      ],
    },
    {
      roles: ["admin"],
      routes: [{ path: "/agendar", element: <Agendar />, name: "Agendar" }],
    },
  ];

  let userRoutes: any[] = [];

  if (user && user.roles) {
    user.roles.forEach((role) => {
      const matchingConfig = routeConfig.find((config) =>
        config.roles.includes(role)
      );
      if (matchingConfig) {
        userRoutes = userRoutes.concat(matchingConfig.routes);
      }
    });
  }

  const navigations = userRoutes.map((route) => ({
    link: route.path,
    label: route.name,
  }));

  return (
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
  );
}
