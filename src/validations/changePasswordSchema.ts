import { z } from "zod";

export const changePasswordSchema = z.object({
    password: z.string().min(4, {
        message: "La contraseña debe tener minimo 6 caracteres"
    }),
    newPassword: z.string().min(4, {
        message: "La contraseña debe tener minimo 6 caracteres"
    }),
    confirmPassword: z.string().min(4, {
        message: "La contraseña debe tener minimo 6 caracteres"
    })
}).refine(data => data.newPassword === data.confirmPassword, {
    message: "Las constraseñas deben coincidir",
    path: ["confirmPassword"]
})