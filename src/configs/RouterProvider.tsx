/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import Layout from "../views/Layout";
import HeaderNav from "../components/Header";
import NotFound from "../components/404";
import SignIn from "../components/Sign-In";
import SignUp from "../components/Sign-up";
import EmailVerification from "../components/EmailVerification";
import ForgotPassword from "../components/ForgotPassword";
import PasswordRecovery from "../components/PasswordRecovery";
import Services from "../components/Services/Services";
import Agenda from "../components/Agenda";
import Agendar from "../components/Agendar";
import Profile from "../components/Profile";

interface RouteConfig {
  roles: string[];
  routes: {
    path: string;
    element: JSX.Element;
    name: string;
    navigation?: boolean;
  }[];
}

interface RouteData {
  link: string;
  label: string;
}

const routeConfig: RouteConfig[] = [
  {
    roles: [],
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
        path: "/services/:path",
        element: <Agenda />,
        name: "Agendar Servicios",
        navigation: false,
      },
    ],
  },
  {
    roles: ["admin"],
    routes: [{ path: "/agendar", element: <Agendar />, name: "Agendar" }],
  },
];

export default function RouterProvider() {
  const { user } = useContext(UserContext);
  const [routes, setRoutes] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let pathnames: any[] = [];

    if (user && user.roles.length > 0) {
      user.roles.forEach((role) => {
        const matchingConfig = routeConfig.find((config) =>
          config.roles.includes(role)
        );
        if (matchingConfig) {
          pathnames = pathnames.concat(matchingConfig.routes);
        }
      });
    } else {
      pathnames = routeConfig[0].routes;
    }

    // const navigations = pathnames
    // .map((route) => {
    //   if (route.navigation) {
    //     return {
    //       link: route.path,
    //       label: route.name,
    //     };
    //   }
    //   return null;
    // })
    // .filter((item) => item !== null);

    setRoutes(pathnames);
    setLoading(false);
  }, [user, setRoutes]);

  if (loading) return <div>Loading...</div>;

  const roles = user?.roles.length ?? 0;
  return (
    <Router>
      {roles > 0 && <HeaderNav navigations={[]} />}
      <Layout>
        <Routes>
          {routes.map((route: any, index: number) => (
            <Route key={index} {...route} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
