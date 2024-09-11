import { z } from "zod";


export const AcademicDFacultyValidationSchema = z.object({
    body: z.object({
        name: z.string(),

    })
})