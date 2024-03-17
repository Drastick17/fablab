/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { Autocomplete, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { defaultValues, formSchema, type FormFields } from "./schema";

//te recomiendo separar por materials, printers y qualities
// const printers = [
//   {
//     label: "Finder - 1 a 5",
//     materials: [{ label: ["PLA", "TPU"] }],
//     qualities: [{ label: ["Alta", "Media", "Baja"] }],
//     formats: [{ label: ["STL", "OBJ"] }],
//   },
//   {
//     label: "AnyCubic Kobra Max - 1",
//     materials: [{ label: ["PLA", "TPU", "PET-G"] }],
//     qualities: [{ label: ["Alta", "Media", "Baja"] }],
//     formats: [{ label: ["STL", "OBJ"] }],
//   },
//   {
//     label: "RaisePro 2 Plus - 1",
//     materials: [{ label: ["PLA", "TPU", "ABS", "Fibra Carbono", "Nylon"] }],
//     qualities: [
//       { label: ["Ultra alta", "Alta", "Media", "Baja", "Ultra baja"] },
//     ],
//     formats: [{ label: ["STL", "OBJ"] }],
//   },
// ];
//esto tendria que venir de la db
const printers = [
  { label: "Finder - 1 a 5", value: "Finder - 1 a 5" },
  { label: "AnyCubic Kobra Max - 1", value: "AnyCubic Kobra Max - 1" },
];

export default function FormPrinters3D() {
  const { control, handleSubmit, watch, formState, getValues } =
    useForm<FormFields>({
      mode: "onBlur",
      reValidateMode: "onBlur",
      resolver: zodResolver(formSchema),
      defaultValues,
    });
  const { errors } = formState;
    console.log(watch('machine'))
  //aqui manda los datos a la base
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="machine" // el nombre tiene que ser igual al que declaraste en el scheme
        control={control} // este siempre le pasas
        render={(
          { field: { onChange, value } } //todos los autocomplete tendran esta estructura lo que cambia son sus opciones
        ) => (
          <Autocomplete
            className="my-3"
            freeSolo
            fullWidth
            options={printers}
            value={value}
            onChange={(_, newValue) => {
              onChange(newValue);
            }}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  placeholder="Selecciona una opción"
                  label="Tipo de documento"
                  helperText={errors?.machine?.message}
                  error={!!errors.machine?.message}
                  variant="standard"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              );
            }}
          />
        )}
      />
    </form>
  );
}
