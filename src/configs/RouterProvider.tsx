/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "../components/404";
import Agendar from "../components/Agendar";
import EmailVerification from "../components/EmailVerification";
import ForgotPassword from "../components/ForgotPassword";
import HeaderNav from "../components/Header";
import PasswordRecovery from "../components/PasswordRecovery";
import Profile from "../components/Profile";
import Agenda from "../components/ServiceTabs";
import Services from "../components/Services/Services";
import SignIn from "../components/Sign-In";
import SignUp from "../components/Sign-up";
import { UserContext } from "../store/UserContext";
import Layout from "../views/Layout";

interface RouteConfig {
  roles: string[];
  routes: {
    path: string;
    element: JSX.Element;
    name: string;
    navigation?: boolean;
  }[];
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
