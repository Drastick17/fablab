/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Grid from "@mui/material/Grid";
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
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import AddIcon from "@mui/icons-material/Add";
import style from "../style.module.css";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import { FormFields, formSchema, defaultValues } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";

type Schedule = {
  idsMaquinas: number[];
  startingDate: Date[];
  endingDate: Date[];
};

export default function ModalEquipment({
  id,
  open,
  handleClose,
}: {
  id: number;
  open: boolean;
  handleClose: () => void;
}) {
  const [schedule, setSchedule] = React.useState<any>(null);
  const [equipments, setEquipments] = React.useState([]);
  const [scheduleEquipments, setScheduleEquipment] = React.useState<Schedule>();

  const { control, handleSubmit, watch, formState, setValue, getValues } =
    useForm<FormFields>({
      mode: "onChange",
      reValidateMode: "onChange",
      resolver: zodResolver(formSchema),
      defaultValues,
    });
  const { isValid } = formState;

  const getEquipments = async (currentServiceType: string) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/equipment/list/${currentServiceType}`
      );
      const data = await res.json();
      console.log(data);
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
      getEquipments(data.schedule.service_type);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  React.useEffect(() => {
    getSchedule();
  }, []);
  console.log(isValid);
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Modal
        component={"form"}
        open={open}
        onClose={handleClose}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <>
          <Box className={style.modal} sx={{ borderRadius: "20px" }}>
            {schedule && (
              /*Box para mostrar las especificaciones del servicio */
              <Box className={style.innerBox}>
                <Typography id="modal-modal-title" variant="body1">
                  Pedido: {schedule?.id}
                </Typography>
                <Typography id="modal-modal-title" variant="body1">
                  Servicio: {schedule?.service_type}
                </Typography>
                <Typography id="modal-modal-title" variant="body1">
                  Notas: {schedule?.note}
                </Typography>
                <Typography id="modal-modal-title" variant="body1">
                  Estado: {schedule?.status}
                </Typography>
              </Box>
            )}

            {/*Box de los datetime picker */}
            <Box className={style.innerBox}>
              {/* Datetime picker */}
              <Grid item>
                <Controller
                  name="startDate.0"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        sx={{ paddingTop: "0px" }}
                        components={["DateTimePicker"]}
                      >
                        <DateTimePicker
                          label="Hora de inicio"
                          onChange={(value: any) => onChange(value)}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  )}
                ></Controller>
              </Grid>

              {/* Datetime picker */}
              <Grid item>
                <Controller
                  name="endingDate.0"
                  control={control}
                  render={({ field: { onChange, value, ...field } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        sx={{ paddingTop: "0px" }}
                        components={["DateTimePicker"]}
                      >
                        <DateTimePicker
                          label="Hora de finalización"
                          onChange={(value: any) => onChange(value)}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  )}
                ></Controller>
              </Grid>
            </Box>

            <Controller
              name="idEquipments.0"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  id="combo-box-demo"
                  options={equipments}
                  onChange={(_, newValue: any) => {
                    onChange(+newValue?.value);
                    setValue("idEquipments.0", newValue.value, {
                      shouldDirty: true,
                      shouldTouch: true,
                      shouldValidate: true,
                    });
                  }}
                  renderInput={(params) => (
                    <TextField {...params} value={value} label="Maquina" />
                  )}
                />
              )}
            ></Controller>
            <Button
              sx={{ marginTop: "10px" }}
              variant="contained"
              type="submit"
            >
              Agendar
            </Button>
          </Box>
        </>
      </Modal>
    </>
  );
}
