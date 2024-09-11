import  bcrypt  from 'bcryptjs';
import { model, Schema } from 'mongoose';
import { TAcademicFaculty } from './interface.academicFaculty';

const AcademicFacultySchema = new Schema<TAcademicFaculty>({
    name: { type: String,unique:true},
  
}, { timestamps: true });

// userSchema.pre("save", async function(next){
//     const user= this
//     user.password= await bcrypt.hash(user.password as string,Number(config.bcrypt_salt));
//     next()
//   })
  
//   userSchema.post("save", async function(next){
//     const userData= this;
//     userData.password="";
  
//   })
// 3. Create a Model.
const AcademicFacultyModel = model<TAcademicFaculty>('AcademicFaculty', AcademicFacultySchema);
export default AcademicFacultyModel