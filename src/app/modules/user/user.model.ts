import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
    id: { type: String, required: true },
    password: { type: String, required: true },
    needPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ['student', 'faculty', 'admin'], trim: true },
    status: { type: String, enum: ['in-progress', 'blocked'], trim: true, default: 'in-progress' },
    isDeleted: { type: Boolean, default: false }

}, { timestamps: true });

// 3. Create a Model.
const UserModel = model<TUser>('User', userSchema);
export default UserModel