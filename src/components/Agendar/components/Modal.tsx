/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

export default function Modal({ id }: { id: number }) {
  const [schedule, setSchedule] = useState<any>(null);
  const [equipments, setEquipments] = useState([]);
  const [scheduleEquipments, setScheduleEquipment] = useState([]);

  const getEquipments = async () => {
    try {
      const currentServiceType = schedule.service_type ?? "";
      const res = await fetch(
        `http://localhost:8000/api/equipment/list/${currentServiceType}`
      );
      const data = await res.json();
      setEquipments(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const getSchedule = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/schedule/get-one/${id}`
      );
      const data = await res.json();
      setSchedule(data.schedule);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    if (!(id === 0)) {
      getSchedule();
    }
    if (schedule?.service_type) {
      getEquipments();
    }
  }, [setSchedule]);

  return <div>Modal</div>;
}
