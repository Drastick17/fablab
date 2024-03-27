import { createContext, useState } from "react";

type Context = {
  id?: number;
  setSelectEquipment?: (id:number) => void
};

export const EquipmentContext = createContext<Context>({});

export default function EquipmentContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedEquipment, setSelectEquipment] = useState(0);
  return (
    <EquipmentContext.Provider
      value={{
        id: selectedEquipment,
        setSelectEquipment,
      }}
    >
      {children}
    </EquipmentContext.Provider>
  );
}
