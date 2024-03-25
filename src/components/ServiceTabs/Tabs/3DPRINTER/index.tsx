/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { FormFields, defaultValues, formSchema } from "./schema";

export default function Index() {
  const { path } = useParams();
  const [materials, setMaterials] = useState<any>([]);

  const { control, handleSubmit, watch, formState, getValues } =
    useForm<FormFields>({
      mode: "onChange",
      reValidateMode: "onChange",
      resolver: zodResolver(formSchema),
      defaultValues,
    });
  const { errors } = formState;

  const getMaterials = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/material/${path}`);
      const data = await res.json();
      setMaterials(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  useEffect(() => {
    getMaterials();
  }, []);
  
  
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <TextField
          id="outlined-basic"
          label="Cantidad de impresiones"
          inputProps={{ inputMode: "numeric" }}
          variant="outlined"
        />
      <Controller
        name="quantity"
        control={control}
        render={(params) => <TextField type="number" 
        onChange={(evt:any) =>{
          console.log(evt) 
          //onChange()
        }}  />}
      />
      <Controller
        name="materials"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={materials}
            onChange={(evt: any, newValue: any) => {
              onChange([newValue?.value]);
            }}
            sx={{ width: 300 }}
            renderInput={(params: any) => (
              <TextField {...params} label="Material de impresión" />
            )}
          />
        )}
      />
    </>
  );
}
