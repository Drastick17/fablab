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
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const resultado = await fetch(
          `http://localhost:8000/api/schedule/${id}`
        );
        const resultadoData = await resultado.json();
        //console.log(resultadoData);
        setData(resultadoData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData(1);
  }, []);

  const [open, setOpen] = React.useState(false);

  const [service, setService] = React.useState("");

  const [idPedido, setIdPedido] = React.useState(999);

  const handleOpen = (serviceString: string, id: number) => {
    setService(serviceString);
    setIdPedido(id);
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
          id={idPedido}
        ></ModalAgendar>
      )}
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
            {data.schedules.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.user.name}</TableCell>
                <TableCell>{row.user.phone}</TableCell>
                <TableCell>{row.service_type}</TableCell>
                <TableCell>
                  <ButtonGroup
                    variant="contained"
                    aria-label="Basic button group"
                  >
                    <div>
                      <Button
                        onClick={() => handleOpen(row.service_type, row.id)}
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
