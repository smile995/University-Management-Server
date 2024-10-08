
import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';


const userNameSchema = new Schema<UserName>({

  firstName: {
    type: String,
    required: [true, "First Name is Required"],
    trim: true
  },
  middleName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Last First Name is Required"],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, "Father Name is Required"],
  },
  fatherOccupation: {
    type: String,
    required: true,
    trim: true
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father Contact Number is Required"],
    trim: true
  },
  motherName: {
    type: String,
    required: [true, "Mother Name is Required"],
    trim: true
  },
  motherOccupation: {
    type: String,
    trim: true
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother Contact Number is Required"],
    trim: true
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: [true, "Local Gourdian Name is Required"],
    trim: true
  },
  occupation: {
    type: String,
    trim: true
  },
  contactNo: {
    type: String,
    required: [true, "Contact Number is Required"],
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    unique: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User ID is Required"],
    unique: true,
    ref: "User"
  },

  name: {
    type: userNameSchema,
    required: [true, "Student Name is Required"],
    trim: true,

  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', "other"],
      message: "{VALUE} is not valid! Try to use male, female or other"
    },
    required: true,
    trim: true
  },
  dateOfBirth: { type: Date, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  contactNo: { type: String, required: true, trim: true },
  emergencyContactNo: { type: String, required: true, trim: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    trim: true
  },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "AcademicSemester"
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "AcademicDepartment"
  },
  presentAddress: { type: String, required: true, trim: true },
  permanentAddress: { type: String, required: true, trim: true },
  isDeleted: { type: Boolean, default: false },
  guardian: {
    type: guardianSchema,
    required: true,
    trim: true
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
    trim: true
  },

  profileImg: { type: String, trim: true },

});




export const StudentModel = model<Student>('Student', studentSchema)