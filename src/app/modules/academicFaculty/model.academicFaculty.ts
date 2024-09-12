import  bcrypt  from 'bcryptjs';
import { model, Schema } from 'mongoose';
import { TAcademicFaculty } from './interface.academicFaculty';

const AcademicFacultySchema = new Schema<TAcademicFaculty>({
    name: { type: String,unique:true},
  
}, { timestamps: true });


// 3. Create a Model.
const AcademicFacultyModel = model<TAcademicFaculty>('AcademicFaculty', AcademicFacultySchema);
export default AcademicFacultyModel