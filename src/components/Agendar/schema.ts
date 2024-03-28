import z from "zod";
export type FormFields = z.infer<typeof formSchema>;

export const formSchema = z.object({
    idEquipments: z.array(z.number({ 

     })),
    startDate: z.array(z.date({})),
    endingDate: z.array(z.date({}))
});

export const defaultValues: FormFields = {
    idEquipments:[],
    startDate:[new Date()],
    endingDate: [new Date()]
};
  