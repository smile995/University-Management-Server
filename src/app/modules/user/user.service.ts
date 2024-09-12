import { TAcademicSemester } from './../academicSemester/academicSemester.interface';

import config from "../../config";
import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import UserModel from "./user.model";
import { TUser } from "./user.interface";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, student: Student) => {
  // if password is not given then use default password
  let userData: Partial<TUser> = {

  };
  // find a semester by id
  const ASemester = await AcademicSemesterModel.findById(student.admissionSemester)
  // set the password
  userData.password = password || (password = config.default_pass as string)
  userData.role = 'student';
  if (ASemester) {
    userData.id = await generateStudentId(ASemester)
    student.id = await generateStudentId(ASemester)
  }

  // student.admissionSemester=
  const newUser = await UserModel.create(userData);
  // create a student
  if (Object.keys(student).length) {
    student.user = newUser._id //replace user objectId id by user _id
  }
  // creating a new student
  const newStudent = await StudentModel.create(student)
  return newStudent
};

export const userServices = {
  createStudentIntoDB
}

