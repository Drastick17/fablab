import z from "zod";
export type FormFields = z.infer<typeof formSchema>;

export const formSchema = z.object({
  materials: z.array(z.object({
    id_material: z.number()
  })),
  quantity: z.number().min(1),

});

export const defaultValues: FormFields = {
  materials: [{id_material: 0}],
  quantity:0,
};
