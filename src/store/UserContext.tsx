import { createContext, useState } from "react";

type Context= {
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  user?: User;
  resetUser?: () => void
}
export const UserContext = createContext<Context>({});


type User = {
  username: string;
  email: string;
  id: string;
  roles: string[];
};

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    id: "",
    roles: [],
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const res = await fetch("http://localhost:8000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if(!res.ok){
        return 
      }
      const resData = await res.json();

      window.localStorage.setItem("token", resData.token);
      setUser({
        username: resData.user_name,
        email: resData.user_email,
        id: resData.user_id,
        roles: resData.user_roles,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const resetUser = () => setUser({
    username: "",
    email: "",
    id: "",
    roles: [],
  })

  const store = {
    handleSubmit,
    resetUser,
    user,
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
