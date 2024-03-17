import z from "zod";
//Esto no cambiar
export type FormFields = z.infer<typeof formSchema>;

export const formSchema = z.object({
  machine: z.string(),
  email: z.string().email(),
});

export const defaultValues: FormFields = {
  email: "",
  machine: "",
};
