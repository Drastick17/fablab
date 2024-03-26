import z from "zod";
export type FormFields = z.infer<typeof formSchema>;

export const formSchema = z.object({
  materials: z.array(z.object({ 
    id: z.number(),
    name: z.string()
   })),
  quantity: z.number().min(1),
  width: z.number().min(1).max(90),
  height: z.number().min(1).max(90),
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
  width:0,
  height: 0,
  note: "",
};
