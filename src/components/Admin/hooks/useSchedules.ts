import { useContext, useEffect, useState } from "react";
import { EquipmentContext } from "../../../store/EquipmentContext";

export const useCurrentDateDay = (date: Date) => {
    const {id:idEquipment} = useContext(EquipmentContext)
    const [list, setList] = useState<{ title?: string; time?: string }[]>([]);
  
    const getSchedulesDay = async () => {
      const currentDate = new Date(date).toLocaleDateString("es", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const res = await fetch(`http://localhost:8000/api/schedule/${idEquipment}?date=${currentDate}`)
      const data = await res.json()
      setList(data.schedules)
    };
  
    useEffect(() => {
      const getSchedules = setTimeout(() =>{
          getSchedulesDay()
      },
        2000
      )
      return () => clearTimeout(getSchedules)
    }, [date]);
    return {
      list,
    };
  };