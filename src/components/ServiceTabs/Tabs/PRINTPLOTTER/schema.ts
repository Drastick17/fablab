import z from "zod";
export type FormFields = z.infer<typeof formSchema>;

export const formSchema = z.object({
  materials: z.array(z.object({ 
    id: z.number(),
    name: z.string()
   })),
  quantity: z.number().min(1),
  color: z.string(),
  note: z.string()
});

export const defaultValues: FormFields = {
  materials: [
    {
      id: 0,
      name:""
    },
  ],
  quantity: 0,
  color:"",
  note: "",
};
