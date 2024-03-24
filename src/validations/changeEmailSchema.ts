import { z } from "zod";

export const changeEmailSchema = z.object({
    email: z .string().email({
        message: "Por favor ingresa un correo valido"
    })
})