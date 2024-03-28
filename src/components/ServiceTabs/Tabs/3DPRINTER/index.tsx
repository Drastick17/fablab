/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Autocomplete,
  Box,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormFields, defaultValues, formSchema } from "./schema";
import LoadingButton from "@mui/lab/LoadingButton";
import { qualities } from "./default";
import { UserContext } from "../../../../store/UserContext";

export default function Index() {
  const {user} = useContext(UserContext)
  const [materials, setMaterials] = useState<any>([{ label: "ex", value: 1 }]);
  const otherMaterial = [0]; //only show with the user select other option
  const { control, handleSubmit, watch, formState, setValue } =
    useForm<FormFields>({
      mode: "onChange",
      reValidateMode: "onChange",
      resolver: zodResolver(formSchema),
      defaultValues,
    });
  const { errors, isValid } = formState;
  const [quantity, mixedMaterials, materialsAdded] = watch([
    "quantity",
    "mixedMaterials",
    "materials",
  ]);

  const getMaterials = async () => {
    try {
      const currentType = window.location.pathname.split("/")[2];
      const res = await fetch(
        `http://localhost:8000/api/material/${currentType}`
      );
      const data = await res.json();
      setMaterials(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  useEffect(() => {
    getMaterials();
  }, []);

  const onSubmit = async(formData: any) => {
    const { mixedMaterials, note, materials, ...specs_material } = formData;
    const currentType = window.location.pathname.split("/")[2];
    const user_id = user?.id
    const bring_material = materials.some((material:any) => material.label === 'Otros')
    const files = {}
    const res = await fetch("http://localhost:8000/api/schedule/",{
      method:'POST',
      headers:{'Content-Type':'application/json'}
      ,
      body:JSON.stringify({
          service_type: currentType,
          user_id,
          bring_material,
          files,
          specs_material,
          materials,
      })
    })
    const data = await res.json()
    
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
              {...field}
            />
          )}
        />
        <Controller
          name="quality"
          control={control}
          render={({ field: { onChange } }) => (
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={qualities}
              onChange={(_, newValue: any) => {
                onChange(newValue.value);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Calidad de impresión" fullWidth />
              )}
            />
          )}
        />
        <Controller
          name="mixedMaterials"
          control={control}
          render={({ field }) => (
            <Box>
              <Typography>¿Desea usar varios materiales?</Typography>
              <Checkbox
                {...field}
                onInput={() => {
                  if (!field.value) {
                    setValue("materials", [{ id: 0, name: "" }], {
                      shouldDirty: true,
                      shouldTouch: true,
                      shouldValidate: true,
                    });
                  }
                }}
              />
            </Box>
          )}
        />
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
          {mixedMaterials &&
            quantity <= 30 &&
            quantity > 0 &&
            new Array(+quantity).fill(quantity).map((_, index) => (
              <>
                <Controller
                  name={`materials.${index}.id`}
                  control={control}
                  render={({ field: { onChange } }) => (
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={materials}
                      onChange={(_, newValue: any) => {
                        onChange(+newValue?.value);
                        setValue(`materials.${index}.name`, newValue.label, {
                          shouldDirty: true,
                          shouldTouch: true,
                          shouldValidate: true,
                        });
                      }}
                      sx={
                        otherMaterial.includes(materialsAdded[index]?.id)
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
                          label="Material de impresión"
                          helperText={errors.materials?.[index]?.id?.message}
                          error={!!errors.materials?.[index]?.id}
                          fullWidth
                        />
                      )}
                    />
                  )}
                />
                {otherMaterial?.includes(materialsAdded[index]?.id) && (
                  <Controller
                    name={`materials.${index}.name`}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Nombre del material"
                        helperText={errors.materials?.[index]?.name?.message}
                        error={!!errors.materials?.[index]?.name}
                        fullWidth
                      />
                    )}
                  />
                )}
              </>
            ))}
          {!mixedMaterials && (
            <>
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
                      setValue(`materials.${0}.name`, newValue.label, {
                        shouldDirty: true,
                        shouldTouch: true,
                        shouldValidate: true,
                      });
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
            </>
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
          <LoadingButton type="submit" loading={false}>
            Cotizar
          </LoadingButton>
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
