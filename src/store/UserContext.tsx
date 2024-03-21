/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { toast } from "react-toastify";

type Context = {
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
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
};

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    id: "",
    roles: [""],
  });

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
        window.localStorage.setItem("token", token);
        setUser({
          username: user_name,
          email: user_email,
          id: user_id,
          roles: user_roles,
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

  const resetUser = () =>
    setUser({
      username: "",
      email: "",
      id: "",
      roles: [""],
    });

  const store = {
    handleSubmit,
    resetUser,
    user,
    loading,
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
