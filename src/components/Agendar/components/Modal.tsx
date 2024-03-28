/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import style from '../style.module.css'

export default function ModalEquipment({ id, open, handleClose }: { id: number, open: boolean, handleClose: () => void }) {
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

  return      <Modal open={open} onClose={handleClose}>

  </Modal>;
}
