import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ModalAgendar } from "./modalAgenda";

const rows = [
  {
    id: 0,
    name: "Juanito",
    cellphone: "0123456789",
    material: "AVS",
    service: "3D Printer",
  },
  {
    id: 1,
    name: "Paco",
    cellphone: "0123456789",
    material: "PLS",
    service: "Laser Cutter",
  },
];

export function GridAgendar() {
  const [open, setOpen] = React.useState(false);

  const [service, setService] = React.useState("");

  const handleOpen = (serviceString: string) => {
    setService(serviceString);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <ModalAgendar
          open={open}
          handleClose={handleClose}
          servicio={service}
        ></ModalAgendar>
      )}
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Agendamientos
      </Typography>
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.cellphone}</TableCell>
              <TableCell>{row.service}</TableCell>
              <TableCell>
                <ButtonGroup
                  variant="contained"
                  aria-label="Basic button group"
                >
                  <div>
                    <Button onClick={() => handleOpen(row.service)}>
                      Agendar Cita
                    </Button>
                  </div>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
