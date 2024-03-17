import z from "zod";
//Esto no cambiar
export type FormFields = z.infer<typeof formSchema>;

export const formSchema = z.object({
  machine: z.string().min(1),
  email: z.string().email("Debe ser un correo"),
});

export const defaultValues: FormFields = {
  email: "",
  machine: "",
};
