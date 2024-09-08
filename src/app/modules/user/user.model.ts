import  bcrypt  from 'bcryptjs';
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import config from '../../config';

const userSchema = new Schema<TUser>({
    id: { type: String},
    password: { type: String, },
    needPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ['student', 'faculty', 'admin'], trim: true },
    status: { type: String, enum: ['in-progress', 'blocked'], trim: true, default: 'in-progress' },
    isDeleted: { type: Boolean, default: false }

}, { timestamps: true });

userSchema.pre("save", async function(next){
    const user= this
    user.password= await bcrypt.hash(user.password as string,Number(config.bcrypt_salt));
    next()
  })
  
  userSchema.post("save", async function(next){
    const userData= this;
    userData.password="";
  
  })
// 3. Create a Model.
const UserModel = model<TUser>('User', userSchema);
export default UserModel