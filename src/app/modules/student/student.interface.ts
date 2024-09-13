import { Types } from "mongoose";

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation?: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation?: string;
  contactNo: string;
  address: string;
};
// Main students interface below
export type Student = {
  id?: string;
  user:Types.ObjectId, //referencing the user objectId
  name: UserName;
  gender: 'male' | 'female'|"other";
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  admissionSemester:Types.ObjectId;
  academicDepartment:Types.ObjectId;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  isDeleted:boolean;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  
};
