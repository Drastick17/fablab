import z from "zod";
export type FormFields = z.infer<typeof formSchema>;

export const formSchema = z.object({
  materials: z.array(
    z.object({
      id: z.number(),
      name: z.string(), //.min(5)
    })
  ),
  quantity: z.number().min(1),
  note: z.string().max(255),
  thickness: z.object({
    value: z.number().min(0.1).max(9),
    label: z.string(),
  }),
});

export const defaultValues: FormFields = {
  materials: [
    {
      id: 0,
      name: "",
    },
  ],
  quantity: 0,
  thickness: {
    value: 0,
    label: "",
  },
  note: "",
};
