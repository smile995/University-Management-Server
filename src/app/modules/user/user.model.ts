// export type TUser={
//     id:string,
//     password:string,
//     needPasswordChange:boolean,
//     role:"student" |"faculty"|"admin",
//     status: "in-progress"|"blocked",
//     isDeleted:boolean
// }

import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema=new Schema<TUser>({
    id:{ type:String, required:true},
    password:{type:String,required:true},
    needPasswordChange:{type:Boolean,default:true},
    role:{ type:String,enum:['student','faculty','admin'],trim:true},
    status:{ type:String,enum:['in-progress','blocked'],trim:true},
   isDeleted:{type:Boolean,default:false}

},{timestamps:true});

// 3. Create a Model.
const userModel = model<TUser>('User', userSchema);