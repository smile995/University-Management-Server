import { z } from "zod";


export const userValidationSchema=z.object({
id:z.string(),
password:z.string().min(6,{message:'Password should be minimum 6 character or longer'}),
needPasswordChange:z.boolean(),
role:z.enum(["student","faculty","admin"]),
status:z.enum(["in-progress","blocked"]).default('in-progress'),
isDeleted:z.boolean().default(false)
})