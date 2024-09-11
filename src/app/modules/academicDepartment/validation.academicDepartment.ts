import { z } from "zod";


export const CreateAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        academicFaculty: z.string()
    })
})

