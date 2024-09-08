import { z } from "zod";


export const userValidationSchema=z.object({
password:z.string().min(6,{message:'Password should be minimum 6 character or longer'}).optional(),
role:z.enum(["student","faculty","admin"]),

})