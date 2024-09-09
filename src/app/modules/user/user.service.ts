
import config from "../../config";
import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import UserModel from "./user.model";
import { TUser } from "./user.interface";

const createStudentIntoDB = async (password: string, student: Student) => {
  // if password is not given then use default password
  let userData: Partial<TUser> = {

  };
  // set the password
  userData.password = password || (password = config.default_pass as string)
  userData.role = 'student';
  userData.id = '2030001'
  const newUser = await UserModel.create(userData);
  // create a student
  if (Object.keys(student).length) {
    student.id = newUser.id, //replace student id by user id
      student.user = newUser._id //replace user objectId id by user _id
  }
  // creating a new student
  const newStudent = await StudentModel.create(student)
  return newStudent
};

export const userServices = {
  createStudentIntoDB
}

