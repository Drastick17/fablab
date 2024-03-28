/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "@mui/lab/LoadingButton";
import {
    Autocomplete,
    Box,
    TextField,
    Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { thicknesses } from "./default";
import { FormFields, defaultValues, formSchema } from "./schema";

export default function Index() {
  const { path } = useParams();
  const [materials, setMaterials] = useState<any>([{ label: "ex", value: 1 }]);
  const otherMaterial = [1]; //only show with the user select other option
  const { control, handleSubmit, watch, formState, getValues } =
    useForm<FormFields>({
      mode: "onChange",
      reValidateMode: "onChange",
      resolver: zodResolver(formSchema),
      defaultValues,
    });
  const { errors } = formState;
  const [ materialsAdded, thickness] = watch([
    "materials",
    "thickness",
  ]);

  const getMaterials = async () => {
    try {
      const currentType = window.location.pathname.split('/')[2]
      const res = await fetch(`http://localhost:8000/api/material/${currentType}`);
      const data = await res.json();
      setMaterials(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  useEffect(() => {
    getMaterials();
  }, [path]);

  console.log(getValues());
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          "@media screen and (min-width:768px)": {
            display: "grid",
            gridTemplateColumns: "1fr",
          },
          gap: "1rem",
        }}
      >
        <Controller
          name="quantity"
          control={control}
          render={({ field: { onChange, value, ...field } }) => (
            <TextField
              label="Numero de impresiones"
              value={value}
              onChange={(evt: any) => {
                onChange(+evt.target.value);
              }}
              helperText={errors.quantity?.message}
              error={!!errors.quantity}
              type="number"
              sx={{ gridColumn: "span 2" }}
              {...field}
            />
          )}
        />
        <Controller
          name="thickness"
          control={control}
          render={({ field: { onChange } }) => (
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={thicknesses}
              sx={
                thickness.label === "Otro"
                  ? {
                      gridColumn: "1",
                    }
                  : {
                      gridColumn: "span 2",
                    }
              }
              onChange={(_, newValue: any) => {
                onChange(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Espesor (mm)" fullWidth
                helperText={errors.thickness?.message}
                error={!!errors.thickness}/>
              )}
            />
          )}
        />
        {thickness.label === "Otro" && (
          <Controller
            name="thickness.value"
            control={control}
            render={({ field: { onChange, value, ...field } }) => (
              <TextField
                label="Espesor especifico (mm)"
                value={value}
                onChange={(evt: any) => {
                  onChange(+evt.target.value);
                }}
                helperText={errors.thickness?.value?.message}
                error={!!errors.thickness?.value}
                type="number"
                {...field}
              />
            )}
          />
        )}

        <Box
          display="grid"
          sx={{
            gridTemplateColumns: "1fr",
            "@media screen and (min-width:768px)": {
              gridTemplateColumns: "1fr 1fr",
            },
          }}
          gap="1rem"
        >
          <Controller
            name={`materials.0.id`}
            control={control}
            render={({ field: { onChange } }) => (
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={materials}
                onChange={(_, newValue: any) => {
                  onChange(newValue?.value);
                }}
                sx={
                  otherMaterial.includes(materialsAdded[0]?.id)
                    ? {
                        gridColumn: "1",
                      }
                    : {
                        gridColumn: "span 2",
                      }
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{ gridColumn: "span 2" }}
                    label="Material de impresión"
                    fullWidth
                    helperText={errors.materials?.[0]?.id?.message}
                    error={!!errors.materials?.[0]?.id}
                  />
                )}
              />
            )}
          />
          {otherMaterial.includes(materialsAdded[0].id) && ( //only show with the user select other option
            <Controller
              name={`materials.${0}.name`}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nombre del material"
                  helperText={errors.materials?.[0]?.name?.message}
                  error={!!errors.materials?.[0]?.name}
                  fullWidth
                />
              )}
            />
          )}
          <Controller
            name="note"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Notas"
                fullWidth
                minRows={4}
                helperText={errors.note?.message}
                error={!!errors.note}
                sx={{ gridColumn: "span 2" }}
                placeholder="Coloca una descripción de tu impresión"
              />
            )}
          />
          <span style={{ gridColumn: "span 2", fontSize: "0.8rem" }}>
            *Si elige varios materiales tendra que especificar un material por
            cada impresión
          </span>
        </Box>
        <Box margin="0 auto" textAlign="center" gridColumn="span 2">
          <LoadingButton loading={false}>Cotizar</LoadingButton>
          <Typography
            sx={{ padding: "20px", fontSize: "0.8rem", color: "red" }}
            variant="body2"
          >
            *El agendamiento de las citas se dará de acuerdo a la disponibilidad
            de FabLab, recuerda que los horarios de atención son de 08:00 a
            13:00 y de 14:00 a 17:00. No te olvides de revisar constantemente tu
            correo electrónico, enviaremos mensajes de confirmación y agendación
            cuando se procese tu solicitud.*
          </Typography>
        </Box>
      </Box>
    </form>
  );
}
