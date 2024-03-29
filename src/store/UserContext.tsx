/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

type Context = {
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  refreshUser?: () => void;
  user?: User;
  resetUser?: () => void;
  loading?: boolean;
};

export const UserContext = createContext<Context>({});

type User = {
  username: string;
  email: string;
  id: string;
  roles: string[];
  homePage: string;
  isAdmin: boolean;
};

const defaultUserValue = {
  username: "",
  email: "",
  id: "",
  roles: ["admin", "user"],
  homePage: "/",
  isAdmin: false,
};

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(defaultUserValue);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const res = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        return toast("Error en la petición", { type: "error" });
      }

      const { token, user_name, user_email, user_id, user_roles } =
        await res.json();
      if (token) {
        window.localStorage.setItem("token-fablab", token);
        setUser({
          username: user_name,
          email: user_email,
          id: user_id,
<<<<<<< Updated upstream
          roles: user_roles,
          homePage: "/",
=======
          roles: ["user", "admin"],
          homePage: "/services",
>>>>>>> Stashed changes
          isAdmin: user_roles.includes("admin"),
        });
        toast("Bienveido de vuelta " + user.username, { type: "success" });
      } else {
        return toast("Error al iniciar sesión del usuario", { type: "error" });
      }
    } catch (e: any) {
      return toast(e.message, { type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const refreshUser = async () => {
    try {
      const token = window.localStorage.getItem("token-fablab");

      const res = await fetch("http://localhost:8000/api/user/session", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const { user_name, user_email, user_id, user_roles } = await res.json();
      if (!res.ok) {
        setUser(defaultUserValue);
        throw new Error("without-session");
      }
      setUser({
        username: user_name,
        email: user_email,
        id: user_id,
        roles: user_roles,
        homePage: "/services",
        isAdmin: user_roles.includes("admin"),
      });
<<<<<<< Updated upstream
    } catch (e: any) {}
=======
    } catch (e: any) {
      // if (e.message === "without-session" && window.location.pathname !== "/") {
      //   window.location.href = "/";
      // }
    }
>>>>>>> Stashed changes
  };

  const resetUser = () => {
    window.localStorage.removeItem("token-fablab");
    setUser(defaultUserValue);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const store = {
    handleSubmit,
    refreshUser,
    resetUser,
    user,
    loading,
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
