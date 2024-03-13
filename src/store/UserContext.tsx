import { createContext } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContext.Provider value={{ name: "Danny" }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
