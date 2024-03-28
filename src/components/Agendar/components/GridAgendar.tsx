/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ModalAgendar } from "../modalAgenda";
import { useState, useEffect } from "react";

export function GridAgendar() {
  const [data, setData] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [scheduleId, setScheduleId] = useState(0);

  useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/schedule/${id}`
        );
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData(1);
  }, []);

  const handleOpen = (id: number) => {
    setScheduleId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <ModalAgendar
          open={open}
          handleClose={handleClose}
          id={scheduleId}
        />
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Agendamientos
      </Typography>
      {data ? (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Celular</TableCell>
              <TableCell>Servicio</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.schedules.map((row:any) => (
              <TableRow key={row.id}>
                <TableCell>{row.user.name}</TableCell>
                <TableCell>{row.user.phone}</TableCell>
                <TableCell>{row.service_type}</TableCell>
                {/* TODO ADD STATUS */}
                <TableCell>
                  <ButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                  >
                    <div>
                      <Button
                        onClick={() => handleOpen(row.id)}
                      >
                        Agendar Cita
                      </Button>
                    </div>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography>Cargando...</Typography>
      )}
    </>
  );
}
