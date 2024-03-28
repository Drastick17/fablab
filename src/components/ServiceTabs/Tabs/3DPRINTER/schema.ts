import z from "zod";
export type FormFields = z.infer<typeof formSchema>;

export const formSchema = z.object({
  materials: z.array(z.object({ 
    id: z.number(),
    name: z.string()
   })),
  quantity: z.number().min(1).max(30),
  mixedMaterials: z.boolean(),
  note: z.string().max(255),
  quality: z.string()
});

export const defaultValues: FormFields = {
  materials: [
    {
      id: 0,
      name:""
    },
  ],
  quantity: 0,
  quality:'',
  mixedMaterials: false,
  note: "",
};
